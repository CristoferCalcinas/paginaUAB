import { Header } from "./Header/Header";
import { Body } from "./Body/Body";
import { objIngSistemas } from "../../const/infoCarreras/objetivosCarrera/objIngSistemas";

export const Layout = () => {
  // const {id} = objIngSistemas;
  // console.log(id)
  return (
    <div className="lg:p-10">
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
    </div>
  );
};
