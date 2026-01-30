import { useState, useEffect } from "react";
import "./Navbar.css";

/* Static sections (do not change at runtime) */
const sections = [
  "home",
  "about",
  "skills",
  "projects",
  "services",
  "testimonials",
  "contact",
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offset = section.offsetTop - 100;
          const height = section.offsetHeight;

          if (
            window.scrollY >= offset &&
            window.scrollY < offset + height
          ) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // ✅ correct: static outer constant

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        <div className="logo">CodeFlux</div>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={active === id ? "active" : ""}
                onClick={handleLinkClick}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
