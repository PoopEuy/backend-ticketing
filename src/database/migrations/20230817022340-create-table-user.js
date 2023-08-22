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

      user: {
        type: Sequelize.STRING(20),
      },

      role: {
        type: Sequelize.STRING(20),
      },

      mitra: {
        type: Sequelize.STRING(20),
        unique: true,
      },

      token: {
        type: Sequelize.STRING(20),
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
    await queryInterface.dropTable("solusi");
  },
};
