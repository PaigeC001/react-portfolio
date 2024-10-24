// src/pages/Portfolio.jsx
import React from "react";
import "../styles/main.css"; // Ensure correct path for CSS file

export default function Portfolio() {
  const projects = [
    {
      title: "Task Board",
      image: "/assets/project1.png",
      liveLink: "https://paigec001.github.io/Task-Board/",
      repoLink: "https://github.com/PaigeC001/Task-Board",
    },
    {
      title: "README Generator",
      image: "/assets/project2.png",
      liveLink: "https://app.screencastify.com/v3/watch/b9KHhR8EDjKLPl5XVkUj",
      repoLink: "https://github.com/PaigeC001/READMEFileGenerator",
    },
    {
      title: "CookMate",
      image: "/assets/project3.png",
      liveLink: "https://cookmate-755p.onrender.com/",
      repoLink: "https://github.com/alisha1025/CookMate",
    },
    {
      title: "Pro Portfolio",
      image: "/assets/project4.png",
      liveLink: "https://paigec001.github.io/ProPortfolio/",
      repoLink: "https://github.com/PaigeC001/ProPortfolio",
    },
    {
      title: "Company Management App",
      image: "/assets/project5.png",
      liveLink: "https://new.express.adobe.com/publishedV2/urn:aaid:sc:US:e8cb40d8-c50b-41de-a018-041d1600285f?promoid=Y69SGM5H&mv=other",
      repoLink: "https://github.com/PaigeC001/Company_ManagementApp",
    },
  ];

  return (
    <section className="portfolio">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <div className="project-links">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}