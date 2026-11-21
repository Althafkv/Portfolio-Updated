import { useState, useEffect } from "react";
const ecom =
  "https://res.cloudinary.com/dt8flx8k4/image/upload/f_auto,q_auto,w_1200,c_limit/v1765371583/blissreal_sz4klb.png";
const sky =
  "https://res.cloudinary.com/dt8flx8k4/image/upload/v1795250086/Screenshot_2026-11-21_132745_lslcpl.png";
const port =
  "https://res.cloudinary.com/dt8flx8k4/image/upload/f_auto,q_auto,w_1200,c_limit/v1765371492/ssss_qpjlzd.png";
const gallery =
  "https://res.cloudinary.com/dt8flx8k4/image/upload/f_auto,q_auto,w_1200,c_limit/v1765371494/gall_bmu2bt.png";
const bmi =
  "https://res.cloudinary.com/dt8flx8k4/image/upload/f_auto,q_auto,w_1200,c_limit/v1765371831/bmireal_q38y57.png";
const mini =
  "https://res.cloudinary.com/dt8flx8k4/image/upload/v1765371885/minigamereal_x3nusr.png";
const gym =
  "https://res.cloudinary.com/dt8flx8k4/image/upload/f_auto,q_auto,w_1200,c_limit/v1765371492/gymapp_ya8aiw.png";
