import { Op } from "sequelize";
import models from "../models";

const { ticketModel } = models;
const { detailssitesModel } = models;

export default {
  async getAllTicket(req, res) {
    try {
      const response = await ticketModel.findAll({
        order: [["id", "DESC"]],
      });
      return res.status(201).send({ data: response });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        message: "Failed Get All Ticket",
      });
    }
  },

  async getOpenTicket(req, res) {
    try {
      const response = await ticketModel.findAll({
        where: {
          status_ticket: "open",
        },
        order: [["id", "DESC"]],
      });
      return res.status(201).send({ data: response });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        message: "Failed Get All Ticket",
      });
    }
  },

  async checkTicket(req, res) {
    try {
      const site_name = req.body.site_name;
      var message = "";
      var counter = 0;
      const response = await ticketModel.findOne({
        where: {
          site_name: site_name,
        },
        order: [["ts", "DESC"]],
      });

      //cek jika tidak ada site
      if (response == null) {
        message = "no_ticket";
      } else {
        message = "sukses";

        //cekJumlah ticket
        const resCount = await ticketModel.findAll({
          where: {
            site_name: site_name,
          },
          order: [["ts", "DESC"]],
        });

        counter = resCount.length;
      }

      return res
        .status(201)
        .send({ counter: counter, message: message, data: response });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        message: "failed!",
      });
    }
  },

  async createTicketAuto(req, res) {
    console.log("createticket");
    try {
      await ticketModel.create(req.body);
      return res
        .status(201)
        .send({ status: 201, message: "create ticket successfully" });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        message: "FailedCreateTicket",
      });
    }
  },

  async createTicketManual(req, res) {
    console.log("createticketManual");
    const site_name = req.body.site_name;
    const status_site = req.body.status_site;
    const status_ticket = req.body.status_ticket;
    const response = req.body.response;
    const problem_id = req.body.problem_id;
    const counter = req.body.counter;
    const date = Date.now();
    const ts = formatDate(new Date());
    const response_at = formatDate(new Date());

    var arrRessponse = [];
    var resAtributes = {
      text: response,
      time: response_at,
    };

    arrRessponse.push(resAtributes);

    var ticket_code = "";
    if (status_site === "warning") {
      ticket_code = "TTW-" + date + "-" + site_name;
    }

    if (status_site === "down") {
      ticket_code = "TTD-" + date + "-" + site_name;
    }

    try {
      await ticketModel.create({
        ticket_code: ticket_code,
        ts: ts,
        site_name: site_name,
        status_site: status_site,
        status_ticket: status_ticket,
        counter: counter,
        problem_id: problem_id,
        response: arrRessponse,
      });
      return res
        .status(201)
        .send({ status: 201, message: "create ticket successfully" });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        message: "FailedCreateTicket",
      });
    }
  },

  async updateResponse(req, res) {
    var arrResponse = req.body.arr_response;
    const statusTicket = req.body.status_ticket;
    const responseTicket = req.body.responseTicket;
    let response_at = formatDate(new Date());
    const ticket_code = req.body.ticket_code;

    try {
      let closed_at = null;
      if (statusTicket === "closed") {
        closed_at = formatDate(new Date());
      }

      const addResponse = {
        text: responseTicket,
        time: response_at,
      };
      arrResponse.push(addResponse);

      const status_ticket = statusTicket;
      const response = await ticketModel.update(
        {
          ticket_code: ticket_code,
          response: arrResponse,
          status_ticket: status_ticket,
          closed_at: closed_at,
        },
        {
          where: { ticket_code: ticket_code },
        }
      );

      res.status(200).json({ msg: "responseSukses" });
    } catch (error) {
      console.log(error.message);
    }
  },
};

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
