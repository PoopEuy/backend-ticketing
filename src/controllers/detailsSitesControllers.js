import { Op } from "sequelize";
import models from "../models";

const { detailssitesModel } = models;

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
