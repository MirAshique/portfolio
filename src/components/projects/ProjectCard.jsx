import "./Projects.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card" data-aos="zoom-in">
      <img src={project.image} alt={project.title} />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.link} className="btn primary">View Project</a>
      </div>
    </div>
  );
}

export default ProjectCard;
