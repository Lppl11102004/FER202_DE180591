import React from 'react';

export default function Score({ score, total, onRetry }) {
  return (
    <div>
      <h2>Quiz Ended</h2>
      <p>Your Score: {score} / {total}</p>
      <button onClick={onRetry}>Try Again</button>
    </div>
  );
}