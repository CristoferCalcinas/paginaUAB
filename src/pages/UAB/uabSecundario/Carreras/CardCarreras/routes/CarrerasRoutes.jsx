import { Route, Routes } from "react-router-dom";
import { CarrerasPrincipal } from "../../../../../CarrerasPrincipal/CarrerasPrincipal";
const normalize = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
};

export const CarrerasRoutes = ({infoCarreras}) => {

  return (
    <Routes>
      {infoCarreras.map((carrera) => {
        const { title } = carrera.head;
        const newPathCarreras = `/carreras/${normalize(title)}`;
        console.log(newPathCarreras);
        return (
          <Route key={carrera.id} path={newPathCarreras}
          element={<CarrerasPrincipal carrera={carrera}/>} />
        );
      })}
    </Routes>
  );
};
