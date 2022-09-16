import { useState, useEffect } from "react";

const Question = ({ question, setQuestionNumber, questionNumber }) => {
  const [correctAnswer, setCorrectAnswer] = useState();

  const handleClick = (questionNumber) => {
    if (question.answerOptions[questionNumber].isCorrect) {
      setCorrectAnswer(true);
    } else {
      setCorrectAnswer(false);
    }
  };

  useEffect(() => {
    console.log(correctAnswer);
    console.log(questionNumber);
  }, [correctAnswer, questionNumber]);

  const answerButtons = () => {
    let answerButtonsArray = [];
    question.answerOptions.forEach((element, index) => {
      answerButtonsArray.push(
        <button className="btn btn-primary" key={index}>
          {element.answerText}
        </button>
      );
    });
    return answerButtonsArray;
  };

  return (
    <div>
      <h1>{question.questionText}</h1>
      {answerButtons()}
    </div>
  );
};

export default Question;
