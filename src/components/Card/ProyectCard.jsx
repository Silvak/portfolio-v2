import { useNavigate } from "react-router-dom";

const dataTest = {
  image: "1.jpg",
  title: "Este es el titulo del proyecto",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est nihil eaque fuga saepe accusantium ipsum quisquam inventore officia quae. Veritatis animi officiis ipsum culpa aut iusto dolore libero, facilis reiciendis?",
  tags: ["React", "Tailwind"],
};

function ProyectCard(props) {
  const image = props.image || dataTest.image;
  const title = props.title || dataTest.title;
  const description = props.description || dataTest.description;
  const tags = props.tags || dataTest.tags;

  const handleClickImage = (e) => {
    e.preventDefault();
  };

  return (
    <article className="flex w-full bg-gray-200 dark:bg-slate-900">
      {/* Lateral bar */}
      <div className="relative bg-black  dark:bg-black/60   w-[10%] max-w-[62px] ">
        <div className="absolute bottom-[10%]  left-0  h-ful w-[32px] bg-red-300 text-white">
          FECHA DE CREACION 2023
        </div>
      </div>

      {/* content */}
      <div className="w-[90%]">
        {/* img container */}
        <div
          onClick={handleClickImage}
          className="relative h-[200px] w-full cursor-pointer overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t  from-gray-200 dark:from-slate-900 to-blue-800/50 hover:bg-pink-800/30 duration-300 ease-in-out"></div>
          <p className="absolute top-2 right-3 text-6xl">01</p>
          <img
            src={image}
            alt={image.split(".")[0]}
            className="object-contain w-ful"
          />
        </div>

        {/* text container */}
        <div className="flex flex-col p-4 gap-4">
          <h3 className="text-xl">{title}</h3>
          <p className="font-thin">{description}</p>
        </div>
      </div>
    </article>
  );
}

export default ProyectCard;
