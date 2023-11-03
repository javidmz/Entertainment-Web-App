import { useContext, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import GenreList from "../components/GenreList";
import DataContext from "../contexts/DataContext";
import Error from "../components/Error";

const TV = () => {
  const { tvGenres, scrollToTop, changeTitle } = useContext(DataContext);

  useEffect(() => {
    scrollToTop();
    changeTitle("TV");
  }, []);

  return (
    <div className="w-full mb-10">
      <SearchBar />
      {tvGenres.data && <GenreList genres={tvGenres} />}
      {tvGenres.isLoading && (
        <div className="custom-loader mx-auto my-40"></div>
      )}
      {tvGenres.error && (
        <div className="mt-12 px-3 md:mt-16 md:mx-7 lg:ml-40 lg:mr-12">
          <Error />
        </div>
      )}
    </div>
  );
};

export default TV;
