const QUIZ_URLS = {
  quiz: `${process.env.NEXT_PUBLIC_API_URL}api/quizzes`,
  category: `${process.env.NEXT_PUBLIC_API_URL}api/quiz-categories`,
};

export const getQuizzes = async () => {
  const res = await fetch(`${QUIZ_URLS.quiz}?populate=deep,2`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  });
  return await res.json();
};

export const getQuiz = async (id) => {
  const res = await fetch(`${QUIZ_URLS.quiz}/${id}?populate=deep,3`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  });
  return await res.json();
};

export const getCategories = async () => {
  const res = await fetch(`${QUIZ_URLS.category}?populate[0]=quizzes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  });
  return await res.json();
};

export const getCategory = async (id) => {
  const res = await fetch(`${QUIZ_URLS.category}/${id}?populate=deep,3`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  });
  return await res.json();
};
