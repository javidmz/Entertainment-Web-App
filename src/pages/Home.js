import { useContext, useEffect, useState } from "react";
import HomeSections from "../components/HomeSections";
import SearchBar from "../components/SearchBar";
import Trending from "../components/Trending";
import DataContext from "../contexts/DataContext";
import Error from "../components/Error";
import Parallax from "../components/Parallax";

const Home = () => {
  const [swiperData, setSwiperData] = useState("");
  const [popular, setPopular] = useState("");
  const [playing, setPlaying] = useState("");
  const [upComing, setUpComing] = useState("");
  const [topRated, setTopRated] = useState("");
  const [swiperDataTV, setSwiperDataTV] = useState("");
  const [popularTV, setPopularTV] = useState("");
  const [playingTV, setPlayingTV] = useState("");
  const [upComingTV, setUpComingTV] = useState("");
  const [topRatedTV, setTopRatedTV] = useState("");
  const { scrollToTop } = useContext(DataContext);
  const [error, setError] = useState(false);
  const { changeTitle } = useContext(DataContext);

  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmQ5NjNmODQ4M2M3MjkzZjUxMjI4YzIzYWJhYWE3ZSIsInN1YiI6IjY1MDJhNTg0NmEyMjI3MDBmZDIxNjUxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.95UOC3Nn2qxjZ4efwAsxdy0Me8Ztid1_iL-8nCtPX50",
      },
    };

    Promise.all([
      fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`,
        options
      )
        .then((response) => response.json())
        .then((result) => setSwiperData(result)),
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`,
        options
      )
        .then((response) => response.json())
        .then((result) => setPopular(result)),
      fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`,
        options
      )
        .then((response) => response.json())
        .then((result) => setPlaying(result)),
      fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`,
        options
      )
        .then((response) => response.json())
        .then((result) => setUpComing(result)),
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`,
        options
      )
        .then((response) => response.json())
        .then((result) => setTopRated(result)),
      fetch(
        `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_API_KEY}`,
        options
      )
        .then((response) => response.json())
        .then((result) => setSwiperDataTV(result)),
      fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}`,
        options
      )
        .then((response) => response.json())
        .then((result) => setPopularTV(result)),
      fetch(
        `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_API_KEY}`,
        options
      )
        .then((response) => response.json())
        .then((result) => setPlayingTV(result)),
      fetch(
        `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_API_KEY}`,
        options
      )
        .then((response) => response.json())
        .then((result) => setUpComingTV(result)),
      fetch(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}`,
        options
      )
        .then((response) => response.json())
        .then((result) => setTopRatedTV(result)),
    ]).catch(() => setError(true));
  };

  useEffect(() => {
    scrollToTop();
    changeTitle("Home");
    fetchData();
  }, []);

  return (
    <div>
      <Parallax />
      <SearchBar />
      {error && (
        <div className="mt-12 px-3 md:mt-16 md:mx-7 lg:ml-40 lg:mr-12">
          <Error />
        </div>
      )}
      {!error && (
        <Trending
          header="Trending"
          type="movie"
          data={swiperData ? swiperData : { page: 1 }}
        />
      )}
      {!error && (
        <HomeSections
          header="Popular"
          type="movie"
          data={popular ? popular : { page: 1 }}
          num="6"
        />
      )}
      {!error && (
        <HomeSections
          header="Now Playing"
          type="movie"
          data={playing ? playing : { page: 1 }}
          num="6"
        />
      )}
      {!error && (
        <HomeSections
          header="Upcoming"
          type="movie"
          data={upComing ? upComing : { page: 1 }}
          num="6"
        />
      )}
      {!error && (
        <HomeSections
          header="Top Rated"
          type="movie"
          data={topRated ? topRated : { page: 1 }}
          num="6"
        />
      )}
      {!error && (
        <Trending
          header="Trending"
          type="tv"
          data={swiperDataTV ? swiperDataTV : { page: 1 }}
        />
      )}
      {!error && (
        <HomeSections
          header="Popular"
          type="tv"
          data={popularTV ? popularTV : { page: 1 }}
          num="6"
        />
      )}
      {!error && (
        <HomeSections
          header="Now Playing"
          type="tv"
          data={playingTV ? playingTV : { page: 1 }}
          num="6"
        />
      )}
      {!error && (
        <HomeSections
          header="Upcoming"
          type="tv"
          data={upComingTV ? upComingTV : { page: 1 }}
          num="6"
        />
      )}
      {!error && (
        <HomeSections
          header="Top Rated"
          type="tv"
          data={topRatedTV ? topRatedTV : { page: 1 }}
          num="6"
        />
      )}
    </div>
  );
};

export default Home;
