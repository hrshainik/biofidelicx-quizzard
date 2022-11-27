import { useState } from "react";
import Checkbox from "./Checkbox";

const Answer = () => {
  const [selectedRadioBtn, setSelectedRadioBtn] = useState(false);

  const isRadioSelected = (value) => {
    return selectedRadioBtn === value;
  };

  const handleRadioClick = (e) => setSelectedRadioBtn(e.target.value);

  return (
    <div className="">
      <Checkbox
        value="C++"
        handleRadioClick={handleRadioClick}
        isRadioSelected={isRadioSelected}
        text="C++"
        name="language"
      />
      <Checkbox
        value="Java"
        handleRadioClick={handleRadioClick}
        isRadioSelected={isRadioSelected}
        text="Java"
        name="language"
      />
      <Checkbox
        value="JS"
        handleRadioClick={handleRadioClick}
        isRadioSelected={isRadioSelected}
        text="JavaScript"
        name="language"
      />
      <Checkbox
        value="Python"
        handleRadioClick={handleRadioClick}
        isRadioSelected={isRadioSelected}
        text="Python"
        name="language"
      />
    </div>
  );
};

export default Answer;
