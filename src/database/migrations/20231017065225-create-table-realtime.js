"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("realtime", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      site_name: {
        type: Sequelize.STRING(255),
        unique: true,
      },

      downtime: {
        type: Sequelize.INTEGER,
      },

      batt_volt: {
        type: Sequelize.INTEGER,
      },

      down_reason: {
        type: Sequelize.STRING(255),
      },

      message: {
        type: Sequelize.TEXT,
      },

      load1: {
        type: Sequelize.DOUBLE,
      },

      load2: {
        type: Sequelize.DOUBLE,
      },

      load3: {
        type: Sequelize.DOUBLE,
      },

      pv1_curr: {
        type: Sequelize.DOUBLE,
      },

      pv1_volt: {
        type: Sequelize.DOUBLE,
      },

      pv2_curr: {
        type: Sequelize.DOUBLE,
      },

      pv2_volt: {
        type: Sequelize.DOUBLE,
      },

      pv3_curr: {
        type: Sequelize.DOUBLE,
      },

      pv3_volt: {
        type: Sequelize.DOUBLE,
      },

      ping: {
        type: Sequelize.INTEGER,
      },

      created_at: {
        type: Sequelize.TEXT,
      },

      total_pack: {
        type: Sequelize.INTEGER,
      },

      site_host: {
        type: Sequelize.STRING(255),
      },

      error_message: {
        type: Sequelize.TEXT,
      },

      message_scc: {
        type: Sequelize.TEXT,
      },

      message_baterai: {
        type: Sequelize.TEXT,
      },

      message_load: {
        type: Sequelize.TEXT,
      },

      isflat: {
        type: Sequelize.STRING(255),
      },

      timeRemaining: {
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("realtime");
  },
};
