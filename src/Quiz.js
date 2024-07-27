import React, { useState } from 'react';
import Question from './Questions';
import Result from './Result';
import { Container, Card } from './styles';
import styles from './style.css';

const questions = [
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'Berlin', isCorrect: false },
      { answerText: 'Madrid', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Lisbon', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is the CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    questionText: 'The iPhone was created by which company?',
    answerOptions: [
      { answerText: 'Apple', isCorrect: true },
      { answerText: 'Intel', isCorrect: false },
      { answerText: 'Amazon', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false },
    ],
  },
  {
    questionText: 'How many Harry Potter books are there?',
    answerOptions: [
      { answerText: '4', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '7', isCorrect: true },
      { answerText: '8', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the smallest planet in our solar system?',
    answerOptions: [
      { answerText: 'Earth', isCorrect: false },
      { answerText: 'Mars', isCorrect: false },
      { answerText: 'Mercury', isCorrect: true },
      { answerText: 'Venus', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the powerhouse of the cell?',
    answerOptions: [
      { answerText: 'Nucleus', isCorrect: false },
      { answerText: 'Ribosome', isCorrect: false },
      { answerText: 'Mitochondria', isCorrect: true },
      { answerText: 'Endoplasmic Reticulum', isCorrect: false },
    ],
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div id="Quiz" >
    <Container >
      <Card>
        {showScore ? (
          <Result score={score} totalQuestions={questions.length} />
        ) : (
          <Question
            question={questions[currentQuestion]}
            onAnswerOptionClick={handleAnswerOptionClick}
          />
        )}
      </Card>
    </Container>
    </div>
  );
};

export default Quiz;
