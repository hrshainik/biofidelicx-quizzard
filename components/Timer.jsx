import React from "react";
import Countdown, { zeroPad } from "react-countdown";

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <span className="hidden"></span>;
  } else {
    return (
      <span className="text-xl text-center font-h font-semibold">
        {zeroPad(minutes)}:{zeroPad(seconds)}
      </span>
    );
  }
};

const Timer = ({ quizTime, finishQuiz }) => {
  return (
    <div className="flex items-center justify-center mb-3 gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 26 26"
        width="26"
        height="26"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M17.618 5.968l1.453-1.453 1.414 1.414-1.453 1.453a9 9 0 1 1-1.414-1.414zM12 20a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM11 8h2v6h-2V8zM8 1h8v2H8V1z" />
      </svg>
      <Countdown
        date={Date.now() + quizTime}
        onComplete={finishQuiz}
        renderer={renderer}
      />
    </div>
  );
};

export default React.memo(Timer);
