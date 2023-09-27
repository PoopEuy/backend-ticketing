import { Model } from "sequelize";

// const PROTECTED_ATTRIBUTES = ["password"];

export default (sequelize, DataTypes) => {
  class ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  ticket.init(
    {
      ticket_code: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Please enter your ticket_code",
        },
        unique: {
          args: true,
          msg: "ticket_code already exists",
        },
      },

      // ticket_code: DataTypes.STRING,
      ts: DataTypes.STRING,
      site_name: DataTypes.STRING,
      status_site: DataTypes.STRING,
      status_ticket: DataTypes.STRING,
      counter: DataTypes.MEDIUMINT,
      problem_id: DataTypes.JSON,
      response: DataTypes.JSON,
      // response_at: DataTypes.STRING,
      closed_at: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "updated_at",
      },
    },
    {
      sequelize,
      modelName: "ticketModel",
      tableName: "ticket",
      timestamps: true,
      // createdAt: false, // don't add createdAt attribute
      // updatedAt: false, // don't add createdAt attribute
    }
  );
  // ticket.removeAttribute("id");
  return ticket;
};
