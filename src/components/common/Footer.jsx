import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">

        <div className="footer-left">
          <h3>Hussain</h3>
          <p>
            SaaS Systems Engineer building scalable MERN platforms,
            secure backend architectures, and production-ready applications.
          </p>

          <div className="footer-socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:ashiqtalpur18@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <h4>Contact</h4>
          <p>ashiqtalpur18@gmail.com</p>
          <p>Available for freelance & SaaS projects</p>
          <p>Remote • Worldwide</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Hussain. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;