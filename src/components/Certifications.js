import "../styles/Certifications.css";

function Certifications() {
  const certs = [
    {
      title: "HTML & CSS Certification",
      desc: "Infosys Springboard",
      icon: "💻",
    },
    {
      title: "400+ LeetCode Questions",
      desc: "Solved 400+ questions on LeetCode and built strong problem-solving skills",
      icon: "🔥",
    },
    {
      title: "JavaScript Certification",
      desc: "Cisco Networking Academy",
      icon: "⭐",
    },
    {
      title: "SQL (Basic) Certification",
      desc: "Learned data manipulation using SQL from HackerRank",
      icon: "☁️",
    },
    {
      title: "Problem Solving Certification",
      desc: "Certified in logical thinking and problem-solving skills",
      icon: "🐙",
    },
    {
      title: "Pragati Cohort 5",
      desc: "Selected participant of Pragati Cohort 5 by Infosys Springboard",
      icon: "🚀",
    },
  ];

  return (
    <section id="certifications" className="cert-section">
      {/* SAME UNDERLINE STYLE AS ABOUT & SKILLS */}
      <h2 className="section-title active">
        Certifications & Achievements
      </h2>

      <div className="cert-grid">
        {certs.map((item, index) => (
          <div className="cert-card" key={index}>
            <div className="cert-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
