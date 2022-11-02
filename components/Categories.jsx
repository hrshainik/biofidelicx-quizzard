import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto mb-8" style={{ marginTop: "-6rem" }}>
        <p className="text-center font-h text-xl font-bold leading-loose text-white-500 md:text-left">
          Categories
        </p>
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          slidesPerView={1.5}
          centeredSlides={true}
          loop
          breakpoints={{
            400: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
              centeredSlides: false,
            },
            960: {
              slidesPerView: 3,
              centeredSlides: false,
            },
            1200: {
              slidesPerView: 4,
              centeredSlides: false,
            },
            1600: {
              slidesPerView: 5,
              centeredSlides: false,
            },
            2000: {
              slidesPerView: 6,
              centeredSlides: false,
            },
            2400: {
              slidesPerView: 7,
              centeredSlides: false,
            },
          }}
        >
          <SwiperSlide>
            <CategoryCard title="Molecular Biology" slug="molecular-biology" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard title="Biology" slug="biology" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard title="Genetics" slug="genetics" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard title="Biochemistry" slug="biochemistry" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard title="Biotechnology" slug="biotechnology" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;
