import { CardFooter } from "./CardFooter";
import { CardPerfilProfesional } from "./CardPerfilProfesional";
import { CardPlanEstudios } from "./CardPlanEstudios";

export const Body = () => {
  return (
    <div>
      <CardPerfilProfesional />
      <CardPlanEstudios />
      <CardFooter />
    </div>
  );
};
