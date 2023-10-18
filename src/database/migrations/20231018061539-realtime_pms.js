"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("realtime_pms", {
      site_name: {
        type: Sequelize.TEXT,
        primaryKey: true,
      },

      total_damaged_packs: {
        type: Sequelize.BIGINT,
      },

      total_warning_packs: {
        type: Sequelize.BIGINT,
      },

      total_normal_packs: {
        type: Sequelize.BIGINT,
      },

      packs_desc: {
        type: Sequelize.TEXT,
      },

      updated_at: {
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("realtime_pms");
  },
};
