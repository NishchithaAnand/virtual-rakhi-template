import { useState } from "react";
import "./LetterSection.css";

function LetterSection() {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => {
    if (isOpening || isOpened) return;

    setIsOpening(true);

    setTimeout(() => {
      setIsOpened(true);
    }, 900);
  };

  const handleGoToRakhi = () => {
    const rakhiSection = document.getElementById("rakhi-section");

    if (rakhiSection) {
      rakhiSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="letter-section">
      <div className="letter-glow letter-glow-one" />
      <div className="letter-glow letter-glow-two" />

      <div className="letter-particle particle-one">✦</div>
      <div className="letter-particle particle-two">✧</div>
      <div className="letter-particle particle-three">•</div>
      <div className="letter-particle particle-four">✦</div>
      <div className="letter-particle particle-five">•</div>

      {!isOpened && (
        <div className="letter-intro">
          <p className="letter-intro-small">One last surprise...</p>

          <h1>
            A letter
            <br />
            for you.
          </h1>
        </div>
      )}

      <div
        className={`letter-scene ${isOpening ? "letter-scene--opening" : ""} ${
          isOpened ? "letter-scene--opened" : ""
        }`}
      >
        <div className="letter-paper">
          <div className="letter-paper-inner">
            <p className="letter-greeting">Dear bro,</p>

            <div className="letter-message">
              <p className="letter-line letter-line-one">
                We may have fought, annoyed each other,
              </p>

              <p className="letter-line letter-line-three">
                and driven each other crazy...
              </p>

              <p className="letter-line letter-line-four">
                Somehow, all those fights only brought us closer.
                <br />
              </p>

              <p className="letter-line letter-line-five">
                No matter how much we grow,
                <br />
                you'll always be my big brother.
              </p>
            </div>

            <div className="letter-ending">
              <p>Happy Raksha Bandhan ❤️</p>

              <span>With love,</span>

              <strong>Your lil Sister</strong>
            </div>
          </div>
        </div>

        <div className="envelope">
          {/* BACK */}

          <div className="envelope-back" />

          {/* LETTER SHADOW */}

          <div className="envelope-letter-shadow" />

          {/* FRONT POCKET */}

          <div className="envelope-front" />

          {/* FLAP */}

          <div className="envelope-flap">
            <div className="envelope-flap-inner" />
          </div>

          {/* SEAL */}

          <button
            type="button"
            className="envelope-seal"
            onClick={handleOpen}
            aria-label="Open your letter"
          >
            <span>♥</span>
          </button>
        </div>
      </div>

      {!isOpened && (
        <button
          type="button"
          className="open-letter-button"
          onClick={handleOpen}
        >
          <span>{isOpening ? "Opening..." : "Open your letter"}</span>

          {!isOpening && <span className="open-letter-arrow">→</span>}
        </button>
      )}

      {isOpened && (
        <button
          type="button"
          className="go-to-rakhi-button"
          onClick={handleGoToRakhi}
        >
          <span>Your Rakhi is waiting for you</span>

          <span className="go-to-rakhi-arrow">↓</span>
        </button>
      )}
    </section>
  );
}

export default LetterSection;
