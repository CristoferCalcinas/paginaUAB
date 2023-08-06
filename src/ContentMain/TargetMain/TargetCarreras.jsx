import { TargetCarrerasSections } from "./TargetCarrerasSections";

export const TargetCarreras = () => {
  return (
    <div>
      <div className="container p-5 mx-auto flex flex-col bg-white">
        <div className="flex flex-col text-center space-y-5 mb-10">
          <div>
            <h2 className="text-[#003B71] text-6xl font-bold">
              Nuestras Carreras
            </h2>
          </div>
          <div>
            <h3>14 Carreras a nivel Licenciatura</h3>
          </div>
        </div>
        <div>
          <div>
            <TargetCarrerasSections />
          </div>
        </div>
      </div>
    </div>
  );
};
