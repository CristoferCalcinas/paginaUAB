import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../SistemaAcademico/LoginPage";
import { UabMain } from "../pages/UAB/uabPrincipal/UabMain";
import { Ventajas } from "../pages/UAB/uabSecundario/Ventajas/Ventajas";
import { Admisiones } from "../pages/UAB/uabSecundario/Admisiones/Admisiones";
import { Complementario } from "../pages/UAB/uabSecundario/Complementario/Complementario";
import { Postgrado } from "../pages/UAB/uabSecundario/Postgrado/Postgrado";
import { Investigacion } from "../pages/UAB/uabSecundario/Investigacion/Investigacion";
import { Carreras } from "../pages/UAB/uabSecundario/Carreras/Carreras";
import { Reglamentos } from "../pages/UAB/uabSecundario/Reglamento/Reglamentos";
import { ExtensionSocial } from "../pages/UAB/uabSecundario/ExtensionSocial/ExtensionSocial";
import { Escuelas } from "../pages/UAB/uabSecundario/Escuelas/Escuelas";
import { CarrerasRoutes } from "../pages/UAB/uabSecundario/Carreras/CardCarreras/routes/CarrerasRoutes";
import { infoCarreras } from "../const/infoCarreras";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/uab" element={<UabMain />} />
      <Route path="/ventajas" element={<Ventajas />} />
      <Route path="/carreras" element={<Carreras />} />
      <Route path="/investigacion" element={<Investigacion />} />
      <Route path="/postgrado" element={<Postgrado />} />
      <Route path="/complementario" element={<Complementario />} />
      <Route path="/admisiones" element={<Admisiones />} />
      <Route path="/reglamentos" element={<Reglamentos />} />
      <Route path="/extensionSocial" element={<ExtensionSocial />} />
      <Route path="/escuelas" element={<Escuelas />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<UabMain />} />
      {/* <Route
        path="/carreras/:"
        element={
            <CarrerasRoutes infoCarreras={infoCarreras} /> 
        }
      /> */}
    </Routes>
  );
};
