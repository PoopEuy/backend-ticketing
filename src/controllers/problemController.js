import { Op } from "sequelize";
import models from "../models";

const { problemModel } = models;

export default {
  async getAllProblem(req, res) {
    try {
      const response = await problemModel.findAll({
        order: [["problem_id", "ASC"]],
      });
      return res.status(201).send({ data: response });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        message: "Failed Get All Problem",
      });
    }
  },

  async getSelect(req, res) {
    try {
      const response = await problemModel.findAll({
        attributes: ["problem_id", "problem"],
        order: [["problem_id", "ASC"]],
      });
      return res.status(201).send({ data: response });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        message: "Failed Get All Problem",
      });
    }
  },

  async createProblem(req, res) {
    console.log("createProblem");
    try {
      await problemModel.create(req.body);
      return res
        .status(201)
        .send({ status: 201, message: "create problem successfully" });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        message: "FailedCreateProblem",
      });
    }
  },

  async checkProblemId(req, res) {
    try {
      const problem_id = req.body.problem_id;
      const response = await problemModel.findOne({
        where: {
          problem_id: problem_id,
        },
        order: [["problem_id", "ASC"]],
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
