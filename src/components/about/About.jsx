import "./About.css";
import developerImg from "../../assets/images/developer.png";
function About() {
  return (
    <section className="about" id="about" data-aos="fade-up">
      <div className="container about-container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-image">
           <img src={developerImg} alt="Hussain" />
          </div>
          <div className="about-text">
            <p>
              Hello! I’m <strong>Hussain</strong>, a MERN Stack Developer 
              building modern, scalable, and responsive web applications.
            </p>
            <p>
              I specialize in projects like Restaurant Management Systems,
              Hotel Management Systems, and freelance solutions for clients.
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
