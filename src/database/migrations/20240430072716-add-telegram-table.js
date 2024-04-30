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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("telegram");
  },
};
