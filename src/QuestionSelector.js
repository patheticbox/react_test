import React, { useState } from 'react';
import './QuestionSelector.css'; 

const QuestionSelector = ({ testData, onQuestionsSelect }) => {
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  const handleQuestionToggle = (questionIndex) => {
    const updatedQuestions = [...selectedQuestions];
    updatedQuestions[questionIndex] = !updatedQuestions[questionIndex];
    setSelectedQuestions(updatedQuestions);
  };

  const handleStartTest = () => {
    const questionsToSend = testData.questions.filter((question, index) => selectedQuestions[index]);
    onQuestionsSelect(questionsToSend);
  };

  return (
    <div className="question-selector-container">
      <h2 className="question-selector-header">Choose question:</h2>
      {testData.questions.map((question, index) => (
        <div key={index} className="question-item">
          <input
            type="checkbox"
            checked={selectedQuestions[index] || false}
            onChange={() => handleQuestionToggle(index)}
            className="question-checkbox"
          />
          <label>{question.question}</label>
        </div>
      ))}
      <button onClick={handleStartTest} className="start-test-button">Start Quiz</button>
    </div>
  );
};

export default QuestionSelector;
