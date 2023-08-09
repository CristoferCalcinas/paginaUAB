import { Link } from "react-router-dom";
import { ElementosPrincipales } from "./ElementosPrincipales";

export const SideBar = ({ isActiveSideBar }) => {
  return (
    <div
      className={`z-50 px-4 py-6 fixed h-screen overflow-y-auto ${
        isActiveSideBar ? "bg-slate-600" : ""
      }`}
    >
      <div className="flex justify-center items-center mb-4">
        <Link to={"/uab"} className="w-56">
          <img src="imagesParaMain/MARCA-UAB-UAB.png" alt="" />
        </Link>
      </div>

      <ElementosPrincipales />
    </div>
  );
};
