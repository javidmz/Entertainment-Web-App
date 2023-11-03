import { FaLink } from "react-icons/fa6";
import { FaImdb } from "react-icons/fa";

const FilmLinks = (props) => {
  return (
    <div className="w-full flex gap-x-3 mb-4 justify-start">
      {props.homepage !== "" ? (
        <a
          href={props.homepage}
          target="_blank"
          rel="noreferrer"
          className="w-40 h-10 bg-slate-600 flex items-center justify-center gap-x-3 rounded-md font-semibold hover:bg-white hover:text-black"
        >
          Website <FaLink />
        </a>
      ) : (
        ""
      )}
      {props.imdb && (
        <a
          href={`https://www.imdb.com/title/${props.imdb}`}
          target="_blank"
          rel="noreferrer"
          className="w-40 h-10 bg-slate-600 flex items-center justify-center gap-x-3 rounded-md font-semibold hover:bg-white hover:text-black"
        >
          IMDB <FaImdb />
        </a>
      )}
    </div>
  );
};

export default FilmLinks;
