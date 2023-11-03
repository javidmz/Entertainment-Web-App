import { createContext } from "react";
import useFetch from "../hooks/useFetch";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const movieGenres = useFetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
  );
  const tvGenres = useFetch(
    `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}`
  );

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const changeTitle = (name) => {
    document.title = `${name} | Entertainment App`;
  };

  return (
    <DataContext.Provider
      value={{
        movieGenres,
        tvGenres,
        scrollToTop,
        changeTitle,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
