import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";

const FilmHeader = (props) => {
  return (
    <div className="w-full flex flex-col items-center gap-y-2 md:items-start md:gap-y-4">
      <div className="text-2xl md:text-5xl">{props.title}</div>
      {props.tagline !== "" ? (
        <div className="text-xs text-slate-500 md:text-xl">{props.tagline}</div>
      ) : (
        ""
      )}
      <div className="flex flex-col items-center gap-y-2 md:items-center md:flex-row md:gap-x-3">
        <div className="text-3xl font-semibold md:text-4xl">{props.vote}</div>
        <Rating
          className="align-center flex self-center"
          initialRating={props.vote}
          emptySymbol={<FaRegStar />}
          fullSymbol={<FaStar />}
          readonly
        />
      </div>
    </div>
  );
};

export default FilmHeader;
