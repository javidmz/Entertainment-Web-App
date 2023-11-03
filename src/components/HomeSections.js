import SectionHeader from "./SectionHeader";
import SectionData from "./SectionData";

const HomeSections = ({ header, data, num, type }) => {
  return (
    <div className="mt-12 px-3 md:mt-16 md:mx-7 lg:ml-40 lg:mr-12">
      {num == 6 ? (
        <SectionHeader
          sectionHeader={header}
          sectionType={type}
          page={data.page}
        />
      ) : (
        <div className="w-full my-auto ml-2 text-xl sm:text-3xl">{header}</div>
      )}
      <div className="w-full mt-12 flex flex-wrap justify-center gap-5 xs:justify-between">
        {data.results
          ? data.results.slice(0, num).map((sectionData) => {
              return sectionData[type] !== "person" ? (
                <div
                  key={sectionData.id}
                  className="relative w-2/3 flex flex-col xs:min-w-[200px] xs:w-full xs:grow xs:basis-1/5"
                >
                  <SectionData
                    sectionInfo={sectionData}
                    type={type === "media_type" ? sectionData[type] : type}
                  />
                </div>
              ) : (
                ""
              );
            })
          : [...Array(Number(num))].map((i, index) => (
              <div
                key={index}
                className="relative w-2/3 flex flex-col xs:min-w-[200px] xs:w-full xs:grow xs:basis-1/5"
              >
                <SectionData />
              </div>
            ))}
      </div>
    </div>
  );
};

export default HomeSections;
