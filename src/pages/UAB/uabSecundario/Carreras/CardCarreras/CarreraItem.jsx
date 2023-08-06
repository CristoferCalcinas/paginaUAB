export const CarreraItem = ({ title, duracion, img }) => {
  return (
    <div className="p-4 lg:w-1/2">
      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left p-5 border rounded-xl">
        <img
          alt={title}
          className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
          src={img}
        />
        <div className="flex-grow sm:pl-8">
          <h2 className="font-bold text-2xl text-gray-900 m-5">
            {title}
          </h2>
          
          <p className="mb-4">
            {duracion}
          </p>
          
        </div>
      </div>
    </div>
  );
};
