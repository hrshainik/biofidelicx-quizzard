import Image from "next/image";
import Link from "next/link";

const QuizCard = ({
  title,
  description,
  time,
  slug,
  category,
  questions,
  image,
}) => {
  return (
    <Link
      href={`/category/[cSlug]/quiz/[qSlug]`}
      as={`/category/${category?.slug}/quiz/${slug}`}
    >
      <div
        className="border flex flex-row cursor-pointer"
        // style={{ wordBreak: "break-all" }}
      >
        <div
          className="relative shrink basis-1/3 p-3 flex flex-col justify-end bg-gradient-to-t from-midnight-900 to-transparent"
          // style={{
          //   background: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1), transparent), url(${image?.url}) center center / cover no-repeat`,
          // }}
        >
          <Image
            className="-z-10"
            src={image?.url}
            alt={title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <p className="text-white-500 text-xs">Category</p>
          <p className="text-white-500 font-h">{category?.title}</p>
        </div>
        <div className="p-3 shrink basis-2/3 flex flex-col justify-between">
          <div className="">
            <span className="text-sm">20 Aug, 2020</span>
            <h2 className="text-xl font-h mb-5">{title}</h2>
            {/* <p>
              {description.substr(0, 60)}
              {description?.length > 60 && "..."}
            </p> */}
          </div>
          <div className="flex justify-between items-end">
            <div>
              <div className="">
                <p className="text-sm">{time} min</p>
                <p className="text-sm">{questions?.length} questions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default QuizCard;
