import { useNavigate } from "react-router-dom";

const dataTest = {
  image: "1.jpg",
  title: "Este es el titulo del proyecto",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est nihil s ipsum culpa aut iusto dolore libero, facilis reiciendis?",
  tags: ["React", "Tailwind"],
};

function ProyectCard(props) {
  //sort props variables
  const image = props.image || dataTest.image;
  const title = props.title || dataTest.title;
  const description = props.description || dataTest.description;
  const tags = props.tags || dataTest.tags;

  const handleClickImage = (e) => {
    e.preventDefault();
  };

  return (
    <article className="flex w-full bg-gray-200 dark:bg-slate-900  overflow-hidden">
      {/* Lateral bar */}
      <div className="relative w-[12%] max-w-[62px] border border-gray-700">
        <div className="absolute bottom-[12%]  left-0 -rotate-90  w-full  whitespace-nowrap">
          FECHA DE CREACION 2023
        </div>
      </div>

      {/* content */}
      <div className="w-[100%]">
        {/* img container */}
        <div
          onClick={handleClickImage}
          className="relative h-[280px] w-full cursor-pointer overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t  from-gray-200 dark:from-slate-900 to-blue-800/50 hover:bg-pink-800/30 duration-300 ease-in-out"></div>
          <p className="absolute top-2 right-3 text-6xl font-bold  text-gray-300 shadow-lg rounded-lg">
            01
          </p>
          <img
            src={image}
            alt={image.split(".")[0]}
            className="object-contain w-ful"
          />

          {/* Tecnologies */}
          <div className="absolute bottom-0 left-4 flex gap-4">
            <p>React</p>
            <p>React</p>
            <p>React</p>
          </div>

          {/* decoration */}
          <div className="absolute bottom-0 right-8 h-6 w-2 bg-black"></div>
          <div className="absolute bottom-0 right-8 h-6 w-2 rotate-90 bg-black"></div>

          <div className="absolute bottom-8 right-8 h-6 w-2 bg-black"></div>
          <div className="absolute bottom-8 right-8 h-6 w-2 rotate-90 bg-black"></div>
        </div>

        {/* text container */}
        <div className="flex flex-col p-4 gap-4">
          <h3 className="text-xl font-semibold uppercase">{title}</h3>
          <p className="font-thin">{description}</p>

          {/* Links buttons */}
          <div className="flex gap-2">
            <button className=" border border-gray-800 w-[80px] p-3">
              View
            </button>
            <button className=" border border-gray-800 w-[80px] p-3">
              Github
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProyectCard;
