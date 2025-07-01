import React from 'react';

function Question({ data, selectedAnswer, onAnswerChange }) {
  return (
    <div className="mb-4">
      <h5>{data.question}</h5>
      {data.options.map((opt, i) => (
        <div key={i}>
          <input
            type="radio"
            name={`question-${data.id}`}
            id={`option-${data.id}-${i}`}
            value={opt}
            checked={selectedAnswer === opt}
            onChange={() => onAnswerChange(data.id, opt)}
          />
          <label htmlFor={`option-${data.id}-${i}`} className="ms-2">
            {opt}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Question;