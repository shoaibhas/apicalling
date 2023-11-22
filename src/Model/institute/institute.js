import sequelize from "../../db/config.js";
import { DataTypes } from "sequelize";

const institutemodel = sequelize.define("institute", {
  instituteName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  courses: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  classes: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
export default institutemodel;
