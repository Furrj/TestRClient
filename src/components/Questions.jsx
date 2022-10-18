import { useState } from "react";

import Question from "./Question";

const Questions = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questionList = [];

  const changeCurrentQuestion = () => {
    if (currentQuestion < questionList.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      console.log("out of questions");
    }
  };

  for (let q of props.questions) {
    questionList.push(
      <Question
        key={q.id}
        question={q}
        submit={changeCurrentQuestion}
        addToScore={props.addToScore}
      />
    );
  }

  return <div className="questionsCont">{questionList[currentQuestion]}</div>;
};

export default Questions;
