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
        { answerText: "Washington", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Manchester", isCorrect: false },
        { answerText: "Lyon", isCorrect: false },
      ],
    },
  ]);
  const numberOfQuestions = questionList.length;

  // const questionDisplay = () => {
  //   let questionDisplayArray = [];
  //   questionList.forEach((question, index) => {
  //     questionDisplayArray.push(<Question question={question} key={index} />);
  //   });
  //   return questionDisplayArray;
  // };

  // const questionDisplay = (questionNumber) => {
  //   return (
  //     <div className="container">
  //       <div className="row justify-content-center align-items-center">
  //         <div className="col-12 d-flex justify-content-center">
  //           <Question
  //             question={questionList[questionNumber]}
  //             questionNumber={questionNumber}
  //             setQuestionNumber={setQuestionNumber}
  //           />
  //           {`Question ${questionNumber + 1} of ${numberOfQuestions}.`}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div>
      <Question
        question={questionList[questionNumber]}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
      />
    </div>
  );
};

export default Quiz;
