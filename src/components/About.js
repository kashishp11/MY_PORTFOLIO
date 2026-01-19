import { useState, useEffect, useRef } from "react";
import "../styles/About.css";

function About() {
  const [showResult, setShowResult] = useState(false);
  const [resultType, setResultType] = useState(null);
  const [activeSem, setActiveSem] = useState("Sem 1");
  const [visible, setVisible] = useState(false);

  const cgpaData = {
    "Sem 1": "SGPA: 8.0",
    "Sem 2": "SGPA: 8.33",
    "Sem 3": "SGPA: 8.38",
    "Sem 4": "SGPA: 8.29",
    "Sem 5": "SGPA: 9.04",
    "Sem 6": "SGPA: 8.54",
    "Overall CGPA": "CGPA: 8.44",
  };

  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
  }, []);

  return (
    <section id="about" className="about">
      {/* ABOUT HEADING */}
      <h2
        ref={titleRef}
        className={`section-title ${visible ? "active" : ""}`}
      >
        About Me
      </h2>

      {/* INTRO */}
      <div className="about-intro">
        <p>
          I'm <strong>Kashish Priya</strong>, a B.Tech Computer Science Engineering student at Bansal Institute of Science and Technology, with a strong interest in frontend development and problem solving.
           I have a solid understanding of DBMS, SQL, and Object-Oriented Programming (OOPs), and I enjoy building clean, efficient, and user-friendly applications.
        </p>

        <p>
          I have solved 400+ problems on LeetCode and participated in Smart India Hackathon (SIH) and college-level hackathons, which enhanced my technical skills, teamwork, and communication abilities.
          I am a motivated learner with a strong learning mindset, always eager to explore new technologies and continuously improve in a professional environment.
        </p>
      </div>

      <div className="section-divider"></div>
      
      {/* EDUCATION HEADING */}
      <h2 className={`section-title ${visible ? "active" : ""}`}>
        Education
      </h2>

      {/* EDUCATION BOXES */}
      <div className="edu-layout">
        {/* X */}
        <div className="edu-box big">
          <h3>X (Secondary)</h3>
          <p><strong>School:</strong> R.B Springdale Public School</p>
          <p><strong>Board:</strong> CBSE</p>
          <p><strong>Percentage:</strong> 86.60%</p>

          <button
            onClick={() => {
              setResultType("x");
              setShowResult(true);
            }}
          >
            View Result
          </button>
        </div>

        {/* XII */}
        <div className="edu-box big">
          <h3>XII (Senior Secondary)</h3>
          <p><strong>School:</strong> Shiv Jyoti International School</p>
          <p><strong>Board:</strong> CBSE</p>
          <p><strong>Stream:</strong> PCM</p>
          <p><strong>Percentage:</strong> 85.40%</p>

          <button
            onClick={() => {
              setResultType("xii");
              setShowResult(true);
            }}
          >
            View Result
          </button>
        </div>
      </div>

      {/* BTECH CENTER */}
      <div className="edu-box big center">
        <h3>B.Tech (Computer Science)</h3>
        <p><strong>College:</strong> Bansal Institute of Science and Technology</p>
        <p>Affiliated to RGPV, Bhopal</p>

        <div className="sem-buttons">
          {Object.keys(cgpaData).map((sem) => (
            <button
              key={sem}
              className={activeSem === sem ? "active" : ""}
              onClick={() => setActiveSem(sem)}
            >
              {sem}
            </button>
          ))}
        </div>

        <p className="cgpa-display">{cgpaData[activeSem]}</p>
      </div>

      {/* RESULT MODAL */}
      {showResult && (
        <div className="modal-overlay">
          <div className="modal">
            <button
              className="close-btn"
              onClick={() => setShowResult(false)}
            >
              ✕
            </button>

            <img
              src={
                resultType === "x"
                  ? "/x-result.jpg"
                  : "/xii-result.jpg"
              }
              alt="Result"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default About;
