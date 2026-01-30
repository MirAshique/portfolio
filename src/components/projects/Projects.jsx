import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Restaurant Management System (Demo)",
      description:
        "A custom-built system designed to manage restaurant menus, orders, and admin operations. Built with MERN stack and scalable backend architecture.",
      image: "https://i.ibb.co/7W9Qf7R/project1.png",
      link: "#contact",
      tag: "In Development",
    },
    {
      title: "Hotel Management System (Custom Build)",
      description:
        "A hotel management solution focused on bookings, rooms, customers, and admin dashboards. Designed to be customized for real hotel businesses.",
      image: "https://i.ibb.co/7W9Qf7R/project2.png",
      link: "#contact",
      tag: "Demo Ready",
    },
  ];

  return (
    <section className="projects" id="projects" data-aos="fade-up">
      <div className="container projects-container">
        <h2>Management Systems & Demo Projects</h2>

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
