import "./Projects.css";

function Projects() {
  const projects = [
    {
      name: "EasyAppointments",
      tagline: "Full-Stack MERN Booking Platform",
      problem:
        "Businesses struggled with manual appointment scheduling, booking conflicts, and lack of centralized management.",
      solution:
        "Developed a scalable MERN-based booking platform with real-time availability validation, role-based dashboards, analytics charts, automated email notifications, and CSV export.",
      stack:
        "MongoDB • Express • React • Node • JWT • Cloudinary • Vercel",
      image:
        "https://res.cloudinary.com/doihfukwc/image/upload/v1771004419/Appoinment_a0sgjv.png",
      live: "https://appointment-system-wheat-iota.vercel.app/",
    },
    {
      name: "Hotel Management System",
      tagline: "Production-Ready Business Administration Platform",
      problem:
        "Hotels required a structured system for booking lifecycle management, room inventory tracking, and revenue monitoring.",
      solution:
        "Built a full-stack hotel administration platform with secure admin authentication, booking workflows, revenue analytics dashboard, and cloud-based deployment.",
      stack:
        "MongoDB • Express • React • Node • JWT • Cloudinary • Render",
      image:
        "https://res.cloudinary.com/doihfukwc/image/upload/v1771004448/hotel_czcvdv.png",
      live: "https://hotel-management-system-chi-rose.vercel.app/",
    },
    {
      name: "QuickCart",
      tagline: "SaaS-Ready eCommerce Platform with Stripe",
      problem:
        "Modern businesses need scalable eCommerce systems with secure authentication and integrated payment infrastructure.",
      solution:
        "Engineered a SaaS-ready MERN eCommerce platform featuring JWT + OTP authentication, Stripe payment integration, admin analytics dashboard, advanced filtering, and scalable cloud deployment.",
      stack:
        "MongoDB • Express • React • Node • Stripe • JWT • Vercel • Render",
      image:
        "https://res.cloudinary.com/doihfukwc/image/upload/v1771353137/Screenshot_2026-02-17_230649_nlddxn.png",
      live: "https://quickcart-fullstack.vercel.app/",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container projects-container">

        <div className="projects-header">
          <h2>Featured Case Studies</h2>
          <p>
            Production-ready SaaS systems designed with scalable architecture,
            secure authentication, and real-world deployment.
          </p>
        </div>

        {projects.map((project, index) => (
          <div
            key={index}
            className={`case-study ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <div className="case-image">
              <img src={project.image} alt={project.name} />
            </div>

            <div className="case-content">
              <h3>{project.name}</h3>
              <span className="case-tagline">{project.tagline}</span>

              <div className="case-block">
                <h4>Problem</h4>
                <p>{project.problem}</p>
              </div>

              <div className="case-block">
                <h4>Solution</h4>
                <p>{project.solution}</p>
              </div>

              <div className="case-block">
                <h4>Tech Stack</h4>
                <p className="tech-stack">{project.stack}</p>
              </div>

              <div className="case-actions">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  View Live System
                </a>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;