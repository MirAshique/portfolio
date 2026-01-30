import "./Skills.css";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiHtml5,
  SiGithub,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "React.js", icon: <SiReact /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML & CSS", icon: <SiHtml5 /> },
    { name: "Git & GitHub", icon: <SiGithub /> },
  ];

  return (
    <section className="skills section-gray" id="skills" data-aos="fade-up">
      <div className="container skills-container">
        <h2>My Skills</h2>

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
