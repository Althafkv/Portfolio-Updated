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
        "A full-stack E-commerce website built with React, Node, Express and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
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
        "Sky Real is a responsive hotel booking website built with React, designed to help users discover and book hotels with ease.",
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
        "Roxi Chat is a real-time messaging app built with the MERN stack and Socket.io. It features instant message updates, typing indicators, and a clean, responsive interface. The project helped me strengthen my skills in real-time communication and full-stack development.",
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
        "A modern, responsive SaaS analytics dashboard built with React.js and Tailwind CSS. Features interactive charts, data tables, search, filtering, and a clean, user-friendly interface.",
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
        "A modern, responsive portfolio website built with React to showcase my projects, skills, and professional background. Designed with a clean and intuitive UI, this site highlights my expertise in front-end development.",
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
        "A dynamic image gallery application built with React that allows users to upload, store, and view their photos in an organized, visually appealing interface.",
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
        "A responsive BMI (Body Mass Index) calculator web app that allows users to quickly determine their BMI by entering their height and weight.",
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
        "A fun, browser-based mini-game built with vanilla JavaScript, showcasing my ability to create engaging, interactive experiences with clean code and creative design.",
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
        "A dynamic fitness application designed to help users plan, track, and optimize their workouts. Built with React.js, this app demonstrates my ability to create interactive, data-driven interfaces with modern front-end technologies.",
      image: gym,
      technologies: ["React Js"],
      liveUrl: "https://gym-app-tan-xi.vercel.app/",
      githubUrl: "https://github.com/Althafkv/Gym-App",
      category: "dashboard",
    },
  ];

  const handleTouchStart = (e) => {
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
      {/* Main Carousel Container */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "16px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          backgroundColor: "white",
          transform: isAnimating ? "scale(0.98)" : "scale(1)",
          transition: "transform 0.3s ease",
          marginBottom: "30px",
          overflowX: window.innerWidth <= 768 ? "auto" : "hidden",
          scrollSnapType: window.innerWidth <= 768 ? "x mandatory" : "none",
          WebkitOverflowScrolling: "touch",
        }}
        onTouchStart={window.innerWidth <= 768 ? handleTouchStart : undefined}
        onTouchMove={window.innerWidth <= 768 ? handleTouchMove : undefined}
        onTouchEnd={window.innerWidth <= 768 ? handleTouchEnd : undefined}
      >
        {/* Project Card */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: window.innerWidth > 768 ? "1fr 1fr" : "1fr",
            minHeight: "500px",
          }}
        >
          {/* Project Image */}
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              backgroundColor: "#f3f4f6",
            }}
          >
            <img
              src={currentProject.image}
              loading="lazy"
              decoding="async"
              alt={currentProject.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease",
                transform: isAnimating ? "scale(1.05)" : "scale(1)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "100px",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.3), transparent)",
                pointerEvents: "none",
              }}
            ></div>
          </div>

          {/* Project Details */}
          <div
            style={{
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#1f2937",
                  margin: "0 0 16px 0",
                  opacity: isAnimating ? 0.7 : 1,
                  transition: "opacity 0.3s ease",
                }}
              >
                {currentProject.title}
              </h3>

              <p
                style={{
                  color: "#6b7280",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  margin: "0 0 24px 0",
                  textAlign: "justify",
                }}
              >
                {currentProject.description}
              </p>

              {/* Technologies */}
              <div style={{ marginBottom: "32px" }}>
                <h4
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    color: "#6b7280",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    margin: "0 0 12px 0",
                  }}
                >
                  Technologies
                </h4>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {currentProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      style={{
                        padding: "6px 12px",
                        backgroundColor: "#007F73",
                        color: "white",
                        borderRadius: "20px",
                        fontSize: "0.85rem",
                        fontWeight: "500",
                        cursor: "pointer",
                        transition: "transform 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.transform = "scale(1.05)")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.transform = "scale(1)")
                      }
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                gap: "16px",
                flexDirection: window.innerWidth < 576 ? "column" : "row",
              }}
            >
              <a
                href={currentProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  backgroundColor: "#007F73",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  fontWeight: "600",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#006B5F";
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#007F73";
                  e.target.style.transform = "scale(1)";
                }}
              >
                👁️ View Live
              </a>
              <a
                href={currentProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  backgroundColor: "#1f2937",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  fontWeight: "600",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#111827";
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#1f2937";
                  e.target.style.transform = "scale(1)";
                }}
              >
                📁 View Code
              </a>
            </div>
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
          color: "#333333",
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
          background: "linear-gradient(145deg, #ffffff, #f5f5f5)",
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
          color: "#333333",
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
          background: "linear-gradient(145deg, #ffffff, #f5f5f5)",
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
          color: "#6b7280",
          fontWeight: "500",
        }}
      >
        {currentIndex + 1} of {projects.length}
      </div>
    </div>
  );
};

export default Works;
