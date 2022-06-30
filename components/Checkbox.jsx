const Checkbox = ({ value, name, handleRadioClick, isRadioSelected, text }) => {
  return (
    <div className="checkbox">
      <input
        type="radio"
        name={name}
        value={value}
        className="hidden pointer-events-none"
        id={value}
        checked={isRadioSelected(`${value}`)}
        onChange={handleRadioClick}
      />
      <label
        htmlFor={`${value}`}
        className={`bg-midnight-500 text-white-500 text-base p-3 cursor-pointer flex items-center gap-5 ${
          isRadioSelected(`${value}`) ? "reverse" : ""
        }`}
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6"
        >
          <rect
            x="1.26"
            y="1.26"
            width="47.48"
            height="47.48"
            strokeWidth="2.52"
            className="box"
          />
          <path
            d="M9.46674 27.4L18.4667 36.4L41.1334 13.7333"
            strokeWidth="3.36"
            className="check"
          />
        </svg>
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
