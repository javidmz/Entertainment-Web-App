import { useLocation } from "react-router-dom";

const FilmGeneralInfo = (props) => {
  const location = useLocation().pathname.split("/")[1];

  return (
    <div className="w-full flex justify-between text-sm">
      {location === "movie" ? (
        <>
          <div>
            <div className="text-slate-500 mb-1">Length</div>
            <div>{props.runtime} min.</div>
          </div>
          <div>
            <div className="text-slate-500 mb-1">Language</div>
            <div>{props.language}</div>
          </div>
          <div>
            <div className="text-slate-500 mb-1">Year</div>
            <div>{props.year}</div>
          </div>
          <div>
            <div className="text-slate-500 mb-1">Status</div>
            <div>{props.status}</div>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="text-slate-500 mb-1">Language</div>
            <div>{props.language}</div>
          </div>
          <div>
            <div className="text-slate-500 mb-1">First Air</div>
            <div>{props.firstAir}</div>
          </div>
          <div>
            <div className="text-slate-500 mb-1">Last Air</div>
            <div>{props.lastAir}</div>
          </div>
          <div>
            <div className="text-slate-500 mb-1">Status</div>
            <div>{props.status}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default FilmGeneralInfo;
