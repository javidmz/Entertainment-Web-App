import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import SearchBar from "../components/SearchBar";
import { useContext, useEffect, useState } from "react";
import HomeSections from "../components/HomeSections";
import PageChanger from "../components/PageChanger";
import Error from "../components/Error";
import DataContext from "../contexts/DataContext";

const Lists = () => {
  const location = useLocation().pathname.split("/");
  const listData = useFetch(
    location[2] === "trending"
      ? `https://api.themoviedb.org/3/${location[2]}/${location[1]}/day?api_key=${process.env.REACT_APP_API_KEY}&page=${location[3]}`
      : `https://api.themoviedb.org/3/${location[1]}/${location[2]}?api_key=${process.env.REACT_APP_API_KEY}&page=${location[3]}`
  );
  const [page, setPage] = useState(Number(location[3]));
  const { scrollToTop, changeTitle } = useContext(DataContext);

  useEffect(() => {
    scrollToTop();
    const newTitle =
      location[2]
        .split("_")
        .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
        .join(" ") +
      " " +
      `${location[1] === "movie" ? "Movies" : "TV Series"}`;
    changeTitle(newTitle);
  }, [location]);

  return (
    <>
      <SearchBar />
      {listData.data && (
        <>
          <HomeSections
            header={(location[2].charAt(0).toUpperCase() + location[2].slice(1))
              .split("_")
              .join(" ")}
            type={location[1]}
            data={listData.data}
            num="20"
          />
          <PageChanger
            page={page}
            setPage={setPage}
            totalPages={listData.data.total_pages}
          />
        </>
      )}
      {listData.isLoading && (
        <div className="custom-loader mx-auto my-40"></div>
      )}
      {listData.error && (
        <div className="mt-12 px-3 md:mt-16 md:mx-7 lg:ml-40 lg:mr-12">
          <Error />
        </div>
      )}
    </>
  );
};

export default Lists;
