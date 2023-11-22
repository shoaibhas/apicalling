import institutemodel from "../Model/institute/institute.js";
import studentModel from "../Model/student/student.js";
import teachermodel from "../Model/teacher/teacher.js";
import productmodel from "../Model/product/product.js";
const initdb = async () => {
  await studentModel.sync({
    alter: true,
    force: false,
  });
  await teachermodel.sync({
    alter: true,
    force: false,
  });
  await institutemodel.sync({
    alter: true,
    force: false,
  });
  await productmodel.sync({
    alter: true,
    force: false,
  });
};

export default initdb;
