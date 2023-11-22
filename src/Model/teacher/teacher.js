import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const teachermodel = sequelize.define("teachers", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rollNo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default teachermodel;
