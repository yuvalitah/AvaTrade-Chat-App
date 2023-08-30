import { Sequelize } from "sequelize";
import dotenv from "dotenv";

export const initializeDBConnection = () => {
  dotenv.config();
  const dbName = process.env.DATABASE_NAME || "chat";
  const dbUsername = process.env.DATABASE_USER || "root";
  const dbPassword = process.env.DATABASE_PASSWORD;
  const dbHost = process.env.DATABASE_HOST;
  const dbPort = process.env.DATABASE_PORT || "3307";

  return new Sequelize(dbName, dbUsername, dbPassword, {
    host: dbHost,
    dialect: "mysql",
    port: parseInt(dbPort),
  });
};
