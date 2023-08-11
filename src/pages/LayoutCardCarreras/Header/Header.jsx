import { CardInfoPrincipal } from "./CardInfoPrincipal";
import { CardTextPrincipal } from "./CardTextPrincipal";

export const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center bg-white lg:p-10">
      <CardInfoPrincipal />
      <CardTextPrincipal />
    </div>
  );
};
