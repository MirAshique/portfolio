import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>&copy; {new Date().getFullYear()} Hussain. All rights reserved.</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
