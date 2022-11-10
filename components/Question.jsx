const Question = ({ questionText }) => {
  return (
    <h3 className="p-6 text-2xl font-bold bg-white-500 text-center border border-aquamarine-500">
      {questionText}
    </h3>
  );
};

export default Question;
