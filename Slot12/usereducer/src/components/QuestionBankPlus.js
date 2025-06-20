import React, { useReducer, useEffect } from "react";
import { Button, Container, Card, ProgressBar } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra"
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars"
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
      answer: "Pacific Ocean"
    }
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
  feedback: null,
  timeLeft: 10,
  highScore: Number(localStorage.getItem("highScore")) || 0
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload };
    case "NEXT_QUESTION":
      const isCorrect = state.selectedOption === state.questions[state.currentQuestion].answer;
      const newScore = isCorrect ? state.score + 1 : state.score;
      return {
        ...state,
        score: newScore,
        feedback: null,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        showScore: state.currentQuestion + 1 === state.questions.length,
        timeLeft: 10
      };
    case "RESTART_QUIZ":
      return { ...initialState, highScore: state.highScore };
    case "SET_FEEDBACK":
      return { ...state, feedback: action.payload };
    case "TICK":
      return { ...state, timeLeft: state.timeLeft - 1 };
    case "SET_HIGHSCORE":
      return { ...state, highScore: action.payload };
    default:
      return state;
  }
}

function QuestionBankPlus() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { questions, currentQuestion, selectedOption, score, showScore, feedback, timeLeft, highScore } = state;

  useEffect(() => {
    if (showScore) {
      const newHighScore = Math.max(score, highScore);
      if (newHighScore !== highScore) {
        localStorage.setItem("highScore", newHighScore);
        dispatch({ type: "SET_HIGHSCORE", payload: newHighScore });
      }
    }
  }, [showScore]);

  useEffect(() => {
    if (timeLeft <= 0 && !showScore) {
      dispatch({ type: "SET_FEEDBACK", payload: `⏰ Time's up! Correct: ${questions[currentQuestion].answer}` });
      setTimeout(() => dispatch({ type: "NEXT_QUESTION" }), 2000);
      return;
    }
    const timer = setInterval(() => dispatch({ type: "TICK" }), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, showScore, currentQuestion]);

  const handleOptionSelect = (option) => {
    dispatch({ type: "SELECT_OPTION", payload: option });
    const isCorrect = option === questions[currentQuestion].answer;
    dispatch({
      type: "SET_FEEDBACK",
      payload: isCorrect ? "✅ Correct! 🎉" : `❌ Incorrect! Correct: ${questions[currentQuestion].answer}`
    });
    setTimeout(() => dispatch({ type: "NEXT_QUESTION" }), 2000);
  };

  const handleRestart = () => dispatch({ type: "RESTART_QUIZ" });

  const progress = Math.round(((currentQuestion + (showScore ? 1 : 0)) / questions.length) * 100);

  return (
    <Container className="mt-4">
      <Card className="p-4">
        {showScore ? (
          <div className="text-center">
            <h2>Your Score: {score} / {questions.length}</h2>
            <h4>🏆 High Score: {highScore}</h4>
            <Button onClick={handleRestart}>Restart</Button>
          </div>
        ) : (
          <>
            <div className="d-flex justify-content-between align-items-center">
              <h5>Question {currentQuestion + 1} / {questions.length}</h5>
              <span style={{ color: timeLeft <= 5 ? "red" : "black" }}>⏱ Time left: {timeLeft}s</span>
            </div>
            <ProgressBar now={progress} className="mb-3" label={`${progress}%`} />
            <h4>{questions[currentQuestion].question}</h4>
            <div className="mt-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedOption === option ? "success" : "outline-secondary"}
                  className="m-2"
                  onClick={() => handleOptionSelect(option)}
                  disabled={!!feedback}
                >
                  {option}
                </Button>
              ))}
            </div>
            {feedback && (
              <div className="mt-3">
                {feedback.includes("Correct") ? <FaCheckCircle color="green" /> : <FaTimesCircle color="red" />} {feedback}
              </div>
            )}
          </>
        )}
      </Card>
    </Container>
  );
}

export default QuestionBankPlus;
