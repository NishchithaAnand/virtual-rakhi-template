import { useState } from "react";

import QuestionSection from "./QuestionSection";

import leftEnvelope from "../assets/left.png";
import rightEnvelope from "../assets/right.png";

import stars from "../assets/stars.png";
import flight from "../assets/flight.png";
import leftFlower from "../assets/leftflower.png";
import rightFlower from "../assets/rightflower.png";
import photo1 from "../assets/photo1.png";

function EnvelopeIntro() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
  };

  return (
    <div className="rakhi-site">
      <main className={`home-screen ${isOpen ? "home-screen--visible" : ""}`}>
        <div className="main-screen">
          {/* TOP RIGHT FLOWER */}
          <img
            src={rightFlower}
            alt=""
            className="main-decoration main-flower-top"
            draggable={false}
          />

          {/* BOTTOM LEFT FLOWER */}
          <img
            src={leftFlower}
            alt=""
            className="main-decoration main-flower-bottom"
            draggable={false}
          />

          {/* PAPER PLANE */}
          <img
            src={flight}
            alt=""
            className="main-decoration main-flight"
            draggable={false}
          />

          {/* STARS */}
          <img
            src={stars}
            alt=""
            className="main-decoration main-stars"
            draggable={false}
          />

          <div className="photo-hanging">
            <img src={photo1} alt="" className="main-photo" draggable={false} />
          </div>

          <div className="main-message">
            <p className="main-message-small">Wait... bro!</p>

            <h1>
              There's something
              <br />
              for you.
            </h1>
          </div>

          <div className="scroll-indicator">
            <span>SCROLL DOWN</span>

            <div className="scroll-arrow">↓</div>
          </div>
        </div>

        <QuestionSection />
      </main>

      <section
        className={`envelope-intro ${isOpen ? "envelope-intro--opened" : ""}`}
        aria-label="Rakhi surprise envelope"
      >
        {/* LEFT ENVELOPE */}

        <button
          type="button"
          className="envelope-side envelope-left"
          onClick={handleOpen}
          aria-label="Open envelope"
        >
          <img src={leftEnvelope} alt="" draggable={false} />
        </button>

        {/* RIGHT ENVELOPE */}

        <button
          type="button"
          className="envelope-side envelope-right"
          onClick={handleOpen}
          aria-label="Open envelope"
        >
          <img src={rightEnvelope} alt="" draggable={false} />
        </button>
      </section>
    </div>
  );
}

export default EnvelopeIntro;
