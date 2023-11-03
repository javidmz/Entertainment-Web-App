import { Link } from "react-router-dom";

const SectionHeader = ({ sectionHeader, sectionType, page }) => {
  return (
    <div className="mb-8 flex justify-between items-center sm:mb-12">
      <div className="flex items-end">
        <h2 className="text-xl sm:text-3xl">{sectionHeader}</h2>
        <p
          className={`ml-2 rounded-md border-white border-2 px-2 py-px my-auto text-[8px] sm:ml-6 sm:text-[10px] ${
            sectionType === "tv" ? "text-cyan-900 bg-white" : ""
          }`}
        >
          {sectionType.toUpperCase()}
        </p>
      </div>

      <Link
        to={`${sectionType.split(" ")[0]}/${sectionHeader
          .toLowerCase()
          .split(" ")
          .join("_")}/${page}`}
      >
        <button className="text-xs text-slate-500 sm:text-ms hover:cursor-pointer hover:text-white">
          SEE MORE
        </button>
      </Link>
    </div>
  );
};

export default SectionHeader;
