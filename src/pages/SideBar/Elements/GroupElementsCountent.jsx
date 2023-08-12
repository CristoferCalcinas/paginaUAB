import { Link } from "react-router-dom";

const normalize = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/\s+/g, "-")
    .toLowerCase();
};

export const GroupElementsCountent = ({
  title,
  selected,
  pertenece_a,
  contentElements = {},
}) => {
  const path = `/${pertenece_a}/${normalize(title)}`;
  // console.log(path)
  return (
    <li>
      <Link
        to={path}
        className={`block rounded-lg px-4 py-2 text-sm font-bold text-slate-400 hover:bg-gray-100 hover:text-gray-700${
          selected ? "bg-gray-100 text-gray-700" : ""
        }`}
      >
        {title}
      </Link>
    </li>
  );
};
