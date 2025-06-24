import React, { useState } from 'react';

export default function AddQuestionForm({ onAdd }) {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState(['', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      question.trim() !== '' &&
      answers.every(ans => ans.trim() !== '') &&
      answers.includes(correctAnswer)
    ) {
      onAdd({
        question,
        answers,
        correctAnswer
      });

      setQuestion('');
      setAnswers(['', '', '']);
      setCorrectAnswer('');
    } else {
      alert('Please fill all fields and select the correct answer from the options');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 30 }}>
      <h3>Add New Question</h3>
      <input
        type="text"
        placeholder="Enter question"
        value={question}
        onChange={e => setQuestion(e.target.value)}
        style={{ width: '100%', marginBottom: 10 }}
      />
      {answers.map((ans, idx) => (
        <div key={idx}>
          <input
            type="text"
            placeholder={`Answer option ${idx + 1}`}
            value={ans}
            onChange={e => handleAnswerChange(idx, e.target.value)}
            style={{ width: '80%', marginRight: 10 }}
          />
          <input
            type="radio"
            name="correctAnswer"
            value={ans}
            checked={correctAnswer === ans}
            onChange={() => setCorrectAnswer(ans)}
          /> Correct Answer
        </div>
      ))}
      <button type="submit" style={{ marginTop: 10 }}>Add Question</button>
    </form>
  );
}