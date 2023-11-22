import { Sequelize } from "sequelize";
const sequelize = new Sequelize("test1", "postgres", "5255", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});

export const connectdb = async () => {
  try {
    await sequelize.authenticate();
    console.log("succesfull");
  } catch (error) {
    console.log("error", error);
  }
};

export default sequelize;
