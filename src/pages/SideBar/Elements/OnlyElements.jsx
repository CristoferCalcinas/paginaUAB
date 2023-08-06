import { Link } from "react-router-dom";

export const OnlyElements = ({ title, path, selected }) => {
  return (
    <li>
      <Link
        to={path}
        className={`block rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-700 uppercase ${
          selected ? "bg-gray-100 text-black" : "text-white"
        }`}
      >
        {title}
      </Link>
    </li>
  );
};
