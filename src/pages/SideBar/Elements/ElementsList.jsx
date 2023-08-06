import { GruopElements } from "./GruopElements";
import { OnlyElements } from "./OnlyElements";

export const ElementsList = ({ elements }) => {

  return (
    <div>
      {elements?.map(({ title, content, path, selected }) => {
        return content ? (
          <GruopElements
            title={title}
            content={content}
            key={title}
            path={path}
            selected={selected}
          />
        ) : (
          <OnlyElements title={title} key={title} path={path} selected={selected} />
        );
      })}
    </div>
  );
};
