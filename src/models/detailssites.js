import { Model } from "sequelize";

// const PROTECTED_ATTRIBUTES = ["password"];

export default (sequelize, DataTypes) => {
  class detailssites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  detailssites.init(
    {
      // nojs: {
      //   type: DataTypes.STRING,
      //   allowNull: {
      //     args: false,
      //     msg: "Please enter your nojs",
      //   },
      //   unique: {
      //     args: true,
      //     msg: "nojs already exists",
      //   },
      // },
      site_id_name: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Please enter your site_id_name",
        },
        unique: {
          args: true,
          msg: "site_id_name name already exists",
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Please enter your site name",
        },
        unique: {
          args: true,
          msg: "site name already exists",
        },
      },
      onair_date: DataTypes.STRING,
      topo_sustain_date: DataTypes.STRING,
      gs_sustain_date: DataTypes.STRING,
      longitude: DataTypes.FLOAT,
      latitude: DataTypes.FLOAT,
      provinsi: DataTypes.STRING,
      kabupaten: DataTypes.STRING,
      kecamatan: DataTypes.STRING,
      provider_gs: DataTypes.STRING,
      address: DataTypes.STRING,
      beam_provider: DataTypes.STRING,
      cellular_operator: DataTypes.STRING,
      project_phase: DataTypes.STRING,
      build_year: DataTypes.STRING,
      version: DataTypes.STRING,
      webapp: DataTypes.STRING,
      createdat: DataTypes.STRING,
      updatedat: DataTypes.STRING,
      // createdAt: {
      //   type: DataTypes.DATE,
      //   allowNull: false,
      //   field: "createdat",
      // },
      // updatedAt: {
      //   type: DataTypes.DATE,
      //   allowNull: false,
      //   field: "updatedat",
      // },
    },
    {
      sequelize,
      modelName: "detailssitesModel",
      tableName: "detailssites",
      timestamps: true,
      // timestamps: false,
      createdAt: false, // don't add createdAt attribute
      updatedAt: false, // don't add createdAt attribute
    }
  );
  return detailssites;
};
