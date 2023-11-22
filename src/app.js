import express from "express";
import allRouter from "./router/index.js";
import { connectdb } from "./db/config.js";
import initdb from "./db/init.js";
const app = express();
connectdb();
initdb()
  .then(() => console.log("DB synced"))
  .catch((err) => console.log("DB not synced", err));
app.use(express.json());
app.use("/", allRouter);

// app.post("/", (req, res) => {
//   console.log("body", req.body);
//   res.json({ message: "we get your message" });
// });

// app.get("/", (req, res) => {
//   return res.json({
//     message: "Hello world",
//   });
// });

// app.get("/student", (req, res) => {
//   return res.json(student);
// });

// app.post("/", (req, res) => {
//   console.log(req.body);
//   res.json({ msg: "......" });
// });

// // push data in json object
// app.post("/student", (req, res) => {
//   if (!req.body.name) {
//     res.status(400);
//     return res.send({ error: "errr" });
//   }

//   const user = {
//     // id: student.length + 1,
//     name: req.body.name,
//     age: req.body.age,
//   };
//   student.push(user);
//   res.json(user);
//   //   console.log(req.body);
// });

// app.post("/std", (req, res) => {
//   student.push(req.body);
// });

// app.put("/student/:id", (req, res) => {
//   const id = req.params.id;
//   console.log(id);
//   res.json(id);
// });

// let list = [
//   {
//     id: "1",
//     name: "shoaib",
//     marks: 40,
//   },
//   {
//     id: "2",
//     name: "waqas",
//     marks: 55,
//   },
//   {
//     id: "3",
//     name: "abbas",
//     marks: 45,
//   },
//   {
//     id: "4",
//     name: "asad",
//     marks: 40,
//   },
//   {
//     id: "5",
//     name: "ali",
//     marks: 55,
//   },
// ];

// app.use("/", (req, res) => {
//   const filters = req.query;
//   const filteredusers = list.filter((user) => {
//     let isvalid = true;
//     for (key in filters) {
//       console.log(key, user[key], filters[key]);
//       isvalid = isvalid && user[key] == filters[key];
//     }
//     return isvalid;
//   });
//   return res.json(filteredusers);
//   //  list.filter((element) => element.id <= 3);
// });
//

// let student = [
//   {
//     name: "shoaib",
//     RollNo: "21017119-052",
//     education: "Graduation",
//     Age: "23",
//   },
// ];

// app.get("/a", (req, res) => {
//   return res.json({
//     msg: "get method",
//   });
// });

// app.post("/a", (req, res) => {
//   res.json({ msg1: "post method 1" });
// console.log(req.body);
// });

// app.get("/std", (req, res) => {
//   res.json(student);
// });

// app.post("/std1", (req, res) => {
//   student.push(req.body);
//   res.json(student);
//   console.log(student);
// });

//mathematical operation

// app.get("/add", (req, res) => {
//   const { n1, n2 } = req.body;
//   const result = n1 + n2;
//   res.json({ result });
// });

// app.post("/mul", (req, res) => {
//   const { n1, n2 } = req.body;
//   const result = n1 * n2;
//   res.json({ result });
// });
// app.post("/sub", (req, res) => {
//   const { n1, n2 } = req.body;
//   const result = n1 - n2;
//   res.json({ result });
// });
// app.post("/div", (req, res) => {
//   const { n1, n2 } = req.body;
//   const result = n1 / n2;
//   res.json({ result });
// });

// const student = [
//   {
//     name: "shoaib",
//     age: 22,
//   },
//   {
//     name: "waqas",
//     age: 23,
//   },
// ];

// // get all use
// app.get("/name", (req, res) => {
//   res.json(student[0].name);
// });

// app.get("/", (req, res) => {
//   res.json(student);
// });
// app.post("/", (req, res) => {
//   student.push(req.body);
//   res.json(student);
//   console.log(student);
// });

// app.post("/filter", (req, res) => {
//   const { a } = req.body;
//   const filteredusers = student.findIndex((ele) => ele.age == a);
//   res.json(filteredusers);
// });

// import { connectdb } from "./db/config.js";
// import initdb from "./db/init.js";
// connectdb();
// initdb()
//   .then(() => console.log("db sync"))
//   .catch((err) => console.log(err));

app.listen(3300, (err) => {
  if (err) {
    console.log("server not started");
  } else {
    console.log("server is listning at http://localhost:3300");
  }
});
