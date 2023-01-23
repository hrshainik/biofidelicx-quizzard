import Link from "next/link";

const QuizCard = ({ title, description, time, slug, category, questions }) => {
  return (
    <Link
      href={`/category/[cSlug]/quiz/[qSlug]`}
      as={`/category/${category?.slug}/quiz/${slug}`}
    >
      <div className="border border-midnight-500 p-3 flex flex-col gap-5 cursor-pointer">
        <div className="">
          <span className="text-xs tracking-md capitalize">
            {category?.title}
          </span>
          <h3 className="text-xl font-h">{title}</h3>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M17.618 5.968l1.453-1.453 1.414 1.414-1.453 1.453a9 9 0 1 1-1.414-1.414zM12 20a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM11 8h2v6h-2V8zM8 1h8v2H8V1z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-sm">{time} min</span>
            </div>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-sm">{questions?.length} questions</span>
            </div>
          </div>
          <div className="border-midnight-500 border-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
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
    </Link>
  );
};

export default QuizCard;
