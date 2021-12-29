import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Switcher from "./components/Switcher";
import DestructObj from "./components/DestructObj";
import DestructArr from "./components/DestructArr";
import { App } from "./App";
import { UncontrolledRating } from "./components/UncontrolledRating";
import { useState } from "react";

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
    <App />
    <br />
    <Switcher />
    <Switcher />
    <Switcher />
    <DestructObj data={data} />
    <DestructArr arr={arr} />
    <UncontrolledRating />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
