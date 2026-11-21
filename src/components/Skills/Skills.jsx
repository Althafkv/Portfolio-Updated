import { useState, useEffect } from "react";
import "./Skills.css";
import Frontendskills from "./Frontendskills";
import Backendskills from "./Backendskills";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title" style={{ color: "#007F73" }}>
        Skills
      </h2>
      <span className="section-subtitle">My technichal level</span>

      <div className="skills-container container grid">
        <div className="skills-item">
          <Frontendskills />
        </div>
        <div className="skills-item">
          <Backendskills />
        </div>
      </div>
    </section>
  );
}

export default Skills;
