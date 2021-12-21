import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Rating } from "./components/Rating";
import Switcher from "./components/Switcher";

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
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
