import { CardImage } from "./CardImage";
import { Ventajas } from "./const/ventajas";

export const VentajaPageImage = () => {
  const infoCard = Ventajas;
  return (
    <div>
      {infoCard.map(({ id, titulo, descripcion, imagen }) => (
        <CardImage
          key={id}
          id={id}
          titulo={titulo}
          descripcion={descripcion}
          imagen={imagen}
        />
      ))}
    </div>
  );
};
