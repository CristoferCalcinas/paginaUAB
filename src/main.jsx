import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UabApp } from "./UabApp";
import { CarrerasPrincipal } from "./pages/CarrerasPrincipal/CarrerasPrincipal";
import { CarrerasRoutes } from "./pages/UAB/uabSecundario/Carreras/CardCarreras/routes/CarrerasRoutes";
import { infoCarreras } from "./const/infoCarreras";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <UabApp /> */}
      {/* <CarrerasPrincipal /> */}
      <CarrerasRoutes infoCarreras={infoCarreras} />
    </BrowserRouter>
  </React.StrictMode>
);
