import React, { useState } from 'react';
import Question from './Question';

const questions = [
  { id: 1, question: "What's the capital of France?", options: ["Paris", "London", "Rome", "Madrid"], correctAnswer: "Paris" },
  { id: 2, question: "What is the result of 3 + 5?", options: ["5", "8", "10", "15"], correctAnswer: "8" },
  { id: 3, question: "Which language is used for web development?", options: ["Python", "JavaScript", "C#", "C++"], correctAnswer: "JavaScript" }
];

const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) score++;
    });
    return score;
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Take the Quiz</h2>
      {questions.map((q) => (
        <Question
          key={q.id}
          data={q}
          selectedAnswer={answers[q.id]}
          onAnswerChange={handleAnswerChange}
        />
      ))}
      {!submitted ? (
        <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      ) : (
        <div>
          <h4>Results</h4>
          {questions.map((q) => (
            <div key={q.id} className="mb-2">
              <p>
                {q.question} - Your answer: {answers[q.id] || 'Not answered'}
                <br />
                Correct answer: {q.correctAnswer}
                <br />
                <span className={answers[q.id] === q.correctAnswer ? 'text-success' : 'text-danger'}>
                  {answers[q.id] === q.correctAnswer ? 'Correct!' : 'Wrong!'}
                </span>
              </p>
            </div>
          ))}
          <h5>Your Score: {calculateScore()} / {questions.length}</h5>
        </div>
      )}
    </div>
  );
};

export default Quiz;