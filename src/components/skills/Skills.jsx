import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills" data-aos="fade-up">
      <div className="container skills-container">
        <h2>My Skills</h2>
        <div className="skills-cards">
          <div className="skill-card">MongoDB</div>
          <div className="skill-card">Express.js</div>
          <div className="skill-card">React.js</div>
          <div className="skill-card">Node.js</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">HTML & CSS</div>
          <div className="skill-card">Git & GitHub</div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
