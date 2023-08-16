import { Model } from "sequelize";

// const PROTECTED_ATTRIBUTES = ["password"];

export default (sequelize, DataTypes) => {
  class problem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  problem.init(
    {
      problem_id: DataTypes.INTEGER,
      problem: DataTypes.STRING,
      batt_volt: DataTypes.INTEGER,
      load1: DataTypes.DOUBLE,
      load2: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: "problemModel",
      tableName: "problem",
      timestamps: true,
      // timestamps: false,
      createdAt: false, // don't add createdAt attribute
      updatedAt: false,
    }
  );
  return problem;
};
