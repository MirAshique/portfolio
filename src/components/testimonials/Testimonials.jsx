import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Client A",
      feedback: "Hussain built an amazing Restaurant Management System. Highly recommended!",
    },
    {
      name: "Client B",
      feedback: "Professional, responsive, and skilled in MERN stack. Delivered on time.",
    },
    {
      name: "Client C",
      feedback: "Excellent freelancer. The Hotel Management System exceeded expectations!",
    },
  ];

  return (
    <section className="testimonials" id="testimonials" data-aos="fade-up">
      <div className="container testimonials-container">
        <h2>Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <p>"{t.feedback}"</p>
              <h4>- {t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
