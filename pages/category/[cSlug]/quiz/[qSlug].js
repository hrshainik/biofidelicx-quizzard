import Head from "next/head";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import {
  Checkbox,
  Header,
  Question,
  ResultCheckbox,
  Timer,
} from "../../../../components";
import { getCategories, getQuiz } from "../../../../services";

export async function getStaticProps({ params }) {
  const quizInfo = await getQuiz(params.qSlug);

  if (!quizInfo) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      quizInfo,
    },
  };
}

export async function getStaticPaths() {
  const { edges: categories } = await getCategories();

  return {
    paths: categories.map(({ node: category }) => {
      return {
        params: {
          cSlug: `${category.slug}`,
          qSlug: `${category.quizzes.slug}`,
        },
      };
    }),
    fallback: "blocking",
  };
}

const QuizPage = ({ quizInfo }) => {
  const [quiz, setQuiz] = useState();
  const [questions, setQuestions] = useState();
  const [index, setIndex] = useState(0);
  const [selectedRadioBtn, setSelectedRadioBtn] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(new Set());
  const [correctAnswerArr, setCorrectAnswerArr] = useState([]);
  const [correctQuestionArr, setCorrectQuestionArr] = useState([]);
  const [collectSelectedAns, setCollectSelectedAns] = useState([]);
  const [result, setResult] = useState(0);
  const [finished, setFinished] = useState(false);
  const [opacity, setOpacity] = useState("opacity-100");
  const [quizTime, setQuizTime] = useState();

  const getQuestion = (questions, index) => {
    if (questions) {
      return questions[index];
    }
  };

  useEffect(() => {
    setQuiz(quizInfo?.edges[0]?.node);
    setQuestions(quizInfo?.edges[0]?.node?.questions);
    setQuizTime(quizInfo?.edges[0]?.node?.time * 60000);
  }, [quizInfo]);

  useEffect(() => {
    setOpacity("opacity-100");
  }, [index]);

  const question = getQuestion(questions, index);

  const hasPrev = () => {
    return index > 0;
  };

  const hasNext = useCallback(() => {
    return index < quiz?.questions.length - 1;
  }, [index, quiz]);

  const nextQuestion = () => {
    setTimeout(() => {
      setOpacity("opacity-0");
    }, 500);

    setTimeout(() => {
      if (!hasNext()) {
        finishQuiz();
      } else {
        setIndex(index + 1);
      }
    }, 800);
  };

  const isCorrectlyAnswered = () => {
    return correctAnswers.has(index);
  };

  const prevQuestion = () => {
    setTimeout(() => {
      setOpacity("opacity-0");
    }, 500);

    setTimeout(() => {
      if (index !== 0) {
        setIndex(index - 1);
      }
    }, 800);
  };

  const finishQuiz = useCallback(() => {
    setQuizTime(0);
    setFinished(true);
  }, []);

  const checkOption = (e, option, question) => {
    setCollectSelectedAns((prevSelectedValues) => [
      ...prevSelectedValues,
      e.target.value,
    ]);
    if (option.isCorrect) {
      setCorrectAnswerArr([...correctAnswerArr, `${option.id}`]);
    }
    if (option.isCorrect && !isCorrectlyAnswered()) {
      correctAnswers.add(index);
      setCorrectQuestionArr([...correctQuestionArr, question.id]);
    } else if (!option.isCorrect && isCorrectlyAnswered()) {
      correctAnswers.delete(index);
      setCorrectAnswers(correctAnswers);
    }
    setSelectedRadioBtn(e.target.value);
  };

  const isRadioSelected = (value) => {
    return selectedRadioBtn === value;
  };

  const handleCorrectAns = (option) => {
    setCorrectAnswerArr([...correctAnswerArr, option.id]);
  };

  useEffect(() => {
    if (finished) {
      setResult(
        Math.floor((100 / quiz?.questions?.length) * correctAnswers?.size)
      );
    }
  }, [finished, correctAnswers?.size, quiz?.questions?.length]);

  return (
    <>
      <Head>
        <title>{quiz?.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={quiz?.description} />
        <meta
          name="keywords"
          content="biofidelicX quizzard, biofidelicX academy"
        />
        <meta name="author" content="dynamic text" />
        <meta
          property="og:url"
          content={`https://biofidelicx-quizzard.vercel.app/post/dynamic-text`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="dynamic text" />
        <meta property="og:description" content="dynamic text" />
        <meta property="og:image" content="dynamic text" />
      </Head>
      <Header
        title={quiz?.title}
        subText={`${questions?.length} question`}
        imageUrl={quiz?.image?.url}
        color={quiz?.category?.categoryColor?.hex}
      />
      <div className="mx-auto px-2">
        <div
          className="pb-0 page-details"
          style={{
            borderTop: `3px solid ${quiz?.category?.categoryColor?.hex}`,
          }}
        >
          <div className="page-shadow !top-[calc(4rem_-_3px)]"></div>
          <div className="z-50 bg-white-500">
            {!finished ? (
              <>
                {quizTime ? (
                  <Timer quizTime={quizTime} finishQuiz={finishQuiz} />
                ) : null}
                <div className={`${opacity} transition-opacity duration-300`}>
                  <Question questionText={question?.questionText} />
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-3 mt-3`}>
                    {question?.answerOptions.map((option) => (
                      <Checkbox
                        key={option.id}
                        value={option.id}
                        handleRadioClick={(e) =>
                          checkOption(e, option, question)
                        }
                        isRadioSelected={isRadioSelected}
                        text={option.answerText}
                        name={question.id}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-end gap-2 sticky bottom-0 bg-white-500 py-4">
                  {hasPrev() ? (
                    <button
                      onClick={prevQuestion}
                      className="btn-outline font-t text-xs font-bold tracking-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
                      </svg>
                      Prev
                    </button>
                  ) : (
                    <button
                      className="btn-outline cursor-not-allowed opacity-50 font-t text-xs font-bold tracking-sm"
                      onClick={(e) => e.preventDefault()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
                      </svg>
                      Prev
                    </button>
                  )}
                  <div className="grow bg-gray-200 h-2.5 transition-all">
                    <div
                      className="bg-midnight-600 h-2.5"
                      style={{
                        width: `${
                          ((index + 1) * 100) / quiz?.questions.length
                        }%`,
                      }}
                    ></div>
                  </div>
                  {hasNext() ? (
                    <button
                      onClick={nextQuestion}
                      className="btn-outline inline-block font-t text-xs font-bold tracking-sm"
                    >
                      Next
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                      </svg>
                    </button>
                  ) : (
                    <button
                      className="btn-outline font-t text-xs font-bold tracking-sm"
                      onClick={finishQuiz}
                    >
                      Submit
                    </button>
                  )}
                </div>
              </>
            ) : (
              <>
                <h3 className="text-center m-auto mb-4 w-3/4 max-w-xl font-h text-2xl font-semibold sm:text-3xl md:text-4xl">
                  Quiz Result
                </h3>
                <div className="p-3 pt-0 flex flex-col items-center mb-5">
                  <div className="relative h-20 w-20 md:h-28 md:w-28 lg:h-36 lg:w-36">
                    {result >= 80 ? (
                      <Image
                        src="/great.svg"
                        alt="great icon"
                        layout="fill"
                        priority={true}
                      />
                    ) : result >= 50 ? (
                      <Image
                        src="/good.svg"
                        alt="good icon"
                        layout="fill"
                        priority={true}
                      />
                    ) : result >= 33 ? (
                      <Image
                        src="/pass.svg"
                        alt="pass icon"
                        layout="fill"
                        priority={true}
                      />
                    ) : (
                      <Image
                        src="/fail.svg"
                        alt="fail icon"
                        layout="fill"
                        priority={true}
                      />
                    )}
                  </div>
                  <span className="text-3xl font-light font-t md:text-4xl lg:text-5xl">
                    {result || 0} / 100
                  </span>
                  <p
                    className={`text-center text-2xl md:text-3xl mt-4 font-bold font-h tracking-sm ${
                      result < 33 ? "text-rose-500" : "text-midnight-500"
                    }`}
                  >
                    {result >= 80
                      ? "Great"
                      : result >= 50
                      ? "Good"
                      : result >= 33
                      ? "Passed"
                      : "Failed"}
                  </p>
                  <p className="text-center text-lg md:text-xl">
                    {result >= 80
                      ? "You have immense potential to create wonders in life! Wishing you the very best for all your upcoming endeavors!"
                      : result >= 50
                      ? "You are good but you need to be more serious for doing great in future."
                      : result >= 33
                      ? "You passed but you need hard work for getting a good result in future."
                      : "Never give up. Failure is a necessary component of success. Consider failure as an opportunity to perform better than before."}
                  </p>
                </div>
                <div className="flex flex-col gap-6 md:gap-7 lg:gap-8">
                  {quiz.questions.map((question) => (
                    <div key={question.id}>
                      <Question
                        questionText={question.questionText}
                        correctQuestion={correctQuestionArr}
                        id={question.id}
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                        {question.answerOptions.map((option) => (
                          <ResultCheckbox
                            key={option.id}
                            value={option.id}
                            text={option.answerText}
                            correctAnsArr={correctAnswerArr}
                            correctAns={option.isCorrect}
                            name={question.id}
                            selectedAns={collectSelectedAns}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizPage;
