import React from "react";
import ReactDOM from "react-dom/client";
// El orden importa: index.css sobreescribe variables de Bootstrap (--bs-*).
// Si bootstrap.min.css se importa despues, la paleta de tokens no aplica.
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./routes/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
