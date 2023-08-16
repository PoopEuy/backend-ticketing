"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("problem", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      problem_id: {
        type: Sequelize.INTEGER,
        unique: true,
      },
      problem: {
        type: Sequelize.STRING,
      },
      batt_volt: {
        type: Sequelize.INTEGER,
      },
      load1: {
        type: Sequelize.DOUBLE,
      },
      load2: {
        type: Sequelize.DOUBLE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("problem");
  },
};
