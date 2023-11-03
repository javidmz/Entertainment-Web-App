import { useContext, useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import SectionData from "../components/SectionData";
import { useLocation } from "react-router-dom";
import Error from "../components/Error";
import DataContext from "../contexts/DataContext";

const Bookmark = () => {
  const [savedID, setSavedID] = useState(
    JSON.parse(localStorage.getItem("saved")) || []
  );
  const [filmsData, setFilmData] = useState([]);
  const location = useLocation().pathname;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchResult, setSearchResult] = useState("");
  const { scrollToTop, changeTitle } = useContext(DataContext);

  const fetchSavedFilms = async () => {
    let requests = savedID.map((film) => {
      return fetch(
        `https://api.themoviedb.org/3/${film.type.split(" ")[0]}/${
          film.id
        }?api_key=${process.env.REACT_APP_API_KEY}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Network response was not ok for ${film.id}`);
          }
          return response.json();
        })
        .then((data) => ({ data, type: film.type }));
    });
    Promise.all(requests)
      .then((responses) => setFilmData(responses))
      .catch(() => setError(true));
  };

  useEffect(() => {
    if (savedID.length == 0) setIsLoading(false);
    fetchSavedFilms();
    scrollToTop();
    changeTitle("Bookmark");
  }, []);

  return (
    <>
      <SearchBar setSearch={setSearchResult} />
      <div className="mt-12 mb-3 px-3 md:mt-16 md:mx-7 lg:ml-40 lg:mr-12">
        <div className="w-full my-auto ml-2 text-xl sm:text-3xl">Saved</div>
        <div className="w-full mt-12 flex flex-wrap justify-center gap-5 xs:justify-start">
          {isLoading && !error && filmsData.length === 0 && (
            <div className="custom-loader m-auto"></div>
          )}
          {error && filmsData.length === 0 && <Error />}

          {filmsData
            .filter((item) =>
              item.data.title.toLowerCase().includes(searchResult.toLowerCase())
            )
            .map((film) => (
              <div
                key={film.data.id}
                className="relative w-2/3 flex flex-col xs:min-w-[200px] xs:w-full xs:grow xs:basis-1/5"
              >
                <SectionData sectionInfo={film.data} type={film.type} />
              </div>
            ))}
          {!isLoading && !error && filmsData.length === 0 && (
            <div className="w-full h-12 text-base text-center xs:text-lg bg-white font-semibold text-red-800 flex justify-center items-center rounded-lg">
              There is no saved film!
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Bookmark;
