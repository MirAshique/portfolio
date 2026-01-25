import "./About.css";

function About() {
  return (
    <section className="about" id="about" data-aos="fade-up">
      <div className="container about-container">
        <h2>About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I’m <strong>Hussain</strong>, a passionate{" "}
              <strong>MERN Stack Developer</strong> focused on building modern,
              scalable, and high-performance web applications.
            </p>

            <p>
              I specialize in developing full-stack solutions such as{" "}
              <strong>Restaurant Management Systems</strong>,{" "}
              <strong>Hotel Management Systems</strong>, and custom web
              applications tailored to meet client requirements.
            </p>

            <p>
              With a strong emphasis on clean UI, efficient backend
              architecture, and responsive design, I aim to deliver reliable
              and user-friendly digital experiences that solve real-world
              problems.
            </p>

            <div className="about-skills">
              <span>MongoDB</span>
              <span>Express.js</span>
              <span>React.js</span>
              <span>Node.js</span>
              <span>JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
