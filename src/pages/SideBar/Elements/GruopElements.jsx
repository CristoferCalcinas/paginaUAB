import { GroupElementsCountent } from "./GroupElementsCountent";
import { Link } from "react-router-dom";

export const GruopElements = ({
  title,
  content,
  path,
  selected,
  contentElements,
}) => {
  return (
    <li>
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-white hover:bg-gray-100 hover:text-gray-700">
          <Link to={path} className="text-sm font-medium uppercase">
            {title}
          </Link>
          <span className="shrink-0 transition duration-300 group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        <ul className="mt-2 space-y-1 px-4">
          {content.map((item) => {
            return (
              <GroupElementsCountent
                title={item}
                pertenece_a={title}
                key={item}
                selected={selected}
                contentElements={contentElements}
              />
            );
          })}
        </ul>
      </details>
    </li>
  );
};
