import { useState, useEffect } from "react";
import Question from "./Question";

const Quiz = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questionList, setQuestionList] = useState([
    {
      questionText: "What is the capital of England?",
      answerOptions: [
        { answerText: "London", isCorrect: true },
        { answerText: "Paris", isCorrect: false },
        { answerText: "Milan", isCorrect: false },
        { answerText: "New York", isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Milan", isCorrect: false },
        { answerText: "New York", isCorrect: false },
      ],
    },
  ]);

  //   const questionDisplay = () => {
  //     let questionDisplayArray = [];
  //     questionList.forEach((question, index) => {
  //       questionDisplayArray.push(<Question question={question} key={index} />);
  //     });
  //     return questionDisplayArray;
  //   };

  const questionDisplay = (questionNumber) => {
    return (
      <Question
        question={questionList[questionNumber]}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
      />
    );
  };

  return <div>{questionDisplay(questionNumber)}</div>;
};

export default Quiz;
