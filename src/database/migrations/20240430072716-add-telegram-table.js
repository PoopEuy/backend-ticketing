"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("telegram", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      site_name: {
        type: Sequelize.STRING,
        unique: true,
      },
      down_duration: {
        type: Sequelize.STRING,
      },
      down_date: {
        type: Sequelize.STRING,
      },
      last_batt: {
        type: Sequelize.INTEGER,
      },
      down_reason: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("telegram");
  },
};
