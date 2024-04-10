import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.css";

/***************
 * IMPORT LIBRARIES
 ***************/
/*
const h1 = document.createElement("h1");
h1.textContent = "First application";
document.getElementById("root").append(h1);
*/

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
