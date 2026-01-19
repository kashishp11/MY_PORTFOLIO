import { useEffect, useRef, useState } from "react";
import "../styles/Projects.css";

function Projects() {
  const [visible, setVisible] = useState(false);
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
    <section id="projects" className="projects">
      <h2
        ref={titleRef}
        className={`section-title ${visible ? "active" : ""}`}
      >
        Featured Projects
      </h2>

      <p className="projects-subtitle">
        A selection of my academic and personal projects
      </p>

      <div className="projects-grid">
        {/* PROJECT 1 */}
        <div className="project-card">
          <div className="project-image">
          <img src="/tourism.png" alt="Tourism Website" />
          </div>

          <h3>Tourism Website</h3>
          <p>
            A responsive tourism website showcasing destinations, packages and
            travel information with clean UI and smooth navigation.
          </p>

          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <div className="project-links">
            <a href="https://github.com/kashishp11/TRAVEL-AND-TOURISM" target="_blank" rel="noreferrer">
              Code
            </a>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="project-card">
          <div className="project-image">
            <img src="/constitution.png" alt="Constitution Platform" />
          </div>

          <h3>Sansthaein and Sanvidhan</h3>
          <p>
            An educational platform explaining articles of the Indian
            Constitution in a simple and user-friendly manner.
          </p>

          <div className="tech-stack">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <div className="project-links">
            <a href="https://github.com/kashishp11/SANSTHAEIN-AUR-SAMVIDHAN" target="_blank" rel="noreferrer">
              Code
            </a>
          </div>
        </div>

        {/* PROJECT 3 */}
        <div className="project-card">
          <div className="project-image">
            <img src="/portfolio.png" alt="My Portfolio" />
          </div>

          <h3>My Portfolio</h3>
          <p>
            A personal portfolio website built with React showcasing my skills,
            projects and professional journey.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <div className="project-links">
            <a href="https://github.com/kashishp11/MY_PORTFOLIO" target="_blank" rel="noreferrer">
              Code
            </a>
            {/* <a href="#" target="_blank" rel="noreferrer">
              Live
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
