import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        
        {/* LEFT CONTENT */}
        <div className="hero-content">

          <p className="hero-badge">
            SaaS Systems Engineer • MERN Architect • Stripe Integration
          </p>

          <h1 className="hero-title">
            Building <span>Scalable SaaS Platforms</span> 
            That Power Modern Businesses
          </h1>

          <p className="hero-description">
            I help startups and growing businesses transform ideas into 
            secure, production-ready web applications — from booking systems 
            to full-scale SaaS eCommerce platforms with authentication, 
            analytics, and cloud deployment.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View Case Studies
            </a>
            <a href="#contact" className="btn-outline">
              Start a Project
            </a>
          </div>

          {/* TRUST INDICATORS */}
          <div className="hero-trust">
            <div>
              <strong>3+</strong>
              <span>Production Systems</span>
            </div>
            <div>
              <strong>JWT</strong>
              <span>Secure Auth</span>
            </div>
            <div>
              <strong>Stripe</strong>
              <span>Payment Integration</span>
            </div>
            <div>
              <strong>Cloud</strong>
              <span>Deployed Apps</span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-visual">
          <img
            src="https://res.cloudinary.com/doihfukwc/image/upload/v1771004235/ChatGPT_Image_Feb_13_2026_10_34_40_PM_nlvqgt.png"
            alt="SaaS Dashboard Preview"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;