import { useLocation, useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import HomeSections from "../components/HomeSections";
import SearchBar from "../components/SearchBar";
import PageChanger from "../components/PageChanger";
import { useContext, useEffect, useState } from "react";
import Error from "../components/Error";
import DataContext from "../contexts/DataContext";

const SearchResult = () => {
  const [searchLists, setSearchLists] = useSearchParams();
  const [page, setPage] = useState(Number(searchLists.get("page")));
  const searchText = searchLists.get("text");
  let requestType;
  const location = useLocation().pathname.split("/");
  const { scrollToTop, changeTitle } = useContext(DataContext);
  if (location.includes("movie")) requestType = "movie";
  else if (location.includes("tv")) requestType = "tv";
  else requestType = "multi";

  useEffect(() => {
    scrollToTop();
    changeTitle(`${searchText} - Search Result`);
  }, [searchText]);

  const searchData = useFetch(
    `https://api.themoviedb.org/3/search/${requestType}?api_key=${process.env.REACT_APP_API_KEY}&query=${searchText}&page=${page}`
  );

  return (
    <>
      <SearchBar />
      {searchData.data.length !== 0 && (
        <>
          <HomeSections
            header={`Found ${searchData.data.total_results} results for "${searchText}"`}
            type={requestType !== "multi" ? requestType : "media_type"}
            data={searchData.data}
            num={20}
          />
          <PageChanger
            page={page}
            setPage={setPage}
            totalPages={searchData.data.total_pages}
          />
        </>
      )}
      {searchData.isLoading && (
        <div className="custom-loader mx-auto my-40"></div>
      )}
      {searchData.error && (
        <div className="mt-12 px-3 md:mt-16 md:mx-7 lg:ml-40 lg:mr-12">
          <Error />
        </div>
      )}
    </>
  );
};

export default SearchResult;
