import "./Services.css";
import { FaCalendarCheck, FaHotel, FaCode } from "react-icons/fa";

function Services() {
  const services = [
    {
      title: "Appointment & Booking Platforms",
      description:
        "Full-stack booking systems with JWT authentication, role-based dashboards, real-time availability checks, email notifications, analytics, and production deployment.",
      icon: <FaCalendarCheck />,
    },
    {
      title: "Hotel & Business Management Systems",
      description:
        "Complete administration platforms including booking lifecycle control, revenue analytics, room management, admin dashboards, and scalable backend APIs.",
      icon: <FaHotel />,
    },
    {
      title: "Custom MERN SaaS Applications",
      description:
        "Tailored MERN stack applications with secure authentication, RESTful APIs, Cloudinary integration, email services, and scalable architecture for modern businesses.",
      icon: <FaCode />,
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
