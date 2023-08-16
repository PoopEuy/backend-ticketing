"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ticket", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ticket_code: {
        type: Sequelize.STRING(50),
        unique: true,
      },
      ts: {
        type: Sequelize.STRING(50),
      },
      site_name: {
        type: Sequelize.STRING(20),
      },
      status_site: {
        type: Sequelize.STRING(20),
      },
      status_ticket: {
        type: Sequelize.STRING(20),
      },
      counter: {
        type: Sequelize.INTEGER,
      },
      problem_id: {
        type: Sequelize.JSON,
      },
      solusi_id: {
        type: Sequelize.JSON,
      },
      // problem_id: {
      //   allowNull: true,
      //   type: Sequelize.TEXT,
      // },
      // solusi_id: {
      //   allowNull: true,
      //   type: Sequelize.TEXT,
      // },
      response: {
        type: Sequelize.TEXT,
      },
      response_at: {
        type: Sequelize.STRING(50),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("ticket");
  },
};
