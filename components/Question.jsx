const Question = ({ questionText }) => {
  return (
    <div className="p-6 bg-white-500 border border-aquamarine-500">
      <h3 className="text-2xl font-bold text-center">{questionText}</h3>
    </div>
  );
};

export default Question;
