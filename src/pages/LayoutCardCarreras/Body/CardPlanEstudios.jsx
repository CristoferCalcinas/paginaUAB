export const CardPlanEstudios = () => {
  const semestres = [
    "Primer Semestre",
    "Segundo Semestre",
    "Tercer Semestre",
    "Cuarto Semestre",
    "Quinto Semestre",
    "Sexto Semestre",
    "Septimo Semestre",
    "Octavo Semestre",
  ];
  const materias = [
    "Matematicas Discretas",
    "Fundamentos de Programacion",
    "Fundamentos de Investigacion",
    "Calculo Diferencial",
    "Algebra Lineal",
    "Estructura de Datos",
    "Programacion Orientada a Objetos",
  ];
  return (
    <div className="w-full bg-white p-10">
      <h2 className="text-xl mb-5">PLAN DE ESTUDIOS</h2>
      <ul className="flex flex-col space-y-2">
        {semestres.map((name) => {
          return (
            <li
              className="flex p-2 items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white font-bold rounded-lg"
              key={name}
            >
              <details className="w-full h-full">
                <summary className="ml-10">{name}</summary>
                <ul className="flex flex-col mt-5 ml-20 list-disc mb-2">
                  {materias.map((materia) => {
                    return (
                      <li key={materia} className="">
                        {materia}
                      </li>
                    );
                  })}
                </ul>
              </details>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
