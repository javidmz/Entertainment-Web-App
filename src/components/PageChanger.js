import { useContext, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import DataContext from "../contexts/DataContext";

const PageChanger = (props) => {
  const { scrollToTop } = useContext(DataContext);
  const location = useLocation();
  const searchParams = useSearchParams();
  const path =
    location.search !== ""
      ? location.pathname + location.search.split("page")[0] + "page="
      : location.pathname.split("/").slice(0, -1).join("/") + "/";

  useEffect(() => {
    scrollToTop();
  }, [props.page]);

  return (
    <div className="w-4/5 xs:w-[325px] h-10 mx-auto my-10 flex">
      {props.page !== 1 ? (
        <Link
          to={props.page !== 1 ? `${path}${props.page - 1}` : ""}
          className="w-1/4 h-full"
          onClick={() => props.setPage(props.page - 1)}
        >
          <button
            className={`w-full h-full flex items-center justify-center border-2 border-white bg-transparent rounded-l-lg text-sm font-semibold ${
              props.currentPage !== "1" ? "hover:bg-white hover:text-black" : ""
            }`}
          >
            <FaArrowLeft className="mr-2" /> Prev
          </button>
        </Link>
      ) : (
        <button
          className={`w-1/4 h-full flex items-center justify-center border-2 border-white bg-transparent rounded-l-lg text-sm font-semibold`}
          disabled={true}
        >
          <FaArrowLeft className="mr-2" /> Prev
        </button>
      )}
      <div className="w-1/2 h-full flex items-center justify-center border-2 border-white bg-white text-black font-semibold">
        Page {props.page} of {props.totalPages}
      </div>
      {props.page !== props.totalPages ? (
        <Link
          to={`${path}${props.page + 1}`}
          className="w-1/4 h-full"
          onClick={() => props.setPage(props.page + 1)}
        >
          <button
            className={`w-full h-full flex items-center justify-center border-2 border-white bg-transparent rounded-r-lg text-sm font-semibold ${
              props.currentPage !== props.totalPages
                ? "hover:bg-white hover:text-black"
                : ""
            }`}
          >
            Next <FaArrowRight className="ml-2" />
          </button>
        </Link>
      ) : (
        <button
          className={`w-1/4 h-full flex items-center justify-center border-2 border-white bg-transparent rounded-r-lg text-sm font-semibold`}
          disabled={true}
        >
          Next <FaArrowRight className="ml-2" />
        </button>
      )}
    </div>
  );
};

export default PageChanger;
