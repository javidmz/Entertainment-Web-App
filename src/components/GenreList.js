import { Link, useLocation } from "react-router-dom";

const GenreList = ({ genres }) => {
  const location = useLocation().pathname.split("/").at(-1);

  return (
    <div className="w-2/3 mt-12 mx-auto flex flex-wrap justify-between gap-4 sm:w-full sm:px-7 lg:pl-40 lg:pr-12">
      {genres.data.genres.map((genre, index) => (
        <Link
          to={`/${location}/genre/${genre.id}?page=1`}
          key={genre.id}
          className={`${
            index % 2 === 0 ? "hover:bg-cyan-900" : "hover:bg-sky-950"
          } h-48 w-48 p-8 cursor-pointer border-2 border-white text-center flex grow items-center justify-center rounded-md text-xl hover:transition-all hover:duration-500`}
        >
          {genre.name}
        </Link>
      ))}
    </div>
  );
};

export default GenreList;
