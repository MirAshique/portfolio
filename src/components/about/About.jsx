import "./About.css";

function About() {
  return (
    <section className="about section-light" id="about" data-aos="fade-up">
      <div className="container about-container">
        <h2>About Me</h2>

        <div className="about-card">
          <div className="about-accent"></div>

          <div className="about-text">
            <p>
              Hi, I’m <strong>Hussain</strong>, founder of{" "}
              <strong>CodeFlux</strong> — a{" "}
              <strong>Full Stack MERN Developer</strong> focused on building
              scalable <strong>SaaS platforms</strong>, booking systems, and
              business automation applications.
            </p>

            <p>
              I have developed production-ready systems including an{" "}
              <strong>Appointment Booking Platform</strong>, a{" "}
              <strong>Hotel Management System</strong>, and a full-stack{" "}
              <strong>SaaS eCommerce platform with Stripe integration</strong>.
              My solutions combine secure authentication, role-based access
              control, analytics dashboards, and cloud deployment.
            </p>

            <p>
              My approach is simple: understand business requirements,
              design a clean and intuitive user interface, and build a secure,
              scalable backend architecture that performs reliably in
              real-world environments.
            </p>

            <p>
              Whether you're launching a startup, automating internal
              operations, or building a full SaaS product, I focus on delivering
              maintainable, production-ready applications using modern
              technologies.
            </p>

            <div className="about-skills">
              <span>MongoDB</span>
              <span>Express.js</span>
              <span>React.js</span>
              <span>Node.js</span>
              <span>JWT Auth</span>
              <span>Stripe</span>
              <span>Cloudinary</span>
              <span>REST APIs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
