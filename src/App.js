import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <div className="section-divider"></div>
      <About />
      <div className="section-divider"></div>
      <Projects />
      <div className="section-divider"></div>
      <Skills />
      <div className="section-divider"></div>
      <Certifications/>
      <div className="section-divider"></div>
      <Contact />
    </>
  );
}

export default App;
