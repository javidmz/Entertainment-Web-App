import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SectionHeader from "./SectionHeader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrendData from "./TrendData";

const Trending = (props) => {
  return (
    <div className="mt-12 px-3 md:mt-16 md:mx-7 lg:ml-40 lg:mr-12">
      <SectionHeader
        sectionHeader={props.header}
        sectionType={props.type}
        page={props.data.page}
      />
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full md:w-4/5"
      >
        {props.data.results
          ? props.data.results.slice(0, 10).map((trendData) => {
              return (
                <SwiperSlide key={trendData.id}>
                  <TrendData trendInfo={trendData} type={props.type} />
                </SwiperSlide>
              );
            })
          : [...Array(Number(10))].map((i, index) => {
              return (
                <SwiperSlide key={index}>
                  <TrendData />
                </SwiperSlide>
              );
            })}
      </Swiper>
    </div>
  );
};

export default Trending;
