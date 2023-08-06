import { useState } from "react";

export const CardImage = ({ id, titulo, descripcion, imagen }) => {
  const [onMouseEnterState, setOnMouseEnterState] = useState(false);
  const handleMouseEnter = () => {
    setOnMouseEnterState(true);
  };

  const handleMouseLeave = () => {
    setOnMouseEnterState(false);
  };
  return (
    <section className="bg-white border-2">
      <div
        className={`mx-auto max-w-screen-xl px-2 py-4 sm:py-6 sm:px-3 lg:py-6 lg:px-8 rounded-xl ${
          onMouseEnterState && id % 2 == 0
            ? "bg-gradient-to-r from-indigo-500 to-sky-300 -translate-x-3"
            : onMouseEnterState && id % 2 != 0
            ? "bg-gradient-to-l from-indigo-500 to-sky-300 translate-x-3"
            : ""
        }`}
      >
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16`}
        >
          <div
            className={`relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full ${
              id % 2 == 0 ? "order-first" : "order-last"
            }`}
          >
            <img
              alt={titulo}
              src={imagen}
              className="absolute inset-0 h-full w-full object-cover transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300 "
            />
          </div>

          <div className="lg:py-24 ">
            <h2 className="text-3xl font-bold sm:text-4xl text-[#003264] text-center mb-7">
              {titulo}
            </h2>

            <p className="mt-4 text-gray-600">{descripcion}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
