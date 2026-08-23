import { useState } from "react";

import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";
import photo4 from "../assets/photo4.png";

import leftFlower from "../assets/leftflower.png";
import rightFlower from "../assets/rightflower.png";
import flight from "../assets/flight.png";
import stars from "../assets/stars.png";

import LetterSection from "./LetterSection";
import RakhiSection from "./RakhiSection";

import "./QuestionSection.css";

function QuestionSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answered, setAnswered] = useState(false);

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const [showLetter, setShowLetter] = useState(false);

  const questions = [
    {
      question: "What did you annoy your sister with the most as a kid?",

      options: [
        "Stealing snacks",
        "Taking things",
        "Fighting with sister",
        "Literally everything",
      ],

      answer: "Fighting with sister",

      photo: photo2,
    },

    {
      question: "Did dad really used to hit when you troubles your sister?",

      options: ["yes", "no"],

      answer: "no",

      photo: photo3,
    },

    {
      question: "What do you think your sister miss the most?",

      options: [
        "Childhood fights",
        "Family time",
        "brothers annoying face",
        "All of the above",
      ],

      answer: "All of the above",

      photo: photo4,
    },
  ];

  const question = questions[currentQuestion];

  const handleAnswer = (option: string) => {
    if (answered) return;

    setSelectedAnswer(option);

    if (option !== question.answer) {
      setTimeout(() => {
        setSelectedAnswer(null);
      }, 700);

      return;
    }

    setAnswered(true);
  };

  const handleNext = () => {
    if (!answered) return;

    if (currentQuestion === questions.length - 1) {
      setShowLetter(true);

      return;
    }

    setCurrentQuestion((prev) => prev + 1);

    setSelectedAnswer(null);

    setAnswered(false);
  };

  if (showLetter) {
    return (
      <>
        <LetterSection />
        <RakhiSection />
      </>
    );
  }

  return (
    <section className="question-section">
      {/* TOP RIGHT FLOWER */}

      <img
        src={rightFlower}
        alt=""
        className="question-decoration question-flower-top"
        draggable={false}
      />

      {/* BOTTOM LEFT FLOWER */}

      <img
        src={leftFlower}
        alt=""
        className="question-decoration question-flower-bottom"
        draggable={false}
      />

      {/* PAPER PLANE */}

      <img
        src={flight}
        alt=""
        className="question-decoration question-flight"
        draggable={false}
      />

      {/* STARS */}

      <img
        src={stars}
        alt=""
        className="question-decoration question-stars"
        draggable={false}
      />

      <div key={currentQuestion} className="question-content">
        <div className="question-photo-area">
          <div
            className={`question-photo-wrapper ${
              answered ? "question-photo-wrapper--revealed" : ""
            }`}
          >
            <img
              src={question.photo}
              alt=""
              className="question-photo"
              draggable={false}
            />
          </div>

          {/* PHOTO HINT */}

          {!answered && (
            <p className="photo-hint">Answer correctly to reveal this memory</p>
          )}
        </div>

        <div className="question-copy">
          {/* QUESTION NUMBER */}

          <p className="question-number">
            QUESTION {currentQuestion + 1}
            {" / "}
            {questions.length}
          </p>

          {/* QUESTION */}

          <h2 className="question-text">{question.question}</h2>

          <div className="answers">
            {question.options.map((option) => {
              const isSelected = selectedAnswer === option;

              const isCorrect = answered && option === question.answer;

              const isWrong = isSelected && option !== question.answer;

              return (
                <button
                  key={option}
                  type="button"
                  className={`answer-button ${isCorrect ? "correct" : ""} ${
                    isWrong ? "wrong" : ""
                  }`}
                  onClick={() => handleAnswer(option)}
                  disabled={answered}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {answered && (
            <button
              type="button"
              className="next-question-button"
              onClick={handleNext}
            >
              {currentQuestion === questions.length - 1
                ? "Open your letter →"
                : "Next question →"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default QuestionSection;
