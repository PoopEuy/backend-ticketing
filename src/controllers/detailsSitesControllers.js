import { Op } from "sequelize";
import models from "../models";
import { Sequelize } from "sequelize";

const { detailssitesModel } = models;
const { ticketModel } = models;

export default {
  async getAllSites(req, res) {
    try {
      const response = await detailssitesModel.findAll({
        order: [["name", "ASC"]],
      });
      return res.status(201).send({ data: response });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        message: "Failed Get All Sites",
      });
    }
  },

  async getOpenEcom(req, res) {
    try {
      const rawQuery = `SELECT
                        ticket.site_name,
                        ticket.ticket_code,
                        ticket.ts,
                        ticket.status_site,
                        ticket.status_ticket,
                        ticket.counter,
                        ticket.problem_id,
                        ticket.response,
                        ticket.closed_at,
                        ticket.status_site,
                        detailssites.provinsi
                        FROM ticket
                        INNER JOIN detailssites ON detailssites.name = ticket.site_name 
                        WHERE 
                        detailssites.provinsi LIKE 'MALUKU%'
                        AND ticket.status_ticket = 'open'
                        ORDER BY ticket.site_name `;
      const results = await detailssitesModel.sequelize.query(rawQuery, {
        type: Sequelize.QueryTypes.SELECT,
        model: detailssitesModel, // Map results to the detailssitesModel model
      });

      return res.status(200).send({ data: results });
    } catch (e) {
      console.error(e);
      return res.status(500).send({
        message: "Failed to Get All Sites",
      });
    }
  },

  async getOpenLindu(req, res) {
    try {
      const rawQuery = `SELECT
                        ticket.site_name,
                        ticket.ticket_code,
                        ticket.ts,
                        ticket.status_site,
                        ticket.status_ticket,
                        ticket.counter,
                        ticket.problem_id,
                        ticket.response,
                        ticket.closed_at,
                        ticket.status_site,
                        detailssites.provinsi
                        FROM ticket
                        INNER JOIN detailssites ON detailssites.name = ticket.site_name 
                        WHERE 
                        detailssites.provinsi LIKE 'PAPUA%'
                        AND ticket.status_ticket = 'open'
                        ORDER BY ticket.site_name `;
      const results = await detailssitesModel.sequelize.query(rawQuery, {
        type: Sequelize.QueryTypes.SELECT,
        model: detailssitesModel, // Map results to the detailssitesModel model
      });

      return res.status(200).send({ data: results });
    } catch (e) {
      console.error(e);
      return res.status(500).send({
        message: "Failed to Get All Sites",
      });
    }
  },

  // async pushData(req, res) {
  //   console.log("masuk controllers");
  //   try {
  //     // await detailssitesModel.create(req.body);
  //     // return res
  //     //   .status(201)
  //     //   .send({ status: 201, message: "Data created successfully" });
  //   } catch (e) {
  //     console.log(e);
  //     return res.status(500).send({
  //       message: "Failed",
  //     });
  //   }
  // },
};
