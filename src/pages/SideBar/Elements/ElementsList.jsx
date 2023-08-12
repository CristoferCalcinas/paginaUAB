import { GruopElements } from "./GruopElements";
import { OnlyElements } from "./OnlyElements";

export const ElementsList = ({ elements }) => {
  return (
    <div>
      {elements?.map(
        ({ id, title, content, path, selected, contentElements }) => {
          return content ? (
            <GruopElements
              title={title}
              content={content}
              key={id}
              path={path}
              selected={selected}
              contentElements={contentElements}
            />
          ) : (
            <OnlyElements
              title={title}
              key={id}
              path={path}
              selected={selected}
            />
          );
        }
      )}
    </div>
  );
};
