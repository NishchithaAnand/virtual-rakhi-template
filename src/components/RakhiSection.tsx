import { useEffect, useRef, useState } from "react";

import rakhiVideo from "../assets/rakhi-video.mp4";

import "./RakhiSection.css";

function RakhiSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="rakhi-section" className="rakhi-section">

      <video
        ref={videoRef}
        className="rakhi-video"
        src={rakhiVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {showText && (
        <div className="rakhi-final-content">
          <p className="rakhi-final-eyebrow">Your Rakhi is done…</p>

          <h2>
            Now where’s my gift?
            <br />
            👀📦
          </h2>
        </div>
      )}
    </section>
  );
}

export default RakhiSection;
