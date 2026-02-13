import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "EasyAppointments – MERN Booking Platform",
      description:
        "A production-ready full-stack appointment booking system built with MERN. Features JWT authentication, role-based dashboards, real-time booking validation, email notifications, analytics charts, and CSV export. Fully deployed and responsive.",
      image:
        "https://res.cloudinary.com/doihfukwc/image/upload/v1771004419/Appoinment_a0sgjv.png",
      link: "https://appointment-system-wheat-iota.vercel.app/",
      
    },
    {
      title: "Hotel Management System – Full Stack MERN",
      description:
        "A complete hotel administration platform with booking lifecycle management, revenue analytics, room inventory control, secure admin authentication, and Cloudinary image integration. Fully deployed with production-ready architecture.",
      image:
        "https://res.cloudinary.com/doihfukwc/image/upload/v1771004448/hotel_czcvdv.png",
      link: "https://hotel-management-system-chi-rose.vercel.app/",
      
    },
  ];

  return (
    <section className="projects" id="projects" data-aos="fade-up">
      <div className="container projects-container">
        <h2>Featured Full Stack Systems</h2>
        <p className="projects-subtitle">
          Production-ready MERN applications built for real business use cases.
        </p>

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
