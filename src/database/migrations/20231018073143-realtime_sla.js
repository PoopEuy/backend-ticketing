"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("realtime_sla", {
      sites_id: {
        type: Sequelize.TEXT,
        primaryKey: true,
      },

      site_name: {
        type: Sequelize.TEXT,
      },

      sla_semeru: {
        type: Sequelize.DOUBLE,
      },

      created_at: {
        type: Sequelize.TEXT,
      },

      updated_at: {
        type: Sequelize.TEXT,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("realtime_sla");
  },
};
