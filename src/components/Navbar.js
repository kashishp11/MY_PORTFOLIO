import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <nav className="navbar">
      {/* LEFT LOGO */}
      <div className="nav-left">
        <div className="logo-circle">KP</div>
        <span className="logo-name">Kashish Priya</span>
      </div>

      {/* HAMBURGER (MOBILE) */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li><a href="#home" onClick={handleClose}>Home</a></li>
        <li><a href="#about" onClick={handleClose}>About</a></li>
        <li><a href="#projects" onClick={handleClose}>Projects</a></li>
        <li><a href="#skills" onClick={handleClose}>Skills</a></li>
        <li><a href="#certifications" onClick={handleClose}>Certifications</a></li>
        <li><a href="#contact" onClick={handleClose}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
