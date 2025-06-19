import React from 'react';

function Score({ score, total, onRetry }) {
  return (
    <div>
      <h2>Quiz Ended</h2>
      <p>Your Score: {score} / {total}</p>
      <button onClick={onRetry}>Try Again</button>
    </div>
  );
}

export default Score;