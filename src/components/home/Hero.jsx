import "./Hero.css";
import developerImg from "../../assets/images/developer.png";

function Hero() {
  return (
    <section
      className="hero section-gradient"
      id="home"
      data-aos="fade-down"
    >
      <div className="container hero-container">
        <div className="hero-text">
          <h1>
            I build <span className="highlight">Management Systems</span> for
            Growing Businesses
          </h1>

          <h2>MERN Stack Developer</h2>

          <p>
            I help hotels, restaurants, and startups streamline their operations
            with custom dashboards, admin panels, and scalable web applications.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn primary">
              Get a Free Consultation
            </a>
            <a href="#projects" className="btn secondary">
              View Demo Projects
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={developerImg} alt="Hussain - MERN Developer" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
