import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const Question = ({ question, setQuestionNumber, questionNumber }) => {
  const [correctAnswer, setCorrectAnswer] = useState();

  const handleClick = (element, e) => {
    if (element.isCorrect) {
      setCorrectAnswer(true);
      e.target.className = "btn btn-success";
    } else {
      setCorrectAnswer(false);
      e.target.className = "btn btn-danger";
    }
  };

  useEffect(() => {
    console.log(correctAnswer);
    console.log(questionNumber);
  }, [correctAnswer, questionNumber]);

  // const answerButtons = () => {
  //   let answerButtonsArray = [];
  //   question.answerOptions.forEach((element, index) => {
  //     answerButtonsArray.push(
  //       <button
  //         onClick={(e) => {
  //           handleClick(element, e);
  //         }}
  //         className="btn btn-primary"
  //         key={index}
  //       >
  //         {element.answerText}
  //       </button>
  //     );
  //   });
  //   return answerButtonsArray;
  // };

  // const answerButtons = () => {
  //   question.answerOptions.map((element) => <button>{"ben"}</button>);
  // };

  return (
    <div className="mx-auto">
      <h1>{question.questionText}</h1>
      {question.answerOptions.map((element, index) => (
        <button
          className="btn btn-primary"
          key={index}
          onClick={(e) => {
            e.persist();
            if (element.isCorrect) {
              setCorrectAnswer(true);
              e.target.className = "btn btn-success";
            } else {
              setCorrectAnswer(false);
              e.target.className = "btn btn-danger";
            }
          }}
        >
          {element.answerText}
        </button>
      ))}
      <span>
        {" "}
        <button
          className="btn btn-primary"
          onClick={() => {
            if (correctAnswer === true || correctAnswer === false) {
              setQuestionNumber((questionNumber += 1));
            }
          }}
        >
          Next Question
        </button>
      </span>
    </div>
  );
};

export default Question;
