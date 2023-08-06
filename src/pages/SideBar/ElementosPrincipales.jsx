import { Elements } from "../../const/prinSideBar/partes";
import { ElementsList } from "./Elements/ElementsList";
export const ElementosPrincipales = () => {
  
  return (
    <ul className="mt-6 space-y-1">
      <ElementsList elements={Elements} />
    </ul>
  );
};
