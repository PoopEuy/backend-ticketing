import { Model } from "sequelize";

// const PROTECTED_ATTRIBUTES = ["password"];

export default (sequelize, DataTypes) => {
  class realtime_pms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  realtime_pms.init(
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
      site_name: {
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

      total_damaged_packs: DataTypes.BIGINT,
      total_warning_packs: DataTypes.BIGINT,
      total_normal_packs: DataTypes.BIGINT,
      packs_desc: DataTypes.TEXT,
      updated_at: DataTypes.DATE,
      //   updatedAt: {
      //     type: DataTypes.DATE,
      //     allowNull: false,
      //     field: "updated_at",
      //   },
    },
    {
      sequelize,
      modelName: "realtimePmsModel",
      tableName: "realtime_pms",
      timestamps: true,
      // timestamps: false,
      createdAt: false, // don't add createdAt attribute
      updatedAt: false, // don't add createdAt attribute
    }
  );
  return realtime_pms;
};
