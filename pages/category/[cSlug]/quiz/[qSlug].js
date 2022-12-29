import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  Checkbox,
  Header,
  Question,
  ResultCheckbox,
  Timer,
} from "../../../../components";
import { getCategories, getQuiz } from "../../../../services";
import { auth } from "../../../../services/firebase";

export async function getStaticProps({ params }) {
  const quizInfo = await getQuiz(params.qSlug);

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
    fallback: true,
  };
}

const Quiz = ({ quizInfo }) => {
  const [quiz, setQuiz] = useState();
  const [questions, setQuestions] = useState();
  const [index, setIndex] = useState(0);
  const [selectedRadioBtn, setSelectedRadioBtn] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(new Set());
  const [correctAnswerArr, setCorrectAnswerArr] = useState([]);
  const [collectSelectedAns, setCollectSelectedAns] = useState([]);
  const [finished, setFinished] = useState(false);
  const [opacity, setOpacity] = useState("opacity-100");
  const [quizTime, setQuizTime] = useState();
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/sign-up");
    }
  }, [user]);

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

  const checkOption = (e, option) => {
    setCollectSelectedAns((ans) => ans.concat(e.target.value));
    if (option.isCorrect) {
      setCorrectAnswerArr([...correctAnswerArr, `${option.id}`]);
    }
    if (option.isCorrect && !isCorrectlyAnswered()) {
      correctAnswers.add(index);
    } else if (!option.isCorrect && isCorrectlyAnswered()) {
      correctAnswers.delete(index);
      setCorrectAnswers(correctAnswers);
    }
    setSelectedRadioBtn(e.target.value);
    nextQuestion();
  };

  const isRadioSelected = (value) => {
    return selectedRadioBtn === value;
  };

  const handleCorrectAns = (option) => {
    setCorrectAnswerArr([...correctAnswerArr, option.id]);
  };

  return (
    <>
      <Head>
        <title>{quiz?.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="dynamic text" />
        <meta name="keywords" content="biofidelicX quiz, biofidelicX academy" />
        <meta name="author" content="dynamic text" />
        <meta
          property="og:url"
          content={`https://biofidelicx-quiz.vercel.app/post/dynamic-text`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="dynamic text" />
        <meta property="og:description" content="dynamic text" />
        <meta property="og:image" content="dynamic text" />
      </Head>
      <Header title={quiz?.title} subText={`${questions?.length} question`} />
      <div className="mx-auto px-2">
        <div className="pb-0 page-details">
          <div className="page-shadow"></div>
          <div className="z-50 bg-white-500">
            {quizTime && <Timer quizTime={quizTime} finishQuiz={finishQuiz} />}
            {!finished ? (
              <>
                <div className={`${opacity} transition-opacity duration-300`}>
                  <Question questionText={question?.questionText} />
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-3 mt-3`}>
                    {question?.answerOptions.map((option) => (
                      <Checkbox
                        key={option.id}
                        value={option.id}
                        handleRadioClick={(e) => checkOption(e, option)}
                        isRadioSelected={isRadioSelected}
                        text={option.answerText}
                        name={question.id}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-end gap-2 sticky bottom-0 bg-white-500 py-4">
                  {hasPrev() ? (
                    <button onClick={prevQuestion} className="btn-outline">
                      Prev
                    </button>
                  ) : (
                    <button
                      className="btn-outline cursor-not-allowed opacity-50"
                      onClick={(e) => e.preventDefault()}
                    >
                      Prev
                    </button>
                  )}
                  <div className="w-full bg-gray-200 h-2.5 dark:bg-gray-700 transition-all">
                    <div
                      className="bg-midnight-600 h-2.5"
                      style={{
                        width: `${(index * 100) / quiz?.questions.length}%`,
                      }}
                    ></div>
                  </div>
                  {hasNext() ? (
                    <button onClick={nextQuestion} className="btn-outline">
                      Next
                    </button>
                  ) : (
                    <button className="btn-outline" onClick={finishQuiz}>
                      Submit
                    </button>
                  )}
                </div>
              </>
            ) : (
              <>
                <h3 className="text-center font-h">Quiz Result</h3>
                <div className="p-3 flex flex-col items-center mb-5">
                  <span className="text-3xl font-h">
                    {correctAnswers.size * 10} / {quiz.questions.length * 10}
                  </span>
                  <p className="text-center text-xl font-semibold font-h">
                    Great
                  </p>
                  <p className="text-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Magni, repellat.
                  </p>
                </div>
                <div className="flex flex-col gap-6 md:gap-7 lg:gap-8">
                  {quiz.questions.map((question) => (
                    <div key={question.id}>
                      <Question questionText={question.questionText} />
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

export default Quiz;
