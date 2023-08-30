import Sequelize from "sequelize";

import { initializeDBConnection } from "../db";

const sequelize = initializeDBConnection();

export const Message = sequelize.define("message", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});
