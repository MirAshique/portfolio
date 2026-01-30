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
             Hi, I’m <strong>Hussain</strong>, founder of <strong>CodeFlux</strong> —
  a <strong>MERN Stack Developer</strong> specializing in building
  custom <strong>management systems</strong> and scalable web
  applications for businesses.
            </p>

            <p>
              I focus on developing solutions such as{" "}
              <strong>Hotel Management Systems</strong>,{" "}
              <strong>Restaurant Management Systems</strong>, and custom admin
              dashboards that help businesses organize data, automate workflows,
              and improve daily operations.
            </p>

            <p>
              My approach is simple: understand the business requirements,
              design a clean and intuitive user interface, and build a secure,
              efficient backend that can scale as the business grows.
            </p>

            <p>
              Whether you need a complete system from scratch or want to improve
              an existing application, I aim to deliver reliable, maintainable,
              and user-friendly solutions using modern web technologies.
            </p>

            <div className="about-skills">
              <span>MongoDB</span>
              <span>Express.js</span>
              <span>React.js</span>
              <span>Node.js</span>
              <span>REST APIs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
