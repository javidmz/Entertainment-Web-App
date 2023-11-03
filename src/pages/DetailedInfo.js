import { useParams, useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import FilmHeader from "../components/FilmHeader";
import FilmGeneralInfo from "../components/FilmGeneralInfo";
import FilmGenres from "../components/FilmGenres";
import FilmSynopsis from "../components/FilmSynopsis";
import FilmCasts from "../components/FilmCasts";
import FilmLinks from "../components/FilmLinks";
import { useContext, useEffect } from "react";
import DataContext from "../contexts/DataContext";
import Error from "../components/Error";

const DetailedInfo = () => {
  const { id } = useParams();
  const { scrollToTop, changeTitle } = useContext(DataContext);
  const location = useLocation().pathname.split("/")[1];
  const fetchDetails = useFetch(
    `https://api.themoviedb.org/3/${location}/${id}?api_key=${process.env.REACT_APP_API_KEY}`
  );
  const fetchCasts = useFetch(
    `https://api.themoviedb.org/3/${location}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`
  );

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    const tabName = fetchDetails.data.original_title || fetchDetails.data.name;
    if (tabName) changeTitle(tabName);
  }, [fetchDetails.data]);

  return (
    <div className="w-full px-4 mt-28 flex flex-col items-center sm:px-12 md:px-5 md:mt-36 md:gap-x-8 md:flex-row md:items-start lg:pl-52 lg:pr-36 lg:mt-12 lg:gap-x-20">
      {fetchDetails.data && fetchCasts.data && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/original/${fetchDetails.data.poster_path}`}
            alt="movie image"
            loading="lazy"
            className="w-1/2 rounded-md md:w-2/5 lg:w-[350px]"
          />
          <div className="w-full mt-8 flex flex-col items-center gap-y-7 lg:mt-0">
            <FilmHeader
              title={
                location === "movie"
                  ? fetchDetails.data.original_title
                  : fetchDetails.data.name
              }
              tagline={fetchDetails.data.tagline}
              vote={(Number(fetchDetails.data.vote_average) / 2).toFixed(1)}
            />
            {location === "movie" ? (
              <FilmGeneralInfo
                runtime={fetchDetails.data.runtime}
                language={fetchDetails.data.spoken_languages[0].english_name}
                year={fetchDetails.data.release_date.split("-")[0]}
                status={fetchDetails.data.status}
              />
            ) : (
              <FilmGeneralInfo
                language={fetchDetails.data.spoken_languages[0].english_name}
                firstAir={fetchDetails.data.first_air_date}
                lastAir={fetchDetails.data.last_air_date}
                status={fetchDetails.data.status}
              />
            )}
            <FilmGenres genres={fetchDetails.data.genres} />
            <FilmSynopsis overview={fetchDetails.data.overview} />
            <FilmCasts cast={fetchCasts.data.cast} />
            <FilmLinks
              homepage={fetchDetails.data.homepage}
              imdb={fetchDetails.data.imdb_id}
            />
          </div>
        </>
      )}
      {fetchDetails.isLoading && (
        <div className="custom-loader mx-auto my-40"></div>
      )}
      {fetchDetails.error && <Error />}
    </div>
  );
};

export default DetailedInfo;
