import { useState, useEffect } from "react";
import "./Contact.css";

const API_URL = process.env.REACT_APP_API_URL;

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          message: "Your message has been sent successfully.",
          type: "success"
        });

        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        setStatus({
          message: data.message || "Something went wrong.",
          type: "error"
        });
      }
    } catch (error) {
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
    <section className="contact" id="contact">
      <div className="container contact-container">

        <div className="contact-header">
          <h2>Let’s Build Something Scalable</h2>
          <p>
            Tell me about your project, product idea, or business system — 
            and I’ll respond within 24 hours.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="form-row">
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
          </div>

          <textarea
            name="message"
            placeholder="Tell me about your project..."
            rows="6"
            value={formData.message}
            onChange={handleChange}
            disabled={loading}
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Start the Conversation"}
          </button>

          <p className="contact-note">
            Secure form • Direct response • No spam
          </p>

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