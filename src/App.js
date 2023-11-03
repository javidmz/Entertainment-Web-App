import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import TV from "./pages/TV";
import Bookmark from "./pages/Bookmark";
import GenrePage from "./pages/GenrePage";
import Lists from "./pages/Lists";
import DetailedInfo from "./pages/DetailedInfo";
import { DataProvider } from "./contexts/DataContext";
import SearchResult from "./pages/SearchResult";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/movie/trending/:id" element={<Lists />} />
          <Route path="/movie/popular/:id" element={<Lists />} />
          <Route path="/movie/now_playing/:id" element={<Lists />} />
          <Route path="/movie/upcoming/:id" element={<Lists />} />
          <Route path="/movie/top_rated/:id" element={<Lists />} />
          <Route path="/tv/trending/:id" element={<Lists />} />
          <Route path="/tv/popular/:id" element={<Lists />} />
          <Route path="/tv/on_the_air/:id" element={<Lists />} />
          <Route path="/tv/airing_today/:id" element={<Lists />} />
          <Route path="/tv/top_rated/:id" element={<Lists />} />
          <Route path="movie/genre/:id" element={<GenrePage />} />
          <Route path="/movie/:id" element={<DetailedInfo />} />
          <Route path="/tv/:id" element={<DetailedInfo />} />
          <Route path="tv/genre/:id" element={<GenrePage />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/search/:id" element={<SearchResult />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DataProvider>
    </>
  );
}

export default App;
