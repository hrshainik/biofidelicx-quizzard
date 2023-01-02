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
              className="cursor-pointer flex justify-between items-center"
            >
              <div>
                <span>{quiz.category.title}</span>
                <h3 className="font-h">{quiz.title}</h3>
                <p>{quiz.questions.length} questions</p>
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
          ))}
        </div>
      </fieldset>
    </>
  );
};

export default RecentQuizzes;
