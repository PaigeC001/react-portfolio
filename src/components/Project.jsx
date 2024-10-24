function Project({ project }) {
    return (
      <div className="project-card">
        <img src={project.image} alt={project.title} />
        <h3>{project.title}</h3>
        <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Live App</a>
        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </div>
    );
  }
  
  export default Project;  