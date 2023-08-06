export const LayoutCardItem = ({ img, level, title }) => {
  return (
    <div className="p-4 lg:w-1/2 md:w-full">
      <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col items-center h-full">
        <div
          className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 bg-cover"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-xl title-font font-bold mb-3">
            {title}
          </h2>
          <p className="leading-relaxed text-lg">{level}</p>
          {/* todo esto es un Link>a */}
          {/* <a className="mt-3 text-indigo-500 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a> */}
        </div>
      </div>
    </div>
  );
};
