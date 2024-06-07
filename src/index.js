import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Card";

ReactDOM.render(
  <div className="bg-light-green dib br3 pa3 ma2 grow">
    <Card />
    <Card />
    <Card />
  </div>,
  document.getElementById("root")
);
