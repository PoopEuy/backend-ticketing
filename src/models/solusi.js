import { Model } from "sequelize";

// const PROTECTED_ATTRIBUTES = ["password"];

export default (sequelize, DataTypes) => {
  class solusi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  solusi.init(
    {
      problem_id: DataTypes.INTEGER,
      solusi_id: DataTypes.INTEGER,
      solusi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "solusiModel",
      tableName: "solusi",
      timestamps: true,
      // timestamps: false,
      createdAt: false, // don't add createdAt attribute
      updatedAt: false,
    }
  );
  return solusi;
};
