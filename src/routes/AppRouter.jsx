import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../SistemaAcademico/LoginPage";
import { UabMain } from "../pages/UAB/uabPrincipal/UabMain";
import { Ventajas } from "../pages/UAB/uabSecundario/Ventajas/Ventajas";
import { Admisiones } from "../pages/UAB/uabSecundario/Admisiones/Admisiones";
import { Complementario } from "../pages/UAB/uabSecundario/Complementario/Complementario";
import { Postgrado } from "../pages/UAB/uabSecundario/Postgrado/Postgrado";
import { Investigacion } from "../pages/UAB/uabSecundario/Investigacion/Investigacion";
import { Carreras } from "../pages/UAB/uabSecundario/Carreras/Carreras";
// import { Iglesia } from "../pages/UAB/uabSecundario/Iglesia/Iglesia";
import { Reglamentos } from "../pages/UAB/uabSecundario/Reglamento/Reglamentos";
import { ExtensionSocial } from "../pages/UAB/uabSecundario/ExtensionSocial/ExtensionSocial";
import { Escuelas } from "../pages/UAB/uabSecundario/Escuelas/Escuelas";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/uab" element={<UabMain />} />
      <Route path="/ventajas" element={<Ventajas />} />
      <Route path="/carreras" element={<Carreras />} />
      <Route path="/investigacion" element={<Investigacion />} />
      <Route path="/postgrado" element={<Postgrado />} />
      <Route path="/complementario" element={<Complementario />} />
      {/* <Route path="/iglesia" element={<Iglesia />} /> */}
      {/* <Route path="/colegio"  /> */}
      <Route path="admisiones" element={<Admisiones />} />
      <Route path="reglamentos" element={<Reglamentos />} />
      <Route path="extensionSocial" element={<ExtensionSocial />} />
      <Route path="escuelas" element={<Escuelas />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<UabMain />} />
    </Routes>
  );
};
