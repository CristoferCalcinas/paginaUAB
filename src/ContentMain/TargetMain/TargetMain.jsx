export const TargetMain = () => {
  return (
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      {/* esto genera el scroll bar */}
      <div className="flex flex-wrap md:-m-2 -m-1">
        <div className="flex flex-wrap w-1/2 ">
          <div className="md:p-2 p-1 w-1/2 bg-gradient-to-r from-transparent to-[#f2295b]">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block"
              src="imagesParaMain/carreras.jpg"
            />
          </div>
          <div className="md:p-2 p-1 w-1/2 bg-gradient-to-r from-transparent to-[#000284]">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block"
              src="imagesParaMain/postgrado.jpg"
            />
          </div>
          <div className="md:p-2 p-1 w-full bg-gradient-to-r from-[#007f02] to-[#0c597c]">
            <img
              alt="gallery"
              className="w-full h-full object-cover object-center block"
              src="imagesParaMain/ventajas.jpg"
            />
          </div>
        </div>

        <div className="flex flex-wrap w-1/2 ">
          <div className="md:p-2 p-1 w-full flex flex-col justify-center text-white h-1/2">
            <h2 className="font-bold text-6xl text-ellipsis text-end">
              Profesionales con Valores
            </h2>
            <h3 className="uppercase m-5 text-end">PROFESIONALES UAB</h3>
          </div>

          <div className="md:p-2 p-1 w-1/2 bg-gradient-to-r from-[#840037] to-[#00748e]">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block"
              src="imagesParaMain/colegio.jpg"
            />
          </div>
          <div className="md:p-2 p-1 w-1/2 bg-gradient-to-r from-transparent to-[#f2295b]">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block"
              src="imagesParaMain/complementario.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
