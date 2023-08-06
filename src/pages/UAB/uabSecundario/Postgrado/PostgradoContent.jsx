import { LayoutCard } from "../LayoutCard/LayoutCard";
import { POSTGRADO } from "./const/postgrado";

export const PostgradoContent = () => {
  const postgrado = POSTGRADO;
  return (
    <div className="overflow-hidden h-full bg-white">
      <section className="text-gray-600">
        <section className="text-gray-600">
          <LayoutCard layoutInfo={postgrado} titleLayout={"Postgrado UAB"}/>
        </section>
      </section>
    </div>
  );
};
