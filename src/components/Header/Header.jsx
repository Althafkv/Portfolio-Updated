import { useEffect, useState } from "react";
import "./Header.css";
import Darkmode from "../Darkmode/Darkmode";
import { IoApps } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { FiHome, FiUser } from "react-icons/fi";
import { FaGraduationCap, FaRegFileLines } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [activenav, setActivenav] = useState("#home");

  useEffect(() => {
    const header = document.querySelector(".header");
    const sections = Array.from(header.querySelectorAll(".nav-link"), link =>
      document.getElementById(link.hash.slice(1))
    ).filter(Boolean);

    function updateNavigation() {
      header.classList.toggle("scroll-header", window.scrollY >= 80);
      const threshold = window.innerHeight / 3;
      let current = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top > threshold) break;
        current = section;
      }
      if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1) {
        current = sections[sections.length - 1];
      }
      if (current) setActivenav("#" + current.id);
    }

    updateNavigation();
    window.addEventListener("scroll", updateNavigation, { passive: true });
    window.addEventListener("resize", updateNavigation);
    return () => {
      window.removeEventListener("scroll", updateNavigation);
      window.removeEventListener("resize", updateNavigation);
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav-logo" style={{ color: "var(--brand-ink, #007F73)" }}>
          Portfolio.
        </a>

        <div className={toggle ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list grid">
            <li className="nav-item">
              <a
                style={{ fontWeight: "bold" }}
                href="#home"
                onClick={() => setActivenav("#home")}
                className={
                  activenav === "#home" ? "nav-link active-link" : "nav-link"
                }
              >
                <FiHome className="nav-icon" />
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => setActivenav("#about")}
                className={
                  activenav === "#about" ? "nav-link active-link" : "nav-link"
                }
              >
                <FiUser className="nav-icon" />
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#qualification"
                onClick={() => setActivenav("#qualification")}
                className={
                  activenav === "#qualification"
                    ? "nav-link active-link"
                    : "nav-link"
                }
              >
                <FaGraduationCap className="nav-icon" />
                Qualification
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#skills"
                onClick={() => setActivenav("#skills")}
                className={
                  activenav === "#skills" ? "nav-link active-link" : "nav-link"
                }
              >
                <FaRegFileLines className="nav-icon" />
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projects"
                onClick={() => setActivenav("#projects")}
                className={
                  activenav === "#projects"
                    ? "nav-link active-link"
                    : "nav-link"
                }
              >
                <FaLaptop className="nav-icon" />
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => setActivenav("#contact")}
                className={
                  activenav === "#contact" ? "nav-link active-link" : "nav-link"
                }
              >
                <RiMessage3Fill className="nav-icon" />
                Contact
              </a>
            </li>
          </ul>

          <IoCloseSharp
            className="nav-close"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        <div className="nav-toggle" onClick={() => setToggle(!toggle)}>
          <IoApps />
        </div>
        <Darkmode />
      </nav>
    </header>
  );
}

export default Header;
