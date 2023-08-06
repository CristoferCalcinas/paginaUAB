import { Link, Navigate } from "react-router-dom";
import { ElementosPrincipales } from "./ElementosPrincipales";

export const SideBar = () => {
  return (
    <div className="px-4 py-6">
      <Link to={"/uab"}>
        <img src="src\images\MARCA-UAB-UAB.png" alt="" />
      </Link>
      <ElementosPrincipales />
    </div>
  );
};
