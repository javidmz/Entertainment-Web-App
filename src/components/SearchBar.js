import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SearchLogo from "../assets/icon-search.svg";

const SearchBar = (props) => {
  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState("");
  const [placeHolder, setPlaceHolder] = useState("");
  const location = useLocation().pathname.split("/");

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchLists = searchItem
      .trim()
      .split(/[\s,\t,\n]+/)
      .join("%20");

    if (location.includes("movie"))
      navigate(`/search/movie?text=${searchLists}&page=1`);
    else if (location.includes("tv"))
      navigate(`/search/tv?text=${searchLists}&page=1`);
    else if (!location.includes("bookmark"))
      navigate(`/search?text=${searchLists}&page=1`);
  };

  useEffect(() => {
    if (location.includes("movie")) setPlaceHolder("Search for movies");
    else if (location.includes("tv")) setPlaceHolder("Search for TV series");
    else setPlaceHolder("Search for movies or TV series");
  }, []);

  useEffect(() => {
    if (location.includes("bookmark")) {
      setTimeout(() => {
        props.setSearch(searchItem);
      }, 500);
    }
  }, [searchItem]);

  return (
    <div className="mt-28 px-3 flex flex-row justify-between items-center md:mt-36 md:mx-7 lg:mt-16 lg:ml-40 lg:mr-12">
      <img src={SearchLogo} alt="Search" />
      <form
        onSubmit={handleSubmit}
        className="w-[calc(100%-60px)] h-10 flex justify-between"
      >
        <input
          type="text"
          placeholder={placeHolder}
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          className="w-[calc(100%-100px)] h-full bg-transparent outline-none focus:border-b-2 text-sm md:text-base lg:text-xl"
        />
        <button
          type="submit"
          className="bg-slate-700 p-2 rounded text-sm font-semibold active:bg-white active:text-black"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
