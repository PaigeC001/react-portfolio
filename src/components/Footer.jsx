// src/components/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Importing icons

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        © {new Date().getFullYear()} Lernantino
      </div>
      <div className="footer-center">
        <a
          href="https://github.com/PaigeC001"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="footer-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/paige-shantel-28b1572b5/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="footer-icon" />
        </a>
      </div>
    </footer>
  );
}
