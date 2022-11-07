import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryCard from "./CategoryCard";

const Categories = ({ categories }) => {
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   setCategories([
  //     {
  //       title: "Biochemistry",
  //       slug: "biochemistry",
  //     },
  //     {
  //       title: "Genetics",
  //       slug: "genetics",
  //     },
  //     {
  //       title: "Oncology",
  //       slug: "oncology",
  //     },
  //     {
  //       title: "Biology",
  //       slug: "biology",
  //     },
  //     {
  //       title: "Chemistry",
  //       slug: "chemistry",
  //     },
  //     {
  //       title: "Biotechnology",
  //       slug: "biotechnology",
  //     },
  //   ]);
  // }, []);
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
          {categories.map(({ attributes: category, id }) => (
            <SwiperSlide key={id}>
              <CategoryCard {...category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;
