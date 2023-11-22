// import { json, json } from "express";

let json = [
  {
    id: "1",
    name: "shoaib",
    marks: 40,
  },
  {
    id: "2",
    name: "waqas",
    marks: 55,
  },
  {
    id: "3",
    name: "abbas",
    marks: 45,
  },
  {
    id: "4",
    name: "asad",
    marks: 40,
  },
  {
    id: "5",
    name: "ali",
    marks: 55,
  },
];
let n = json.filter((element) => element.id <= 3);
console.log(n);
