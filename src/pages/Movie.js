import { useContext, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import GenreList from "../components/GenreList";
import DataContext from "../contexts/DataContext";
import Error from "../components/Error";

const Movie = () => {
  const { movieGenres, scrollToTop, changeTitle } = useContext(DataContext);

  useEffect(() => {
    scrollToTop();
    changeTitle("Movie");
  }, []);

  return (
    <div className="w-full mb-10">
      <SearchBar />
      {movieGenres.data && <GenreList genres={movieGenres} />}
      {movieGenres.isLoading && (
        <div className="custom-loader mx-auto my-40"></div>
      )}
      {movieGenres.error && (
        <div className="mt-12 px-3 md:mt-16 md:mx-7 lg:ml-40 lg:mr-12">
          <Error />
        </div>
      )}
    </div>
  );
};

export default Movie;
