import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="container about-container">

        <div className="about-header">
          <h2>About</h2>
          <p>
            Product-focused engineer building scalable SaaS systems with secure architecture and real-world deployment.
          </p>
        </div>

        <div className="about-grid">

          <div className="about-main">
            <h3>Hussain — SaaS Systems Engineer</h3>

            <p>
              I specialize in designing and developing full-stack SaaS platforms 
              using the MERN stack, focused on clean architecture, scalability, 
              and production-ready performance.
            </p>

            <p>
              My experience includes building structured booking systems, 
              hotel management platforms, and SaaS-ready eCommerce systems 
              with Stripe integration, role-based authentication, analytics 
              dashboards, and cloud deployment.
            </p>

            <p>
              I approach development with a systems mindset — balancing 
              business requirements, user experience, backend architecture, 
              and long-term maintainability.
            </p>
          </div>

          <div className="about-side">
            <div className="about-box">
              <h4>Core Expertise</h4>
              <ul>
                <li>Scalable MERN Architecture</li>
                <li>JWT & Role-Based Authentication</li>
                <li>Stripe Payment Integration</li>
                <li>Admin & Analytics Dashboards</li>
                <li>Cloud Deployment (Vercel / Render)</li>
              </ul>
            </div>

            <div className="about-box">
              <h4>Development Philosophy</h4>
              <ul>
                <li>Security-First Approach</li>
                <li>Clean & Maintainable Code</li>
                <li>Business-Focused System Design</li>
                <li>Production-Ready Deployment</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;