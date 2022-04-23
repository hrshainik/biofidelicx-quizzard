import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

const useQuizList = (page) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quizzes, setQuizzes] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchQuizzes() {
      const db = getDatabase();
      const quizzesRef = ref(db, "quizzes");
      const quizQuery = query(
        quizzesRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(15)
      );

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(quizQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setQuizzes((prevQuizzes) => {
            return [...prevQuizzes, ...Object.values(snapshot.val())];
          });
        } else {
          setHasMore(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchQuizzes();
  }, [page]);

  return { loading, error, quizzes, hasMore };
};

export default useQuizList;
