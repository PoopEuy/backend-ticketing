import { Op } from "sequelize";
import { Sequelize } from "sequelize";
const op = Sequelize.Op;
import models from "../models";

const { realtimeModel } = models;

export default {
  async getRealtime(req, res) {
    try {
      const response = await realtimeModel.findAll({
        order: [["site_name", "ASC"]],
      });
      return res.status(201).send({ data: response });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        message: "Failed Get All Realtime",
      });
    }
  },

  // async getWarning(req, res) {
  //   try {
  //     const response = await realtimeModel.findAll({
  //       where: {
  //         [Op.or]: [
  //           {
  //             [Op.and]: [
  //               {
  //                 downtime: {
  //                   [Op.lte]: 10, // No need for an array here
  //                 },
  //               },
  //               {
  //                 batt_volt: {
  //                   [Op.lte]: 5200, // No need for an array here
  //                 },
  //               },
  //             ],
  //           },
  //           {
  //             load1: {
  //               [Op.lte]: 1, // No need for an array here
  //             },
  //           },
  //           {
  //             load2: {
  //               [Op.lte]: 1, // No need for an array here
  //             },
  //           },
  //         ],
  //       },
  //       order: [["site_name", "ASC"]],
  //     });
  //     return res
  //       .status(201)
  //       .send({ message: "sukses", jumlah: response.length, data: response });
  //   } catch (e) {
  //     console.log(e);
  //     return res.status(500).send({
  //       message: "Failed Get Warning Realtime",
  //     });
  //   }
  // },

  async getWarning(req, res) {
    try {
      const response = await realtimeModel.findAll({
        where: {
          [Op.or]: [
            {
              [Op.and]: [
                {
                  downtime: {
                    [Op.lte]: 10, // No need for an array here
                  },
                },
                {
                  batt_volt: {
                    [Op.lte]: 5200, // No need for an array here
                  },
                },
              ],
            },
            {
              [Op.and]: [
                {
                  load1: {
                    [Op.lte]: 1, // No need for an array here
                  },
                },
                {
                  load2: {
                    [Op.lte]: 1, // No need for an array here
                  },
                },
              ],
            },
          ],
        },
        order: [["site_name", "ASC"]],
      });
      return res
        .status(201)
        .send({ message: "sukses", jumlah: response.length, data: response });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        message: "Failed Get Warning Realtime",
      });
    }
  },
};
