"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ipsites", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      site_id_name: {
        type: Sequelize.STRING(8),
        unique: true,
      },

      ip_gw_lc: {
        type: Sequelize.STRING(12),
      },

      ip_gw_gs: {
        type: Sequelize.STRING(13),
      },

      ip_snmp: {
        type: Sequelize.STRING(13),
      },

      subnet: {
        type: Sequelize.STRING(3),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("ipsites");
  },
};
