import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
const root = document.createElement("div");
root.className = "popup";
document.body.appendChild(root);
const rootDiv = ReactDOM.createRoot(root);
rootDiv.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
