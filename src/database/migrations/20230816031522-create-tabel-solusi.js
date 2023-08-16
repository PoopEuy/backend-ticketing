"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("solusi", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      problem_id: {
        type: Sequelize.INTEGER,
      },

      solusi_id: {
        type: Sequelize.INTEGER,
        unique: true,
      },

      solusi: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("solusi");
  },
};
