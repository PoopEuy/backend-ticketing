import { Op } from "sequelize";
import models from "../models";

const { ticketModel } = models;

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

  async createTicket(req, res) {
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

  async updateResponse(req, res) {
    const response_at = formatDate(new Date());

    try {
      const ticket_code = req.body.ticket_code;
      const responseTicket = req.body.responseTicket;

      const response = await ticketModel.update(
        {
          ticket_code: ticket_code,
          response: responseTicket,
          response_at: response_at,
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
