import "./Testimonials.css";
import { FaQuoteLeft } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      title: "Demo Project Review",
      feedback:
        "The Restaurant Management System demo shows strong backend logic, clean UI, and a well-structured MERN architecture. The project demonstrates a solid understanding of real business workflows.",
    },
    {
      title: "Practice System Feedback",
      feedback:
        "The Hotel Management System design is well-planned, scalable, and suitable for real-world use. Admin dashboard structure and API flow are implemented professionally.",
    },
    {
      title: "Learning Collaboration",
      feedback:
        "Hussain approaches projects with a problem-solving mindset, focusing on clean code, usability, and scalable solutions. Communication and implementation are clear and structured.",
    },
  ];

  return (
    <section
      className="testimonials section-gray"
      id="testimonials"
      data-aos="fade-up"
    >
      <div className="container testimonials-container">
        <h2>Feedback & Project Reviews</h2>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-quote">
                <FaQuoteLeft />
              </div>

              <p className="testimonial-text">{t.feedback}</p>

              <h4 className="testimonial-title">{t.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
