import { Model } from "sequelize";

// const PROTECTED_ATTRIBUTES = ["password"];

export default (sequelize, DataTypes) => {
  class realtime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  realtime.init(
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
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Please enter your site_name",
        },
        unique: {
          args: true,
          msg: "site_name name already exists",
        },
      },

      downtime: DataTypes.MEDIUMINT,
      batt_volt: DataTypes.MEDIUMINT,
      down_reason: DataTypes.STRING,
      message: DataTypes.TEXT,
      load1: DataTypes.DOUBLE,
      load2: DataTypes.DOUBLE,
      load3: DataTypes.DOUBLE,
      pv1_curr: DataTypes.DOUBLE,
      pv2_curr: DataTypes.DOUBLE,
      pv3_curr: DataTypes.DOUBLE,
      pv1_volt: DataTypes.DOUBLE,
      pv2_volt: DataTypes.DOUBLE,
      pv3_volt: DataTypes.DOUBLE,
      ping: DataTypes.MEDIUMINT,
      total_pack: DataTypes.MEDIUMINT,
      site_host: DataTypes.STRING,
      error_message: DataTypes.TEXT,
      message_scc: DataTypes.TEXT,
      message_baterai: DataTypes.TEXT,
      message_load: DataTypes.TEXT,
      isflat: DataTypes.STRING,
      timeRemaining: DataTypes.MEDIUMINT,
      created_at: DataTypes.TEXT,
      //   createdAt: {
      //     type: DataTypes.TEXT,
      //     allowNull: false,
      //     field: "created_at",
      //   },
    },
    {
      sequelize,
      modelName: "realtimeModel",
      tableName: "realtime",
      timestamps: true,
      // timestamps: false,
      createdAt: false, // don't add createdAt attribute
      updatedAt: false,
    }
  );
  return realtime;
};
