import { Model } from "sequelize";

// const PROTECTED_ATTRIBUTES = ["password"];

export default (sequelize, DataTypes) => {
  class realtime_sla extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  realtime_sla.init(
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
      sites_id: {
        type: DataTypes.TEXT,
        primaryKey: true,
        allowNull: {
          args: false,
          msg: "Please enter your site_name",
        },
        unique: {
          args: true,
          msg: "site_name name already exists",
        },
      },

      site_name: {
        type: DataTypes.TEXT,
        allowNull: {
          args: false,
          msg: "Please enter your site_name",
        },
        unique: {
          args: true,
          msg: "site_name name already exists",
        },
      },
      sla_semeru: DataTypes.DOUBLE,
      created_at: DataTypes.DOUBLE,
      updated_at: DataTypes.DOUBLE,

      //   createdAt: {
      //     type: DataTypes.TEXT,
      //     allowNull: false,
      //     field: "created_at",
      //   },
      //   updatedAt: {
      //     type: DataTypes.TEXT,
      //     allowNull: false,
      //     field: "updated_at",
      //   },
    },
    {
      sequelize,
      modelName: "realtimeSlaModel",
      tableName: "realtime_sla",
      timestamps: true,
      // timestamps: false,
      createdAt: false, // don't add createdAt attribute
      updatedAt: false, // don't add createdAt attribute
    }
  );
  return realtime_sla;
};
