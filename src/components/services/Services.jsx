import "./Services.css";
import { FaCalendarCheck, FaHotel, FaShoppingCart } from "react-icons/fa";

function Services() {
  const services = [
    {
      title: "Appointment & Booking Platforms",
      description:
        "Production-ready booking systems with JWT authentication, role-based dashboards, real-time availability validation, email notifications, analytics charts, and cloud deployment.",
      icon: <FaCalendarCheck />,
    },
    {
      title: "Hotel & Business Management Systems",
      description:
        "Complete business administration platforms including booking lifecycle control, revenue tracking, room or resource management, admin dashboards, and scalable backend APIs.",
      icon: <FaHotel />,
    },
    {
      title: "SaaS & eCommerce Applications",
      description:
        "Full-stack MERN SaaS platforms with secure authentication, Stripe payment integration, advanced product management, RESTful APIs, Cloudinary image hosting, and scalable architecture.",
      icon: <FaShoppingCart />,
    },
  ];

  return (
    <section className="services" id="services" data-aos="fade-up">
      <div className="container services-container">
        <h2>Core Solutions I Build</h2>
        <p className="services-subtitle">
          Production-ready full stack systems designed for real-world business operations.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
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
