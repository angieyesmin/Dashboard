import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/global.css';  // Importar el estilo global aquí


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
