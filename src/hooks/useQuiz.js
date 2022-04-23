import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

const useQuiz = (quizID) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    async function fetchQuizzes() {
      const db = getDatabase();
      const quizRef = ref(db, `quiz/${quizID}/questions`);
      const quizQuery = query(quizRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(quizQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setQuiz((prevQuiz) => {
            return [...prevQuiz, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchQuizzes();
  }, [quizID]);

  return { loading, error, quiz };
};

export default useQuiz;
