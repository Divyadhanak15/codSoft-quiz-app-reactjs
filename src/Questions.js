import React from 'react';
import { Button } from './styles';


const Question = ({ question, onAnswerOptionClick }) => {
  return (
    <div>
     
      <h2>{question.questionText}</h2>
      <div>
        {question.answerOptions.map((option, index) => (
          <Button key={index} onClick={() => onAnswerOptionClick(option.isCorrect)}>
            {option.answerText}
          </Button>
        
        ))}
      </div>
    </div>
  );
};

export default Question;
