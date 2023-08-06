import React from "react";
import { CarreraItem } from "./CarreraItem";
import { Carreras } from "../const/carreras";

export const CardCarreras = () => {
  const carreras = Carreras;
  return (
    <section className="">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full">
          <h2 className="text-5xl title-font mb-10 text-black font-bold">
            Carreras a nivel Licenciatura
          </h2>
        </div>

        <div className="flex flex-wrap -m-4">
          {carreras?.map(({ id, title, duracion, img }) => {
            return (
              <CarreraItem
                key={id}
                title={title}
                duracion={duracion}
                img={img}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
