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
        <div className="p-5 pt-4 lg:p-8">
          {recentQuizzes.map((quiz) => (
            <h3 key={quiz.id}>{quiz.title}</h3>
          ))}
        </div>
      </fieldset>
    </>
  );
};

export default RecentQuizzes;
