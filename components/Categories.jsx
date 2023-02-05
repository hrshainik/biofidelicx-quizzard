import { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { getCategories } from "../services";
import CategoryCard from "./CategoryCard";
import CategoryCardSkeleton from "./CategoryCardSkeleton";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getCategories().then(({ edges: result }) => {
      setCategories(result);
    });

    if (categories) {
      setTimeout(() => {
        setDataLoaded(true);
      }, 1500);
    }
  }, []);

  if (!dataLoaded) {
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
            modules={[Pagination, Autoplay]}
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
              <CategoryCardSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCardSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCardSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCardSkeleton />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCardSkeleton />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
  }

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
          modules={[Pagination, Autoplay]}
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
          {categories.map(({ node: category }) => (
            <SwiperSlide key={category.id}>
              <CategoryCard {...category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;
