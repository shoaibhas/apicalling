import { Router } from "express";
import TeacherController from "../../controller/teacher/index.js";

const teacherRouter = Router();
// teacherRouter.get("/alluser", TeacherController.alluser);
teacherRouter.post("/create", TeacherController.create);
teacherRouter.get("/all", TeacherController.getall);
teacherRouter.get("/:id", TeacherController.getone);
teacherRouter.delete("/:id", TeacherController.delete);
teacherRouter.put("/:id", TeacherController.update);
// teacherRouter.get("/search", TeacherController.search);

// teacherRouter.get("/update", TeacherController.update);
// teacherRouter.get("/delete", TeacherController.delete);

export default teacherRouter;
