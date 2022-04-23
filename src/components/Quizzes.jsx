import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useQuizList from "../hooks/useQuizList";
import Quiz from "./Quiz";

const Quizzes = () => {
  const [page, setPage] = useState(1);
  const { loading, error, quizzes, hasMore } = useQuizList(page);
  console.log(quizzes);

  const uniqueQuizzes = Array.from(
    new Set(quizzes.map((quiz) => quiz.youtubeID))
  ).map((id) => {
    return quizzes.find((quiz) => quiz.youtubeID === id);
  });

  return (
    <div>
      {uniqueQuizzes.length > 0 && (
        <InfiniteScroll
          dataLength={quizzes.length}
          hasMore={hasMore}
          loader="Loading..."
          next={() => setPage(page + 15)}
        >
          {uniqueQuizzes.map((quiz) => (
            <Quiz
              key={quiz.youtubeID}
              title={quiz.title}
              id={quiz.youtubeID}
              noq={quiz.noq}
            />
          ))}
        </InfiniteScroll>
      )}
      {loading && <div>Loading</div>}
      {!loading && quizzes.length === 0 && <div>No quiz found!</div>}
      {error && <div>There was an error!</div>}
    </div>
  );
};

export default Quizzes;
