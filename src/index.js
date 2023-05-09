import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Component/App/App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./Component/Hooks/Contex";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/my-react-goit-project1">
      <Context>
        <App />
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);
