import teachermodel from "../../Model/teacher/teacher.js";
const TeacherController = {
  //create teacher data
  create: async (req, res) => {
    try {
      const { firstName, lastName, rollNo, phone } = req.body;
      const teacher = await teachermodel.create({
        firstName,
        lastName,
        rollNo,
        phone,
      });
      return res.status(201).json({ message: "teacher created", teacher });
    } catch (err) {
      return res.status(201).json({ message: "something bad happening", err });
    }
  },
  getall: async (req, res) => {
    const teacher = await teachermodel.findAll();
    res.json({ teacher });
  },
  getone: async (req, res) => {
    try {
      const { id } = req.params;
      const teacher = await teachermodel.findOne({
        where: { id },
      });
      if (!teacher) {
        return res.status(404).json({ message: "teacher not found" });
      }
      res.json({ teacher });
    } catch (err) {
      return res.status(404).json({ message: "something bad happening", err });
    }
  },
  //   search: async (req, res) => {
  //     try {
  //       const firstName = req.body.firstName;
  //       const teacher = teachermodel.findAll({ firstName });
  //       if (!teacher) {
  //         return res.status(404).json({ message: "teacher not searches" });
  //       }
  //       res.json({ teacher });
  //     } catch (err) {
  //       return res.status(200).json({ message: "something bad happening", err });
  //     }
  //   },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const teacher = await teachermodel.findOne({
        where: { id },
      });
      if (!teacher) {
        return res
          .status(404)
          .json({ message: "teacher not found for deleted" });
      }
      await teacher.destroy();
      res.json({ message: "teacher deleted successfuly" });
      // res.json({ teacher });
    } catch (err) {
      return res.status(500).json({ message: "something bad happening", err });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { firstName, lastName, rollNo, phone } = req.body;

      const teacher = await teachermodel.findOne({
        where: { id },
      });
      if (!teacher) {
        return res
          .status(404)
          .json({ message: "teacher not found for update" });
      }
      teacher.firstName = firstName;
      teacher.lastName = lastName;
      teacher.rollNo = rollNo;
      teacher.phone = phone;
      await teacher.save();
      res.json({ message: "teacher updated", teacher });
    } catch (err) {
      return res.status(500).json({ message: "something bad happening", err });
    }
  },
};
// const teacherjson = [
//   {
//     f_name: "Shoaib",
//     l_name: "Hassan",
//     age: 23,
//     roll_no: "21017119-052",
//   },
//   {
//     f_name: "waqas",
//     l_name: "ahmad",
//     age: 21,
//     roll_no: "21017119-029",
//   },
// ];

// const TeacherController = {
//   alluser: (req, res) => {
//     res.json(teacherjson);
//   },
//   create: (req, res) => {

//     const { cnic } = req.params;
//     res.json({
//       cnic,
//       message: "create teacher",
//     });
//   },
//   getall: (req, res) => {
//     res.json({
//       message: "all teacher",
//     });
//   },
//   getone: (req, res) => {
//     res.json({
//       message: "one teacher",
//     });
//   },
//   update: (req, res) => {
//     res.json({
//       message: "update teacher",
//     });
//   },
//   delete: (req, res) => {
//     res.json({
//       message: "delete teacher",
//     });
//   },
// };
export default TeacherController;
