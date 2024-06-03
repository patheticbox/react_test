import React, { useState, useEffect, useRef } from 'react';
import QuestionSelector from './QuestionSelector';
import Test from './Test';

const testData = {
  testName: "Bakery Test",
  questions: [
    {
      question: "Which ingredient is essential for making bread rise?",
      answers: [
        {
          answer: "Yeast",
          isCorrect: true,
        },
        {
          answer: "Sugar",
          isCorrect: false,
        },
        {
          answer: "Salt",
          isCorrect: false,
        },
        {
          answer: "Butter",
          isCorrect: false,
        }
      ],
    },
    {
      question: "What is the main ingredient in croissants?",
      answers: [
        {
          answer: "Butter",
          isCorrect: true,
        },
        {
          answer: "Sugar",
          isCorrect: false,
        },
        {
          answer: "Flour",
          isCorrect: false,
        },
        {
          answer: "Eggs",
          isCorrect: false,
        }
      ],
    },
    {
      question: "What type of flour is typically used to make cakes?",
      answers: [
        {
          answer: "Cake flour",
          isCorrect: true,
        },
        {
          answer: "All-purpose flour",
          isCorrect: false,
        },
        {
          answer: "Whole wheat flour",
          isCorrect: false,
        },
        {
          answer: "Bread flour",
          isCorrect: false,
        }
      ],
    }
  ],
};

const App = () => {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const mountedRef = useRef(false);

  useEffect(() => {
    console.log("Component did mount or update");
    if (!mountedRef.current) {
      mountedRef.current = true;
      console.log("Component mounted");
    } else {
      console.log("Component updated");
    }
  }, [selectedQuestions, showResult]);

  const handleQuestionsSelect = (selectedQuestions) => {
    setSelectedQuestions(selectedQuestions);
    setShowResult(false);
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  return (
    <div className="App">
      {selectedQuestions.length === 0 ? (
        <QuestionSelector testData={testData} onQuestionsSelect={handleQuestionsSelect} />
      ) : (
        <Test selectedQuestions={selectedQuestions} testData={testData} onShowResult={handleShowResult} />
      )}
    </div>
  );
};

export default App;
