import React from 'react';
import { Button } from './styles';

const Result = ({ score, totalQuestions }) => {
  return (
    <div>
      <h2>Your Score</h2>
      <p>
        {score} out of {totalQuestions}
      </p>
      <Button onClick={() => window.location.reload()}>Retake Quiz</Button>
    </div>
  );
};

export default Result;
