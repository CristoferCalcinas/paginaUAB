import { LayoutCard } from "../LayoutCard/LayoutCard";
import { COMPLEMENTARIO } from "./const/complementario";

export const ComplementarioContent = () => {
  const complementario = COMPLEMENTARIO;
  return (
    <div className="overflow-hidden h-full bg-white">
      <section className="text-gray-600">
        <section className="text-gray-600">
          <LayoutCard
            layoutInfo={complementario}
            titleLayout={"Complementario UAB"}
          />
        </section>
      </section>
    </div>
  );
};
