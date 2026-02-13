import "./Hero.css";

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
            I Build <span className="highlight">Scalable Management Systems</span> 
            & Booking Platforms
          </h1>

          <h2>Full Stack MERN Developer</h2>

          <p>
            I help hotels, clinics, restaurants, and startups automate their 
            operations with custom dashboards, booking systems, admin panels, 
            and production-ready web applications.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn primary">
              Start Your Project
            </a>
            <a href="#projects" className="btn secondary">
              View Live Systems
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img
            src="https://res.cloudinary.com/doihfukwc/image/upload/v1771004235/ChatGPT_Image_Feb_13_2026_10_34_40_PM_nlvqgt.png"
            alt="Admin Dashboard Preview"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
