import "./Services.css";

function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Full-stack web applications using MERN stack.",
    },
    {
      title: "UI/UX Design",
      description: "Professional, clean, and responsive interface design.",
    },
    {
      title: "Freelance Projects",
      description: "Custom solutions for clients on Fiverr, Upwork, and PeoplePerHour.",
    },
  ];

  return (
    <section className="services" id="services" data-aos="fade-up">
      <div className="container services-container">
        <h2>My Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
