"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("detailssites", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      site_id_name: {
        type: Sequelize.STRING(50),
      },

      name: {
        type: Sequelize.STRING(50),
      },

      onair_date: {
        type: Sequelize.STRING(50),
      },

      topo_sustain_date: {
        type: Sequelize.STRING(50),
      },

      gs_sustain_date: {
        type: Sequelize.STRING(50),
      },

      longitude: {
        type: Sequelize.DOUBLE,
      },

      latitude: {
        type: Sequelize.DOUBLE,
      },

      provinsi: {
        type: Sequelize.STRING(50),
      },

      kabupaten: {
        type: Sequelize.STRING(50),
      },

      kecamatan: {
        type: Sequelize.STRING(50),
      },

      provider_gs: {
        type: Sequelize.STRING(50),
      },

      address: {
        type: Sequelize.STRING(128),
      },

      beam_provider: {
        type: Sequelize.STRING(50),
      },

      cellular_operator: {
        type: Sequelize.STRING(50),
      },

      project_phase: {
        type: Sequelize.STRING(50),
      },

      build_year: {
        type: Sequelize.STRING(50),
      },

      createdat: {
        type: Sequelize.STRING(50),
      },

      updatedat: {
        type: Sequelize.STRING(50),
      },

      version: {
        type: Sequelize.STRING(50),
      },

      webapp: {
        type: Sequelize.STRING(100),
      },

      mini_pc: {
        type: Sequelize.STRING,
      },

      // created_at: {
      //   allowNull: false,
      //   type: Sequelize.DATE,
      // },

      // updated_at: {
      //   allowNull: false,
      //   type: Sequelize.DATE,
      // },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("detailssites");
  },
};
