import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import RandomColor from "./random-color";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RandomColor />
  </React.StrictMode>
);
