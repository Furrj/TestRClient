import { useRef, useState } from "react";

import Questions from "../components/Questions";

const TestBox = () => {
  const [startedQuiz, setStartedQuiz] = useState(false);
  const [questions, setQuestions] = useState([]);

  const lowerRangeRef = useRef();
  const upperRangeRef = useRef();

  const toggleStartedQuiz = () => {
    setStartedQuiz(startedQuiz ? false : true);
  };

  const startQuiz = (e) => {
    e.preventDefault();

    const lower = parseInt(lowerRangeRef.current.value);
    const upper = parseInt(upperRangeRef.current.value);

    generateQuestions(lower, upper);
    toggleStartedQuiz();
  };

  const generateQuestions = (min, max) => {
    const questionList = [];

    for (let i = 1; i <= 10; i++) {
      const param1 = (Math.floor(Math.random() * (max - min + 1))) + min;
      const param2 = (Math.floor(Math.random() * (max - min + 1))) + min;

      const question = {
        id: `question${i}`,
        param1 ,
        param2
      };

      questionList.push(question);
    }

    setQuestions(questionList);
  };

  return (
    <div className="testBox">
      Select Input:{" "}
      <input ref={lowerRangeRef} type="number" name="lowerRange" /> to{" "}
      <input ref={upperRangeRef} type="number" name="upperRange" />
      <br />
      <button onClick={startQuiz} className="mt-3">
        Start
      </button>
      {startedQuiz && <Questions questions={questions} />}
    </div>
  );
};

export default TestBox;
