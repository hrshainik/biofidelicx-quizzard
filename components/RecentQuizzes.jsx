import { useEffect, useState } from "react";
import { getRecentQuizzes } from "../services";

const RecentQuizzes = () => {
  const [recentQuizzes, setRecentQuizzes] = useState([]);

  useEffect(() => {
    getRecentQuizzes().then((data) => setRecentQuizzes(data));
  }, []);

  return (
    <>
      <fieldset className="border border-midnight-100">
        <legend className="mx-auto px-3 font-h text-3xl font-bold">
          Recent Quizzes
        </legend>
        <div className="p-5 pt-4 lg:p-8 flex flex-col gap-3">
          {recentQuizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="cursor-pointer gap-3 flex justify-between items-center border-b last:border-none pb-3 last:pb-0"
            >
              <div>
                {/* <span>{quiz?.category?.title}</span> */}
                <h3 className="font-h">{quiz?.title}</h3>
                <p className="">
                  {quiz?.description.substr(0, 60)}
                  {quiz?.description?.length > 60 && "..."}
                </p>
                <span className="mr-2 text-sm">
                  {quiz.questions.length} questions
                </span>
                <span className="text-sm">{quiz.time} minutes</span>
              </div>
              <div className="w-8 h-8	grow-0 basis-8 shrink-0">
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
          ))}
        </div>
      </fieldset>
    </>
  );
};

export default RecentQuizzes;
