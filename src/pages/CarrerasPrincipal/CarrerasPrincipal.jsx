// import { infoCarreras } from "../../const/infoCarreras";
import { Layout } from "../LayoutCardCarreras/Layout";
import { UabContennt } from "../UAB/uabPrincipal/UabContennt";
export const CarrerasPrincipal = ({carrera}) => {
  return (
    <UabContennt>
      <Layout content={carrera}/>
    </UabContennt>
  );
};
