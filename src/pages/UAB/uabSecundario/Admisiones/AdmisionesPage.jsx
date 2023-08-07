import { AdmisionesPageCard } from "./AdmisionesPageCard";
import { ADMISIONES } from "./const/admisiones";

export const AdmisionesPage = () => {
  const admisiones = ADMISIONES;

  return (
    <div className="overflow-hidden h-full">
      <section className="text-gray-600 body-font">
        <section className="text-gray-600 body-font">
          <AdmisionesPageCard admisiones={admisiones} />
        </section>
      </section>
    </div>
  );
};
