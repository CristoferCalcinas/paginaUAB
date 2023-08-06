import { Carreras } from "../../const/secondSideBar/carreras.js";
import { TargetElement } from "./TargetElement.jsx";

export const TargetCarrerasSections = () => {
  const carreras = Carreras;
  return (
    <div>
      <section className="bg-[#003264] text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {carreras.map((carrera) => {
              return <TargetElement key={carrera} titulo={carrera} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
