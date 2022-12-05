import Link from "next/link";

const QuizCard = ({ title, description, slug, category }) => {
  return (
    <Link href={`/category/${category.slug}/quiz/${slug}`}>
      <div className="card cursor-pointer my-8">
        {/* <div className="relative z-10 h-56">
          <Image
            src={post.featuredImage.url}
            alt={post.title}
            layout="fill"
            className="card-img h-full w-full object-cover"
            loading="lazy"
          />
        </div> */}
        <div
          className="card-con relative z-20 mx-auto -mt-6 flex flex-col items-center bg-white-500  text-midnight-500"
          style={{ width: "95%" }}
        >
          <div className="shadow-box"></div>
          <div className="-mt-4 bg-aquamarine-500/80 py-2 px-3.5">
            <span className="font-ct text-xs font-semibold uppercase leading-3 tracking-sm">
              {category.title}
            </span>
          </div>
          <div className="card-con-text w-full p-4 pb-5 pt-0">
            <h1 className="mb-3 text-center text-2xl font-semibold transition duration-100">
              {title}
            </h1>
            <p
              className="text-center font-h text-base font-normal leading-6"
              style={{ color: "#50505e" }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default QuizCard;
