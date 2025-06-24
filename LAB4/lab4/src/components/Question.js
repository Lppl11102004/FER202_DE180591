import React, { useState } from 'react';

export default function Question({ question, onAnswer, isLastQuestion  }) {
  const [localAnswer, setLocalAnswer] = useState(null); // người dùng chọn
  const [showResult, setShowResult] = useState(false);  // có hiển thị đúng/sai chưa
  const [disabled, setDisabled] = useState(false);      // khóa input sau khi chọn

  const handleChange = (e) => {
    if (!disabled) {
      setLocalAnswer(e.target.value);
    }
  };

  const handleNext = () => {
    if (localAnswer === null) {
      alert('Please select an answer before continuing.');
      return;
    }

    setShowResult(true);
    setDisabled(true);

    // Chờ 2 giây rồi chuyển sang câu hỏi tiếp theo
    setTimeout(() => {
      onAnswer(localAnswer); // Gửi kết quả lên QuizApp
      setLocalAnswer(null);
      setShowResult(false);
      setDisabled(false);
    }, 1000);
  };

  return (
    <div>
      <h2>{question.question}</h2>
      <form>
        {question.answers.map((option, idx) => {
          return (
            <label
              key={idx}
              style={{
                display: 'block',
                marginBottom: 10,
                cursor: disabled ? 'default' : 'pointer'
              }}
            >
              <input
                type="radio"
                name="answer"
                value={option}
                checked={localAnswer === option}
                onChange={handleChange}
                disabled={disabled}
                style={{ marginRight: 8 }}
              />
              {option}
            </label>
          );
        })}
      </form>

      <button
        onClick={handleNext}
        disabled={disabled}
        style={{ marginTop: 10 }}
      >
        {isLastQuestion  ? 'Finish' : 'Next'}
      </button>

      {showResult && (
        <p style={{ marginTop: 15 }}>
          {localAnswer === question.correctAnswer
            ? 'Correct answer! 🎉'
            : 'Incorrect answer. 😞'}
        </p>
      )}
    </div>
  );
}