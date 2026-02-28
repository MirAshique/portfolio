import "./Services.css";
import { FaCalendarCheck, FaHotel, FaShoppingCart } from "react-icons/fa";

function Services() {
  const services = [
    {
      title: "Booking & Scheduling Platforms",
      description:
        "Scalable appointment and booking systems designed with real-time availability logic, secure authentication, structured dashboards, and production-ready deployment.",
      highlights: [
        "JWT Role-Based Access",
        "Real-Time Validation",
        "Admin Dashboards",
        "Cloud Deployment",
      ],
      icon: <FaCalendarCheck />,
    },
    {
      title: "Business & Management Systems",
      description:
        "Custom-built administration platforms for hotels and service businesses with lifecycle tracking, revenue analytics, and structured backend architecture.",
      highlights: [
        "Booking Workflows",
        "Revenue Tracking",
        "Inventory Control",
        "Scalable REST APIs",
      ],
      icon: <FaHotel />,
    },
    {
      title: "SaaS & eCommerce Platforms",
      description:
        "Production-ready SaaS applications with secure authentication, Stripe payment integration, analytics dashboards, and scalable cloud infrastructure.",
      highlights: [
        "Stripe Integration",
        "JWT + OTP Security",
        "Advanced Product Logic",
        "Cloud Architecture",
      ],
      icon: <FaShoppingCart />,
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container services-container">

        <div className="services-header">
          <h2>Solution Offerings</h2>
          <p>
            Scalable full-stack systems engineered with clean architecture,
            security-first design, and real-world deployment in mind.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <ul>
                {service.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;