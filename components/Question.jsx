const Question = ({ questionText, correctQuestion, id }) => {
  return (
    <div
      className={`relative p-6 bg-white-500 border ${
        correctQuestion
          ? correctQuestion.includes(id)
            ? "border-aquamarine-500"
            : "border-rose-500"
          : "border-midnight-500"
      }`}
    >
      <div
        className={`absolute mt-1 mr-1 top-0 right-0 ${
          correctQuestion
            ? correctQuestion.includes(id)
              ? "checked"
              : "crossed"
            : "hidden"
        }`}
      >
        <svg
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
        >
          <rect
            x="1.26"
            y="1.26"
            width="47.48"
            height="47.48"
            strokeWidth="3"
            className="box stroke-aquamarine-500"
          />
          <path
            d="M9.46674 27.4L18.4667 36.4L41.1334 13.7333"
            strokeWidth="3.36"
            className="check stroke-aquamarine-500"
          />
          <line
            x1="10"
            y1="40"
            x2="40"
            y2="10"
            strokeWidth="3.36"
            className="cross stroke-rose-500"
          />
          <line
            x1="10"
            y1="10"
            x2="40"
            y2="40"
            strokeWidth="3.36"
            className="cross stroke-rose-500"
          />
        </svg>
      </div>
      <h3 className="text-2xl font-h text-center">{questionText}</h3>
    </div>
  );
};

export default Question;
