import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import DataContext from "../contexts/DataContext";

const NotFound = () => {
  const { changeTitle } = useContext(DataContext);

  useEffect(() => {
    changeTitle("Not Found");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center my-60 gap-8">
      <div className="text-7xl text-red-600">404</div>
      <div className="text-4xl">Ooops!</div>
      <div>Looks like this page doesn't exist.</div>
      <Link to="/">
        <button className="border-2 border-white px-3 py-2 rounded-lg delay-100 duration-300 transition-colors hover:text-red-600">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
