import axios from "axios";
import { instanceBackEnd } from "../api/axios.js";

export default {
  async startProses(req, res) {
    try {
      console.log("start proses");

      //getWarningData
      const resWarning = await axios.get(`http://localhost:5021/getWarning`);

      pecahData(resWarning);
      return res.status(201).send({ message: "prosesberjalan" });
    } catch (error) {
      console.log("error getWarning");
    }
  },
};

async function pecahData(resWarning) {
  const jumlahWarning = await resWarning.data.jumlah;
  const messageWarning = await resWarning.data.message;
  const dataWArning = await resWarning.data.data;
  console.log(
    "ju8mlah warning : " + jumlahWarning + ", message : " + messageWarning
  );

  for (let i = 0; i < jumlahWarning; i++) {
    const site_name = await dataWArning[i].site_name;
    var site_ke = i + 1;
    console.log("site_name : " + site_name + " " + site_ke);

    checkProblem(site_name, dataWArning, i);
  }
}

async function checkProblem(site_name, dataWArning, i) {
  var ArrProblemId = [];
  var countCheck = 0;
  const totalCheck = 3;

  //nilaiWarning
  const battWarning = await dataWArning[i].batt_volt;
  const load1Warning = await dataWArning[i].load1;
  const load2Warning = await dataWArning[i].load2;

  try {
    //Cek Battery rendah
    const payloadBatt = {
      problem_id: 1,
    };
    const resBatt = await instanceBackEnd.post("checkProblemId", payloadBatt);
    const battProblem = await resBatt.data.data.batt_volt;
    const problemIdBatt = await resBatt.data.data.problem_id;

    if (battWarning <= battProblem) {
      console.log(
        "baterai bermasalah : " +
          site_name +
          " : " +
          battWarning +
          " <= " +
          battProblem
      );
      ArrProblemId.push(problemIdBatt);
      countCheck = countCheck + 1;
    } else {
      countCheck = countCheck + 1;
    }

    //cek sensor
    const payloadSensor = {
      problem_id: 2,
    };

    const resSensor = await instanceBackEnd.post(
      "checkProblemId",
      payloadSensor
    );
    const load1Sensor = await resSensor.data.data.load1;
    const load2Sensor = await resSensor.data.data.load2;
    const problemIdSensor = await resSensor.data.data.problem_id;

    if (load1Warning <= load1Sensor && load2Warning <= load2Sensor) {
      console.log(
        "sensor bermasalah " +
          site_name +
          " = load1 :" +
          load1Warning +
          " <= " +
          load1Sensor +
          "|| load2 : " +
          load2Warning +
          " <= " +
          load2Sensor
      );
      ArrProblemId.push(problemIdSensor);
      countCheck = countCheck + 1;
    } else {
      countCheck = countCheck + 1;
    }

    //cek LVD
    const payloadLvd = {
      problem_id: 3,
    };

    const resLvd = await instanceBackEnd.post("checkProblemId", payloadLvd);
    const load1Lvd = await resLvd.data.data.load1;
    const load2Lvd = await resLvd.data.data.load2;
    const problemIdLvd = await resLvd.data.data.problem_id;

    if (load1Warning <= load1Lvd && load2Warning <= load2Lvd) {
      console.log(
        "Lvd bermasalah " +
          site_name +
          " = load1 :" +
          load1Warning +
          " <= " +
          load1Lvd +
          "|| load2 : " +
          load2Lvd +
          " <= " +
          load2Sensor
      );
      ArrProblemId.push(problemIdLvd);
      countCheck = countCheck + 1;
    } else {
      countCheck = countCheck + 1;
    }

    //TotalPengecekan
    if (countCheck == totalCheck) {
      // console.log("pengecekan error selesai : " + site_name);
      console.log("ArrProblemId : " + site_name + " - " + ArrProblemId);
      checkTicket(site_name, ArrProblemId, i);
    }
  } catch (error) {
    console.log("error checkProblem!!!");
  }
}

async function checkTicket(site_name, ArrProblemId, i) {
  try {
    var counterPesan = 0;

    const payload = {
      site_name: site_name,
    };

    const resTicket = await instanceBackEnd.post("checkTicket", payload);
    const ticketMsg = await resTicket.data.message;
    const counter = await resTicket.data.counter;
    const counterTicket = counter + 1;
    // console.log("ticket Message : " + ticketMsg);
    if (ticketMsg == "no_ticket") {
      console.log("ticket_belum_ada, create_ticket_baru " + site_name);

      // checkProblem(site_name, dataWArning, i);
      createTicket(site_name, counterTicket, ArrProblemId, i);
    }
    if (ticketMsg == "sukses") {
      // console.log("cek_ticket_status");
      const ticket_status = await resTicket.data.data.status_ticket;

      if (ticket_status == "closed") {
        console.log("ticket_sudah_ada, sudah_close, create_ticket_baru");

        createTicket(site_name, counterTicket, ArrProblemId, i);
        // checkProblem(site_name, dataWArning, i);
      }

      if (ticket_status == "open") {
        console.log("ticket_sudah_ada, status_open - " + site_name);
        //kirim pesan langsung
      }
    }
  } catch (error) {
    console.log("error checkTicket!!! " + site_name);
  }
}

async function createTicket(site_name, counterTicket, ArrProblemId, i) {
  try {
    console.log("mulai create ticket");
    const date = Date.now();
    const ts = formatDate(new Date());
    const ticket_code = site_name + "-" + date;
    // console.log("ticket_code : " + ticket_code);
    // console.log("ArrProblemId : " + ArrProblemId);

    const payload = {
      ticket_code: ticket_code,
      ts: ts,
      site_name: site_name,
      status_site: "warning",
      status_ticket: "open",
      counter: counterTicket,
      problem_id: ArrProblemId,
    };
    const resCreateTicket = await instanceBackEnd.post("createTicket", payload);
    const createMess = await resCreateTicket.data.message;

    console.log(createMess + " : " + site_name);
    // return res.status(201).send({ message: "suksesGan" });
  } catch (error) {
    console.log("error createTicket!!! " + site_name);
  }
}

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

function formatDate(date) {
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-") +
    " " +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join(":")
  );
}
