import React from "react";
import Countdown, { zeroPad } from "react-countdown";

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <span></span>;
  } else {
    return (
      <span>
        {zeroPad(minutes)}:{zeroPad(seconds)}
      </span>
    );
  }
};

const Timer = ({ quizTime, finishQuiz }) => {
  return (
    <>
      <Countdown
        date={Date.now() + quizTime}
        onComplete={finishQuiz}
        renderer={renderer}
      />
    </>
  );
};

export default React.memo(Timer);
