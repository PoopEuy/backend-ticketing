import { Op } from "sequelize";
import models from "../models";

const { solusiModel } = models;

export default {
  async getAllSolusi(req, res) {
    try {
      const response = await solusiModel.findAll({
        order: [["solusi", "ASC"]],
      });
      return res.status(201).send({ data: response });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        message: "Failed Get All Solusi",
      });
    }
  },

  async createSolusi(req, res) {
    console.log("createSolusi");
    try {
      await solusiModel.create(req.body);
      return res
        .status(201)
        .send({ status: 201, message: "create Solusi successfully" });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        message: "FailedCreateSolusi",
      });
    }
  },

  async checkSolusiId(req, res) {
    try {
      const problem_id = req.body.problem_id;
      const response = await solusiModel.findAll({
        where: {
          problem_id: problem_id,
        },
        order: [["solusi_id", "ASC"]],
      });

      return res.status(201).send({ data: response });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        message: "failed!",
      });
    }
  },
};
