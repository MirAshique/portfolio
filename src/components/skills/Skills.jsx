import "./Skills.css";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiHtml5,
  SiGithub,
  SiStripe,
  SiCloudinary,
  SiVercel,
  SiRender,
} from "react-icons/si";
import { FaLock, FaServer } from "react-icons/fa";

function Skills() {
  const skills = [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "React.js", icon: <SiReact /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML & CSS", icon: <SiHtml5 /> },
    { name: "REST APIs", icon: <FaServer /> },
    { name: "JWT Authentication", icon: <FaLock /> },
    { name: "Stripe Integration", icon: <SiStripe /> },
    { name: "Cloudinary", icon: <SiCloudinary /> },
    { name: "Vercel (Frontend Deployment)", icon: <SiVercel /> },
    { name: "Render (Backend Deployment)", icon: <SiRender /> },
    { name: "Git & GitHub", icon: <SiGithub /> },
  ];

  return (
    <section className="skills section-gray" id="skills" data-aos="fade-up">
      <div className="container skills-container">
        <h2>Technical Expertise</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
