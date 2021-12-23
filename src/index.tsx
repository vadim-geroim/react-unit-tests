import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Rating } from "./components/Rating";
import Switcher from "./components/Switcher";
import DestructObj from "./components/DestructObj";
import DestructArr from "./components/DestructArr";

let data = {
  name: "Pete",
  age: 30,
  salary: 30000,
  address: {
    street: {
      name: "Main",
      isClean: true,
      isCriminal: false,
    },
  },
};

let arr = [
  { name: "James", age: 33 },
  { name: "Alis", age: 22 },
];

ReactDOM.render(
  <React.StrictMode>
    <Rating value={5} />
    <Rating value={4} />
    <Rating value={3} />
    <Rating value={2} />
    <Rating value={1} />
    <br />
    <Switcher />
    <Switcher />
    <Switcher />
    <DestructObj data={data} />
    <DestructArr arr={arr} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
