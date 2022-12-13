const ResultCheckbox = ({
  value,
  name,
  handleRadioClick,
  isRadioSelected,
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
        } text-white-500 text-base p-3 cursor-auto flex items-center gap-3 ${
          wrongAns.includes(`${value}`) ? "bg-rose-500" : "bg-midnight-500"
        } ${correctAns ? "reverse" : ""}`}
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
            className="box"
          />
          <path
            d="M9.46674 27.4L18.4667 36.4L41.1334 13.7333"
            strokeWidth="3.36"
            className="check"
          />
        </svg>
        <span style={{ flex: "1 1 auto", wordWrap: "break-word" }}>{text}</span>
      </label>
    </div>
  );
};

export default ResultCheckbox;
