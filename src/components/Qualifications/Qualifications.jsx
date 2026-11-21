import { useState } from "react";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";
import "./Qualifications.css";

function Qualification() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const educationData = [
    {
      title: "BSc Electronics",
      subtitle: "Calicut University",
      period: "2018 - 2022",
      description:
        "Bachelor's degree in Electronics with focus on digital systems and embedded programming",
    },
    {
      title: "Higher Secondary School",
      subtitle: "NSS HSS Kalpetta",
      period: "2017 - 2018",
      description: "Science stream with Mathematics, Physics, and Chemistry",
    },
  ];

  const experienceData = [
    {
      title: "Freelance Work",
      subtitle: "Fiverr & Upwork",
      period: "2025",
      description:
        "Built and optimized websites for clients through Upwork, Fiverr, and direct contracts.",
    },
    {
      title: "Software Engineer",
      subtitle: "Luminar Technolab",
      period: "2023 - 2024",
      description:
        "Intensive training in MongoDB, Express.js, React.js, and Node.js and frameworks",
    },
  ];

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section-title" style={{ color: "var(--brand-ink, #007F73)" }}>
        Qualification
      </h2>
      <span className="section-subtitle">My personel journey</span>

      <div className="qualification-wrapper">
        {/* Tab Navigation */}
        <div className="qualification-tabs-wrapper">
          <div className="qualification-tabs">
            <button
              className={`qualification-button ${
                toggleState === 1 ? "qualification-active" : ""
              }`}
              onClick={() => toggleTab(1)}
            >
              <GraduationCap
                className={`qualification-icon ${
                  toggleState === 1 ? "icon-active" : ""
                }`}
              />
              Education
            </button>
            <button
              className={`qualification-button ${
                toggleState === 2 ? "qualification-active" : ""
              }`}
              onClick={() => toggleTab(2)}
            >
              <Briefcase
                className={`qualification-icon ${
                  toggleState === 2 ? "icon-active" : ""
                }`}
              />
              Experience
            </button>
          </div>
        </div>

        {/* Content Sections */}
        <div className="qualification-content-wrapper">
          {/* Education Content */}
          <div
            className={`qualification-content ${
              toggleState === 1 ? "qualification-content-active" : ""
            }`}
          >
            <div className="qualification-timeline">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className="qualification-item"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="qualification-timeline-dot education-dot"></div>
                  {index < educationData.length - 1 && (
                    <div className="qualification-timeline-line education-line"></div>
                  )}

                  <div className="qualification-card">
                    <div className="qualification-card-header">
                      <div className="qualification-info">
                        <h3 className="qualification-title">{item.title}</h3>
                        <p className="qualification-subtitle education-subtitle">
                          {item.subtitle}
                        </p>
                      </div>
                      <div className="qualification-period">
                        <Calendar className="calendar-icon" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                    <p className="qualification-description">
                      {item.description}
                    </p>
                    <div className="qualification-overlay education-overlay"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Content */}
          <div
            className={`qualification-content ${
              toggleState === 2 ? "qualification-content-active" : ""
            }`}
          >
            <div className="qualification-timeline">
              {experienceData.map((item, index) => (
                <div
                  key={index}
                  className="qualification-item"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="qualification-timeline-dot experience-dot"></div>
                  {index < experienceData.length - 1 && (
                    <div className="qualification-timeline-line experience-line"></div>
                  )}

                  <div className="qualification-card">
                    <div className="qualification-card-header">
                      <div className="qualification-info">
                        <h3 className="qualification-title">{item.title}</h3>
                        <p className="qualification-subtitle experience-subtitle">
                          {item.subtitle}
                        </p>
                      </div>
                      <div className="qualification-period">
                        <Calendar className="calendar-icon" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                    <p className="qualification-description">
                      {item.description}
                    </p>
                    <div className="qualification-overlay experience-overlay"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
