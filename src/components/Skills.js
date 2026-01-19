import "../styles/Skills.css";

function Skills() {
  const skills = [
    {
      name: "C++",
      level: "90%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "HTML",
      level: "95%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      level: "85%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      level: "90%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React.js",
      level: "80%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Data Structures & Algorithms",
      level: "75%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "DBMS",
      level: "85%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "SQL",
      level: "87%",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
  ];

  return (
    <section id="skills" className="skills">
      {/* 🔥 IMPORTANT: SAME CLASS AS ABOUT & CERTIFICATIONS */}
      <h2 className="section-title always-active">
        Skills & Expertise
      </h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            className="skill-card"
            key={index}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img src={skill.icon} alt={skill.name} />
            <h3>{skill.name}</h3>

            <div className="progress-bar">
              <span style={{ width: skill.level }}></span>
            </div>

            <p className="percent">{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
