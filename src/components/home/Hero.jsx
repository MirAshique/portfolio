import "./Hero.css";
import developerImg from "../../assets/images/developer.png";
function Hero() {
  return (
    <section className="hero" id="home" data-aos="fade-down">
      <div className="container hero-container">
        <div className="hero-text">
          <h1>
            Hi, I’m <span className="highlight">Hussain</span>
          </h1>
          <h2>MERN Stack Developer</h2>
          <p>
            I build modern, scalable, and responsive web applications.  
            Ready to turn your ideas into reality.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn primary">Hire Me</a>
            <a href="#projects" className="btn secondary">View Projects</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={developerImg} alt="Hussain" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
