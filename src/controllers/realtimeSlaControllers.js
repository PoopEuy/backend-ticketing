import { Op } from "sequelize";
import models from "../models";

const { realtimeSlaModel } = models;

export default {
  async getRealtimeSla(req, res) {
    try {
      const response = await realtimeSlaModel.findAll({
        order: [["site_name", "ASC"]],
      });
      return res.status(201).send({ data: response });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        message: "Failed Get All Realtime PMS",
      });
    }
  },
};
