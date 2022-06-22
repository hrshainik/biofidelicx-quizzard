import Head from "next/head";
import { Answer, Header, Question } from "../../../components";

const Quiz = () => {
  return (
    <>
      <Head>
        <title>Quiz</title>
      </Head>
      <Header />
      <div className="container	mx-auto -mt-10">
        <Question />
        <Answer />
      </div>
    </>
  );
};

export default Quiz;
