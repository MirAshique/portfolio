import { useState, useEffect } from "react";
import "./Contact.css";

const API_URL = import.meta.env.VITE_API_URL;

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ message: "", type: "" });

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          message: "Message sent successfully!",
          type: "success"
        });

        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        setStatus({
          message: data.message || "Failed to send message",
          type: "error"
        });
      }
    } catch (error) {
      console.error("Contact API Error:", error);
      setStatus({
        message: "Server is unreachable. Please try again later.",
        type: "error"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({ message: "", type: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section className="contact" id="contact" data-aos="fade-up">
      <div className="container contact-container">
        <h2>Contact Me</h2>
        <p>
          Tell me about your project and I’ll get back to you as soon as possible.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            disabled={loading}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            disabled={loading}
            required
          ></textarea>

          <button type="submit" className="btn primary" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* ✅ Trust line */}
          <p className="contact-note">⏱ Response within 24 hours</p>

          {status.message && (
            <p className={`form-status ${status.type}`}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
