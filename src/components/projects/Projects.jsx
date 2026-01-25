import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Restaurant Management System",
      description:
        "Full-stack MERN app to manage restaurant operations, menu, and orders.",
      image: "https://i.ibb.co/7W9Qf7R/project1.png",
      link: "#",
    },
    {
      title: "Hotel Management System",
      description:
        "Modern MERN app to handle hotel bookings, rooms, and customers.",
      image: "https://i.ibb.co/7W9Qf7R/project2.png",
      link: "#",
    },
  ];

  return (
    <section className="projects" id="projects" data-aos="fade-up">
      <div className="container projects-container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
