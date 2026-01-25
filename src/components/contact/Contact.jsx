import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact" data-aos="fade-up">
      <div className="container contact-container">
        <h2>Contact Me</h2>
        <p>Get in touch for freelance projects or collaborations.</p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn primary">Send Message</button>
        </form>

        <div className="social-links">
          <a
    href="https://github.com/MirAshique"
    target="_blank"
    rel="noreferrer"
  >
    GitHub
  </a>

  <a
    href="https://www.linkedin.com"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn
  </a>

  <a
    href="https://www.fiverr.com"
    target="_blank"
    rel="noreferrer"
  >
    Fiverr
  </a>

  <a
    href="https://www.upwork.com"
    target="_blank"
    rel="noreferrer"
  >
    Upwork
  </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
