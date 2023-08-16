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
};
