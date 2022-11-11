import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import {
  Checkbox,
  Header,
  Question,
  ResultCheckbox,
} from "../../../../components";
import { getCategories, getQuiz, getQuizzes } from "../../../../services";

export async function getStaticProps({ params }) {
  const quizInfo = await getQuiz(params.quizId);

  return {
    props: {
      quizInfo,
    },
  };
}

export async function getStaticPaths() {
  const { data: quizzes } = await getQuizzes();
  const { data: categories } = await getCategories();

  return {
    paths: categories.map((category) => {
      return {
        params: {
          categoryId: `${category.id}`,
          quizId: `${category.attributes.quizzes.data[0].id}`,
        },
      };
    }),
    fallback: true,
  };
}

const getQuestion = (questions, index) => {
  if (questions) {
    return questions[index];
  }
};

const Quiz = ({ quizInfo }) => {
  const [quiz, setQuiz] = useState();
  const [questions, setQuestions] = useState();
  // const [question, setQuestion] = useState();
  const [index, setIndex] = useState(0);
  const [selectedRadioBtn, setSelectedRadioBtn] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(new Set());
  const [correctAnswerArr, setCorrectAnswerArr] = useState([]);
  const [collectSelectedAns, setCollectSelectedAns] = useState([]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setQuiz(quizInfo.data.attributes);
    setQuestions(quiz?.questions?.data);
  }, [quizInfo, quiz?.questions?.data, index]);

  const question = getQuestion(questions, index);

  const hasPrev = () => {
    return index > 0;
  };

  const hasNext = useCallback(() => {
    return index < quiz?.questions?.data.length - 1;
  }, [index, quiz]);

  const nextQuestion = () => {
    setTimeout(() => {
      if (!hasNext()) {
        finishQuiz();
      } else {
        setIndex(index + 1);
      }
    }, 600);
  };

  const isCorrectlyAnswered = () => {
    return correctAnswers.has(index);
  };

  const prevQuestion = () => {
    if (index !== 0) {
      setIndex(index - 1);
    }
  };

  const finishQuiz = () => {
    setFinished(true);
  };

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

  console.log(quiz);
  console.log(questions);
  console.log(question);

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
      <Header title={quiz?.title} />
      <div className="mx-auto mb-8 px-2">
        <div className="page-details">
          <div className="page-shadow"></div>
          <div className="z-50 bg-white-500">
            {!finished ? (
              <>
                <Question questionText={question?.attributes.questionText} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {question?.attributes.answerOptions.map((option) => (
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
                <div className="flex gap-x-4 mt-10 justify-center">
                  {hasPrev() ? (
                    <p className="px-2 button rounded border border-green-500">
                      <button onClick={prevQuestion}>Previous</button>
                    </p>
                  ) : null}

                  {hasNext() ? (
                    <p className="px-2 button rounded border border-green-500">
                      <button onClick={nextQuestion}>Next</button>
                    </p>
                  ) : null}
                </div>
              </>
            ) : (
              <>
                <h1 className="text-center text-3xl">
                  {correctAnswers.size * 10} / {quiz.questions.data.length * 10}
                </h1>
                <div>
                  {quiz.questions.data.map(({ attributes: question, id }) => (
                    <div key={id}>
                      <Question questionText={question.questionText} />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
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
                      <br />
                      <br />
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
