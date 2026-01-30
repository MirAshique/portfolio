import "./Services.css";
import { FaHotel, FaUtensils, FaCode } from "react-icons/fa";

function Services() {
  const services = [
    {
      title: "Hotel Management Systems",
      description:
        "Custom-built hotel management solutions including room bookings, customer records, admin dashboards, and scalable backend APIs.",
      icon: <FaHotel />,
    },
    {
      title: "Restaurant Management Systems",
      description:
        "End-to-end restaurant systems to manage menus, orders, staff, and admin operations with real-time data handling.",
      icon: <FaUtensils />,
    },
    {
      title: "Custom MERN Web Applications",
      description:
        "Tailored MERN stack applications built to match your business needs, with clean UI, secure backend, and scalable architecture.",
      icon: <FaCode />,
    },
  ];

  return (
    <section className="services" id="services" data-aos="fade-up">
      <div className="container services-container">
        <h2>Services I Provide</h2>

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
