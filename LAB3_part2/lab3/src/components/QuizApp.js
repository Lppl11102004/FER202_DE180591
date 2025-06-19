// src/Lab3/QuizApp.js
import React, { Component } from 'react';
import Question from './Question';
import Score from './Score';

class QuizApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          question: "What is the capital of France?",
          options: ["Paris", "London", "Berlin", "Madrid"],
          answer: "Paris"
        },
        {
          id: 2,
          question: "What is the largest planet in our solar system?",
          options: ["Jupiter", "Saturn", "Mars", "Earth"],
          answer: "Jupiter"
        }
      ],
      currentQuestion: 0,
      score: 0,
      quizEnd: false
    };
  }

  handleAnswer = (selectedOption) => {
    const { questions, currentQuestion, score } = this.state;
    const correct = questions[currentQuestion].answer === selectedOption;

    this.setState({
      score: correct ? score + 1 : score
    }, () => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        this.setState({ currentQuestion: nextQuestion });
      } else {
        this.setState({ quizEnd: true });
      }
    });
  };

  resetQuiz = () => {
    this.setState({
      currentQuestion: 0,
      score: 0,
      quizEnd: false
    });
  };

  render() {
    const { questions, currentQuestion, score, quizEnd } = this.state;

    return (
      <div>
        <h1>Quiz Application</h1>
        {!quizEnd ? (
          <Question
            question={questions[currentQuestion]}
            onAnswer={this.handleAnswer}
          />
        ) : (
          <Score score={score} total={questions.length} onRetry={this.resetQuiz} />
        )}
      </div>
    );
  }
}

export default QuizApp;