const chat =
  "https://res.cloudinary.com/dt8flx8k4/image/upload/f_auto,q_auto,w_1200,c_limit/v1765371708/chat_lpnhjj.png";
  const admindash =
  "https://res.cloudinary.com/dt8flx8k4/image/upload/v1795243118/Screenshot_2026-11-21_120821_arr6sf.png";

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const projects = [
    {
      id: 1,
      title: "E-commerce using Mern",
      description:
        "A MERN online store with customer accounts and integrated payments. An admin dashboard lets the store team manage the shop.",
      image: ecom,
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://ebliss.vercel.app/",
      githubUrl: "https://github.com/Althafkv/E-Bliss.git",
      category: "web",
    },
    {
      id: 2,
      title: "Sky Real - Mern",
      description:
        "A responsive hotel booking site built with React. Guests can explore hotels and book a stay from their phone or desktop.",
      image: sky,
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://sky-real-mern.vercel.app/",
      githubUrl: "https://github.com/Althafkv/Sky-Real",
      category: "app",
    },
    {
      id: 3,
      title: "Roxi Chat Application",
      description:
        "A MERN chat app that uses Socket.io to deliver messages in real time and show when someone is typing.",
      image: chat,
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      liveUrl: "https://roxi-chat.onrender.com/login",
      githubUrl: "https://github.com/Althafkv/Roxi-Chat.git",
      category: "app",
    },
    {
      id: 4,
      title: "Admin Dashboard",
      description:
        "A React analytics dashboard with interactive charts and searchable, filterable tables for exploring store performance.",
      image: admindash,
      technologies: ["React", "JavaScript", "Tailwind CSS", "Recharts"],
      liveUrl: "https://data-hub-world.vercel.app",
      githubUrl: "https://github.com/Althafkv/DataHub",
      category: "app",
    },
    {
      id: 5,
      title: "Portfolio",
      description:
        "My React portfolio brings together selected projects, technical skills, and professional experience in a responsive layout.",
      image: port,
      technologies: ["React Js", "Material UI"],
      liveUrl: "https://althafkv.netlify.app",
      githubUrl: "https://github.com/Althafkv/Portfolio-React",
      category: "web",
    },
    {
      id: 6,
      title: "Gallery App",
      description:
        "A responsive photo gallery where users can upload images, organize their collection, and browse the photos they have stored.",
      image: gallery,
      technologies: [
        "React Js",
        "Express Js",
        "Node Js",
        "MongoDB",
        "Cloudinary",
        "Tailwind CSS",
      ],
      liveUrl: "https://wiz-gallery-react.netlify.app/",
      githubUrl: "https://github.com/Althafkv/Gallery-App",
      category: "dashboard",
    },
    {
      id: 7,
      title: "BMI React",
      description:
        "A responsive React calculator that uses height and weight to calculate body mass index and displays the result immediately.",
      image: bmi,
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://bmi-reactapp.netlify.app/",
      githubUrl: "https://github.com/Althafkv/EMS-React",
      category: "dashboard",
    },
    {
      id: 8,
      title: "Minigame using Js",
      description:
        "A browser mini-game built with vanilla JavaScript that combines interactive gameplay with a custom interface.",
      image: mini,
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://js-minigame.netlify.app/",
      githubUrl: "https://github.com/Althafkv/MiniGame-Js",
      category: "dashboard",
    },
    {
      id: 9,
      title: "Gym App",
      description:
        "A responsive fitness app built with React that helps users plan workouts, track their routines, and manage their exercise schedule.",
      image: gym,
      technologies: ["React Js"],
      liveUrl: "https://gym-app-tan-xi.vercel.app/",
      githubUrl: "https://github.com/Althafkv/Gym-App",
      category: "dashboard",
    },
  ];

  const handleTouchStart = (e) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextProject();
    }
    if (isRightSwipe) {
      prevProject();
    }
  };

  const nextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
      setIsAnimating(false);
    }, 300);
  };

  const goToProject = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 300);
  };


  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, 7000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentProject = projects[currentIndex];

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
        position: "relative",
      }}
    >
      <div
        className="project-showcase"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="project-showcase-grid">
          <div className="project-preview">
            <img
              src={currentProject.image}
              decoding="async"
              alt={currentProject.title + " screenshot"}
            />
          </div>
          <div className="project-summary-stack">
            {projects.map((project, index) => (
              <div className="project-summary" key={project.id} aria-hidden={index !== currentIndex}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <h4>Technologies</h4>
                <ul className="project-tags">
                  {project.technologies.map(tech => <li key={tech}>{tech}</li>)}
                </ul>
                <div className="project-actions">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">👁️ View Live</a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">📁 View Code</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevProject}
        disabled={isAnimating}
        style={{
          position: "absolute",
          left: "15px",
          top: "45%",
          transform: "translateY(-50%)",
          backgroundColor: "#ffffff",
          color: "var(--project-heading, #333333)",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow:
            "0 4px 8px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
          transition: "all 0.2s ease",
          fontSize: "18px",
          fontWeight: "bold",
          zIndex: 10,
          touchAction: "manipulation",
          background: "var(--project-control, linear-gradient(145deg, #ffffff, #f5f5f5))",
          lineHeight: "1",
          padding: "0",
        }}
        onMouseEnter={(e) => {
          e.target.style.boxShadow =
            "0 6px 12px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.9)";
          e.target.style.transform = "translateY(-50%) translateY(-1px)";
          e.target.style.borderColor = "#007F73";
        }}
        onMouseLeave={(e) => {
          e.target.style.boxShadow =
            "0 4px 8px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.8)";
          e.target.style.transform = "translateY(-50%)";
          e.target.style.borderColor = "#e0e0e0";
        }}
        onMouseDown={(e) => {
          e.target.style.boxShadow =
            "0 2px 4px rgba(0, 0, 0, 0.15), inset 0 1px 2px rgba(0, 0, 0, 0.1)";
          e.target.style.transform = "translateY(-50%)";
        }}
        onMouseUp={(e) => {
          e.target.style.boxShadow =
            "0 6px 12px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.9)";
          e.target.style.transform = "translateY(-50%) translateY(-1px)";
        }}
      >
        ‹
      </button>

      <button
        onClick={nextProject}
        disabled={isAnimating}
        style={{
          position: "absolute",
          right: "15px",
          top: "45%",
          transform: "translateY(-50%)",
          backgroundColor: "#ffffff",
          color: "var(--project-heading, #333333)",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow:
            "0 4px 8px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
          transition: "all 0.2s ease",
          fontSize: "18px",
          fontWeight: "bold",
          zIndex: 10,
          touchAction: "manipulation",
          background: "var(--project-control, linear-gradient(145deg, #ffffff, #f5f5f5))",
          lineHeight: "1",
          padding: "0",
        }}
        onMouseEnter={(e) => {
          e.target.style.boxShadow =
            "0 6px 12px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.9)";
          e.target.style.transform = "translateY(-50%) translateY(-1px)";
          e.target.style.borderColor = "#007F73";
        }}
        onMouseLeave={(e) => {
          e.target.style.boxShadow =
            "0 4px 8px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.8)";
          e.target.style.transform = "translateY(-50%)";
          e.target.style.borderColor = "#e0e0e0";
        }}
        onMouseDown={(e) => {
          e.target.style.boxShadow =
            "0 2px 4px rgba(0, 0, 0, 0.15), inset 0 1px 2px rgba(0, 0, 0, 0.1)";
          e.target.style.transform = "translateY(-50%)";
        }}
        onMouseUp={(e) => {
          e.target.style.boxShadow =
            "0 6px 12px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.9)";
          e.target.style.transform = "translateY(-50%) translateY(-1px)";
        }}
      >
        ›
      </button>

      {/* Dots Indicator */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          marginTop: "20px",
        }}
      >
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToProject(index)}
            disabled={isAnimating}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              border: "none",
              backgroundColor: index === currentIndex ? "#007F73" : "#d1d5db",
              cursor: "pointer",
              transition: "all 0.3s ease",
              transform: index === currentIndex ? "scale(1.2)" : "scale(1)",
            }}
            onMouseEnter={(e) => {
              if (index !== currentIndex) {
                e.target.style.backgroundColor = "#9ca3af";
                e.target.style.transform = "scale(1.1)";
              }
            }}
            onMouseLeave={(e) => {
              if (index !== currentIndex) {
                e.target.style.backgroundColor = "#d1d5db";
                e.target.style.transform = "scale(1)";
              }
            }}
          />
        ))}
      </div>

      {/* Project Counter */}
      <div
        style={{
          textAlign: "center",
          marginTop: "16px",
          color: "var(--project-copy, #6b7280)",
          fontWeight: "500",
        }}
      >
        {currentIndex + 1} of {projects.length}
      </div>
    </div>
  );
};

export default Works;
