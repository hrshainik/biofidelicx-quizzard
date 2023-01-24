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
      <div className="border flex flex-row cursor-pointer">
        <div
          className="grow basis-1/3 p-3 flex flex-col justify-end"
          style={{
            background: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1), transparent), url(${image?.url})`,
          }}
        >
          <p className="text-white-500 text-xs">Category</p>
          <p className="text-white-500 font-h">{category?.title}</p>
        </div>
        <div className="p-3 grow basis-2/3">
          <div className="">
            <span className="text-sm">20 Aug, 2020</span>
            <h3 className="text-xl font-h mb-5">{title}</h3>
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
            <div className="w-8 h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="w-full h-full"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M16.394 12L10 7.737v8.526L16.394 12zm2.982.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default QuizCard;
