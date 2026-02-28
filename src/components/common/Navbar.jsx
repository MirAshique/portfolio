import { useState, useEffect } from "react";
import "./Navbar.css";

const sections = ["home", "about", "projects", "services", "contact"];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offset = section.offsetTop - 140;
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
  }, []);

  const handleClick = () => setOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-wrapper">

        {/* LEFT — BRAND */}
        <div className="brand">
          <span className="brand-name">Hussain</span>
          <span className="brand-sub">SaaS Systems Engineer</span>
        </div>

        {/* CENTER — LINKS */}
        <ul className={`nav-links ${open ? "open" : ""}`}>
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={active === id ? "active" : ""}
                onClick={handleClick}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT — CTA */}
        <div className="nav-right">
          <a href="#contact" className="cta-button">
            Let’s Talk
          </a>

          <div className="hamburger" onClick={() => setOpen(!open)}>
            <span />
            <span />
            <span />
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;