export const CardFooter = () => {
  return (
    <div className="my-10 bg-white p-5 lg:p-5">
      <div className="p-5 text-justify lg:p-14 border-b-2 border-b-black">
        <p>
          El mundo en que vivimos está transformado por las obras de la
          ingeniería. Crear, innovar y transformar forma parte de la esencia de
          un ingeniero. Un(a) ingeniero(a) ayuda a resolver problemas que son
          importantes para la sociedad. De ahí su prestigio. Si te gusta lo
          diferente y lo innovador ¡esta es la profesión para ti!. Las
          alternativas laborales son abundantes y variadas. Pocas profesiones te
          dan una verdadera oportunidad de trabajar por un mundo mejor. ¡Ser
          ingeniero(a) es genial!
        </p>
        <div className="flex text-[#003264] font-bold">
          <div>Imagen</div>
          <div className="ml-5">NOMBRE Y APELLIDO</div>
          <div>Director de Carrera</div>
        </div>
      </div>


      <div className="ml-5 lg:ml-56 mt-10">
        <div>
          <h2 className="font-bold">OBJETIVOS DE LA CARRERA</h2>
        </div>
        <div className="mt-4">
          <ul className="space-y-10">
            <li>
              <span className="border-l-4 border-l-blue-500">
                <span className="ml-10">01</span>
              </span>
              <p>
                Formar profesionales con las bases científicas y técnicas
                necesarias para que puedan desempeñarse con éxito.
              </p>
            </li>
            <li>
              <span className="border-l-4 border-l-blue-500">
                <span className="ml-10">02</span>
              </span>
              <p>
                Formar profesionales con las bases científicas y técnicas
                necesarias para que puedan desempeñarse con éxito.
              </p>
            </li>
            <li>
              <span className="border-l-4 border-l-blue-500">
                <span className="ml-10">03</span>
              </span>
              <p>
                Formar profesionales con las bases científicas y técnicas
                necesarias para que puedan desempeñarse con éxito.
              </p>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};
