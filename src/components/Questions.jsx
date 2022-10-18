import { useState } from "react";

import Question from "./Question";

const Questions = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questionList = [];

  for (let q of props.questions) {
    questionList.push(<Question key={q.id} question={q} />);
  }

  return <div className="questionsCont">{questionList[currentQuestion]}</div>;
};

export default Questions;
