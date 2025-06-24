import React, { useState } from 'react';
import { AnswerContext } from './AnswerContext';
import Question from './Question';
import Score from './Score';
import AddQuestionForm from './AddQuestionForm';

export const quizData = [
  {
    question: 'What is ReactJS?',
    answers: [
      'A JavaScript library for building user interfaces',
      'A programming language',
      'A database management system'
    ],
    correctAnswer: 'A JavaScript library for building user interfaces'
  },
  {
    question: 'What is JSX?',
    answers: [
      'A programming language',
      'A file format',
      'A syntax extension for JavaScript'
    ],
    correctAnswer: 'A syntax extension for JavaScript'
  }
];

export default function QuizApp() {
  const [questions, setQuestions] = useState(quizData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizEnd, setQuizEnd] = useState(false);

  const addQuestion = (newQuestion) => {
    setQuestions(prev => [...prev, newQuestion]);
  };

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);

    if (answer === questions[currentIndex].correctAnswer) {
      setScore(prev => prev + 1);
    }

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setQuizEnd(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setQuizEnd(false);
  };

  return (
    <AnswerContext.Provider value={{ selectedAnswer }}>
      <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
        <h1>Quiz Application (Hooks)</h1>

        <AddQuestionForm onAdd={addQuestion} />

        {!quizEnd ? (
          <Question
            question={questions[currentIndex]}
            onAnswer={handleAnswer}
            isLastQuestion={currentIndex === questions.length - 1}
          />
        ) : (
          <Score score={score} total={questions.length} onRetry={resetQuiz} />
        )}
      </div>
    </AnswerContext.Provider>
  );
}