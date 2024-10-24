import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume"; // Import the Resume component
import Footer from "./components/Footer"; // Import the Footer component

export default function App() {
  return (
    <Router>
      <header>
        <h1>Lernantino</h1>
        <nav>
          <ul>
            <li><Link to="/">About Me</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/resume">Resume</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} /> {/* Resume route added */}
        </Routes>
      </main>
      <Footer /> {/* Use the Footer component here */}
    </Router>
  );
}
