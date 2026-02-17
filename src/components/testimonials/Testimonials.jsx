import "./Testimonials.css";
import { FaQuoteLeft } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      title: "Booking Platform Implementation",
      feedback:
        "The appointment booking system was delivered with secure authentication, real-time availability validation, and a clean admin dashboard. The architecture is scalable and ready for production deployment.",
    },
    {
      title: "Hotel Management System",
      feedback:
        "The hotel administration platform includes structured booking workflows, revenue tracking, and an intuitive dashboard. Backend APIs are well-designed and the system performs smoothly in real-world scenarios.",
    },
    {
      title: "SaaS eCommerce Development",
      feedback:
        "The eCommerce platform integrates Stripe payments, advanced product management, and secure role-based authentication. The project reflects strong full-stack expertise and production-level implementation.",
    },
  ];

  return (
    <section
      className="testimonials section-gray"
      id="testimonials"
      data-aos="fade-up"
    >
      <div className="container testimonials-container">
        <h2>Project Highlights & Feedback</h2>

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
