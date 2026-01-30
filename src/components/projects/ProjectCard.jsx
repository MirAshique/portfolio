import "./Projects.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card card" data-aos="zoom-in">
      <img src={project.image} alt={project.title} />

      <div className="project-info">
        <span className="project-tag">{project.tag}</span>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <a href={project.link} className="btn primary">
          Request Similar System
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
