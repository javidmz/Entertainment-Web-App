import IconMovie from "../assets/icon-category-movie.svg";
import IconTV from "../assets/icon-category-tv.svg";
import IconBookmarkEmpty from "../assets/icon-bookmark-empty.svg";
import IconBookmarkFull from "../assets/icon-bookmark-full.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const TrendData = ({ trendInfo = "", type }) => {
  const [isBookmark, setIsBookmark] = useState(
    (
      (JSON.parse(localStorage.getItem("saved")) &&
        JSON.parse(localStorage.getItem("saved")).map((el) => el.id)) ||
      []
    ).includes(trendInfo.id)
  );
  const [isSkeleton, setIsSkeleton] = useState(true);

  const handleBookmark = () => {
    const items = JSON.parse(localStorage.getItem("saved")) || [];
    let newSavedItems = isBookmark
      ? items.filter((item) => item.id != trendInfo.id)
      : !items.map((item) => item.id).includes(trendInfo.id)
      ? [...items, { id: trendInfo.id, type }]
      : [...items];
    localStorage.setItem("saved", JSON.stringify(newSavedItems));
    setIsBookmark(!isBookmark);
  };

  return (
    <>
      <div className="w-full rounded-md overflow-hidden">
        <div className={`${isSkeleton ? "skeleton" : ""} w-full h-full`}>
          {trendInfo ? (
            <Link to={`/${type.split(" ")[0]}/${trendInfo.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original/${trendInfo.backdrop_path}`}
                alt="trend_image"
                loading="lazy"
                onLoad={() => setIsSkeleton(false)}
                className="w-full h-full object-cover transition cursor-pointer hover:scale-125 "
              />
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="absolute bottom-4 left-3 sm:bottom-6 sm:left-4">
        {trendInfo ? (
          <>
            <div className="flex items-center gap-x-2 text-xs sm:text-sm lg:text-base lg:gap-x-3">
              <div>
                {type === "movie"
                  ? trendInfo.release_date.split("-")[0]
                  : trendInfo.first_air_date.split("-")[0]}
              </div>
              <div className="flex items-center">
                <div>&#183;</div>
                <img
                  src={type === "movie" ? IconMovie : IconTV}
                  alt="icon"
                  className="ml-1"
                />
              </div>
              <div>Movie</div>
            </div>
            <div className="text-sm mt-1 font-semibold sm:text-base lg:text-xl">
              {trendInfo.title}
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <img
        src={isBookmark ? IconBookmarkFull : IconBookmarkEmpty}
        alt="bookmark"
        className="absolute top-5 right-5 cursor-pointer"
        onClick={handleBookmark}
      />
    </>
  );
};

export default TrendData;
