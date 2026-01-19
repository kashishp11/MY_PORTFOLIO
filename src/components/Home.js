import { useEffect, useState } from "react";
import "../styles/Home.css";

function Home() {
  const skills = [
    "Frontend Developer",
    "Problem Solving Skill",
    "Data Structures with C++",
    "Designing and Development",
    "Database Management System",
    "Cloud Computing",
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [showResume, setShowResume] = useState(false);

  // rotate skills
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 2200);

    return () => clearInterval(interval);
  }, [paused, skills.length]);

  return (
    <>
      <section id="home" className="home">
        <div className="home-content">
          {/* LEFT CONTENT */}
          <div className="intro">
            <h1>
              Hi, I’m <span>Kashish Priya</span>
            </h1>

            <p className="static-text">
             Computer Science Student
            </p>

            {/* ROTATING SKILL */}
            <div
              className="skill-animated"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <span className="skill-stretch" key={index}>
              {skills[index]}
              </span>
            </div>

            {/* CTA */}
            <div className="home-cta">
              <a href="#contact" className="btn primary-btn">
                Contact Me
              </a>
              <br></br>

              <button
                className="btn secondary-btn"
                onClick={() => setShowResume(true)}
              >
                View Resume
              </button>
            </div>
          </div>

          {/* RIGHT PHOTO */}
          <div className="photo-container">
            <div className="photo-wrapper">
              <div className="photo-border"></div>
              <img src="/myphoto.jpeg" alt="Kashish Priya" />
            </div>
          </div>
        </div>
      </section>

      {/* RESUME MODAL */}
      {showResume && (
        <div className="modal-overlay">
          <div className="modal scale-in">
            <button
              className="close-btn"
              onClick={() => setShowResume(false)}
            >
              ✕
            </button>

            <iframe
              src="/Kashish_resume9.pdf"
              title="Resume"
              className="resume-frame"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
