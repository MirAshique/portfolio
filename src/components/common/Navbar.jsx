import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home","about","skills","projects","services","testimonials","contact"];
      sections.forEach(id => {
        const section = document.getElementById(id);
        if(section) {
          const offset = section.offsetTop - 70;
          if(window.scrollY >= offset) setActive(id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">Hussain</div>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          {["home","about","skills","projects","services","testimonials","contact"].map(id => (
            <li key={id}>
              <a href={`#${id}`} className={active===id ? "active" : ""}>{id.charAt(0).toUpperCase() + id.slice(1)}</a>
            </li>
          ))}
        </ul>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
