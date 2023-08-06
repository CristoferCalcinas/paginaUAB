import { LayoutCardItem } from "./LayoutCardItem";

export const LayoutCard = ({layoutInfo, titleLayout}) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap justify-center">
        <div className="pb-10">
          <h2 className="text-6xl font-bold">{titleLayout}</h2>
        </div>
        <div className="flex flex-wrap -m-4">
          {layoutInfo.map(({ id, img, level, title, path }) => (
            <LayoutCardItem img={img} level={level} title={title} key={id} />
          ))}
        </div>
      </div>
    </section>
  );
};
