import { TargetAuthForm } from "./TargetMain/TargetAuthForm";
import { TargetCarreras } from "./TargetMain/TargetCarreras";
import { TargetGalery } from "./TargetMain/TargetGalery";
import { TargetMain } from "./TargetMain/TargetMain";
import { TargetStats } from "./TargetMain/TargetStats";

export const ContentMain = () => {
  return (
    <div className="overflow-hidden h-full">
      <section className="text-gray-600 body-font">
        <TargetMain />
        <TargetCarreras />
        <TargetStats />
        <TargetAuthForm />
        <TargetGalery />
      </section>
    </div>
  );
};
