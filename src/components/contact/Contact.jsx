import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        "https://portfolio-backend-09r1.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      // ✅ SUCCESS
      if (response.ok && data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      }
      // ❌ BACKEND VALIDATION ERROR
      else {
        setStatus(`❌ ${data.message || "Failed to send message"}`);
      }

    } catch (error) {
      console.error("Contact API Error:", error);
      setStatus("❌ Server is unreachable. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact" data-aos="fade-up">
      <div className="container contact-container">
        <h2>Contact Me</h2>
        <p>Get in touch for freelance projects or collaborations.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button
            type="submit"
            className="btn primary"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && <p className="form-status">{status}</p>}
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
