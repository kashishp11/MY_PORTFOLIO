import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
      <div className="logo-circle">KP</div>
      <h2 className="logo-name">Kashish Priya</h2>
      </div>
      
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
