import { TargetGaleryImages } from "./TargetGaleryImages";

export const TargetGalery = () => {
  const images = [
    "imagesParaMain/web-admi-300x235.jpg",
    "imagesParaMain/web-telecom-300x234.jpg",
    "imagesParaMain/web1.jpg",
    "imagesParaMain/web-psicopedagogia.jpg",
    "imagesParaMain/DSC_1712.jpg",
    "imagesParaMain/web-enfermeria.jpg",
  ];
  return (
    <section className="text-gray-400 bg-[#052147] body-font">
      <div className="container p-5 mx-auto">
        <div className="flex flex-col text-center w-full mt-5 mb-10">
          <h1 className="text-5xl font-bold text-white">Galeria</h1>
        </div>

        <div className="flex flex-wrap -m-4">
          {images.map((image) => (
            <TargetGaleryImages urlImage={image} key={image} />
          ))}
        </div>
      </div>
    </section>
  );
};
