const ResultCheckbox = ({
  value,
  name,
  text,
  correctAns,
  correctAnsArr,
  selectedAns,
  handleCorrectAns,
}) => {
  const wrongAns = selectedAns.filter(
    (ans) => correctAnsArr.indexOf(ans) == -1
  );

  return (
    <div className="checkbox" onLoad={handleCorrectAns}>
      <input
        type="radio"
        name={name}
        value={value}
        className="hidden pointer-events-none"
        id={value}
      />
      <label
        htmlFor={`${value}`}
        className={`${
          correctAns ? "bg-eastern-blue-500" : "bg-midnight-500"
        } text-white-500 h-full text-base p-3 cursor-auto flex items-center gap-3 ${
          wrongAns.includes(`${value}`)
            ? "bg-rose-500 crossed"
            : "bg-midnight-500"
        } ${correctAns ? "checked" : ""}`}
      >
        <svg
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-aquamarine-500 w-5 h-5"
          style={{ flex: "0 0 1.5rem" }}
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
            className="cross stroke-white-500"
          />
          <line
            x1="10"
            y1="10"
            x2="40"
            y2="40"
            strokeWidth="3.36"
            className="cross stroke-white-500"
          />
        </svg>
        <span style={{ flex: "1 1 auto", wordWrap: "break-word" }}>{text}</span>
      </label>
    </div>
  );
};

export default ResultCheckbox;
