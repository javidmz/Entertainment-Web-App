import IconMovie from "../assets/icon-category-movie.svg";
import IconTV from "../assets/icon-category-tv.svg";
import IconBookmarkEmpty from "../assets/icon-bookmark-empty.svg";
import IconBookmarkFull from "../assets/icon-bookmark-full.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const SectionData = ({ sectionInfo = "", type }) => {
  const [isBookmark, setIsBookmark] = useState(
    (
      (JSON.parse(localStorage.getItem("saved")) &&
        JSON.parse(localStorage.getItem("saved")).map((el) => el.id)) ||
      []
    ).includes(sectionInfo.id)
  );
  const [isSkeleton, setIsSkeleton] = useState(true);

  const handleBookmark = () => {
    const items = JSON.parse(localStorage.getItem("saved")) || [];
    let newSavedItems = isBookmark
      ? items.filter((item) => item.id != sectionInfo.id)
      : !items.map((item) => item.id).includes(sectionInfo.id)
      ? [...items, { id: sectionInfo.id, type }]
      : [...items];
    localStorage.setItem("saved", JSON.stringify(newSavedItems));
    setIsBookmark(!isBookmark);
  };

  return (
    <>
      <div className="w-full rounded-md h-[135px] md:h-[140px] lg:h-[175px] overflow-hidden">
        <div className={`${isSkeleton ? "skeleton" : ""} w-full h-full`}>
          {sectionInfo ? (
            <Link to={`/${type.split(" ")[0]}/${sectionInfo.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original/${sectionInfo.backdrop_path}`}
                alt="trend_image"
                onLoad={() => setIsSkeleton(false)}
                className="w-full h-full object-cover cursor-pointer transition hover:scale-125 "
              />
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="mt-2">
        <div className="flex items-center gap-x-2 text-xs opacity-75 sm:text-sm lg:text-base lg:gap-x-3">
          {!sectionInfo ? (
            <div className="skeleton w-1/2 h-5"></div>
          ) : (
            <>
              <div>
                {type === "movie"
                  ? sectionInfo.release_date.split("-")[0]
                  : sectionInfo.first_air_date.split("-")[0]}
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
            </>
          )}
        </div>
        <div className="text-sm mt-1 font-semibold sm:text-base lg:text-xl">
          {!sectionInfo ? (
            <div className="skeleton w-full h-5"></div>
          ) : type === "movie" ? (
            sectionInfo.title
          ) : (
            sectionInfo.name
          )}
        </div>
      </div>
      <img
        src={isBookmark ? IconBookmarkFull : IconBookmarkEmpty}
        alt="bookmark"
        className="absolute top-3 right-3 cursor-pointer"
        onClick={handleBookmark}
      />
    </>
  );
};

export default SectionData;
