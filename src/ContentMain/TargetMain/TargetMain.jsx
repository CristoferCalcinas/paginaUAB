export const TargetMain = () => {
  return (
    <div className="container p-5 flex lg:px-5 lg:py-24 mx-auto lg:flex-wrap">
      
      <div className="flex flex-col-reverse items-center  lg:flex-row lg:items-end lg:flex-wrap md:-m-2 -m-1">
        <div className="flex flex-wrap w-full lg:w-1/2 ">


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

        <div className="flex flex-wrap w-full lg:w-1/2 ">
          <div className="md:p-2 p-1 w-full flex flex-col justify-center text-white h-1/2">


            <h2 className="m-5 text-4xl lg:m-0 font-bold lg:text-6xl lg:text-ellipsis lg:text-end">
              Profesionales con Valores
            </h2>
            <h3 className="uppercase mb-5 mr-5 lg:m-5 text-end">PROFESIONALES UAB</h3>
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
              className="w-full object-cover h-full object-center block "
              src="imagesParaMain/complementario.jpg"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};
