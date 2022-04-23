import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Answers from "../components/Answers";
import Miniplayer from "../components/Miniplayer";
import ProgressBar from "../components/ProgressBar";
import useQuiz from "../hooks/useQuiz";

const Quiz = () => {
  const { id } = useParams();
  const { laoding, error, quiz } = useQuiz(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <Miniplayer />
    </>
  );
};

export default Quiz;
