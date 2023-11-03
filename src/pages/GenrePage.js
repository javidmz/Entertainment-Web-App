import { useState, useEffect, useContext } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import DataContext from "../contexts/DataContext";
import HomeSections from "../components/HomeSections";
import useFetch from "../hooks/useFetch";
import SearchBar from "../components/SearchBar";
import PageChanger from "../components/PageChanger";
import Error from "../components/Error";

const GenrePage = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page")));
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [genreType, setGenreType] = useState("");
  const { movieGenres, tvGenres, scrollToTop, changeTitle } =
    useContext(DataContext);
  const genreTypes = path === "movie" ? { ...movieGenres } : { ...tvGenres };
  const genreData = useFetch(
    `https://api.themoviedb.org/3/discover/${
      path === "movie" ? "movie" : "tv"
    }?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${id}&page=${page}`
  );

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    if (genreTypes.data) {
      setGenreType(genreTypes.data.genres.find((genre) => genre.id == id).name);
      changeTitle(
        `${genreTypes.data.genres.find((genre) => genre.id == id).name} - ${
          path === "movie" ? "Movies" : "TV Series"
        }`
      );
    }
  }, [genreTypes.data]);

  return (
    <div className="w-full mb-8">
      <SearchBar />
      {genreType && (
        <>
          <HomeSections
            header={genreType}
            type={path}
            data={genreData.data ? genreData.data : { page: 1 }}
            num="20"
          />
          {genreData.data ? (
            <PageChanger
              page={page}
              setPage={setPage}
              totalPages={genreData.data.total_pages}
            />
          ) : (
            ""
          )}
        </>
      )}
      {genreData.error && <Error />}
    </div>
  );
};

export default GenrePage;
