import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h3>CodeFlux</h3>
          <p>
            MERN Stack Developer & Management System Specialist building
            scalable, secure, and modern web applications for businesses.
          </p>

          <div className="footer-socials">
            <a
              href="https://github.com/MirAshique"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.fiverr.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Fiverr or Upwork"
            >
              <FaBriefcase />
            </a>

            <a
              href="mailto:ashiqtalpur18@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          <span className="footer-trust">
            ⏱ Response within 24 hours
          </span>
        </div>

        {/* Services */}
        <div className="footer-services">
          <h4>Services</h4>
          <ul>
            <li>Hotel Management Systems</li>
            <li>Restaurant Management Systems</li>
            <li>Custom MERN Web Applications</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li>Email: ashiqtalpur18@gmail.com</li>
            <li>Available for freelance projects</li>
            <li>Remote / Worldwide</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} CodeFlux. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
