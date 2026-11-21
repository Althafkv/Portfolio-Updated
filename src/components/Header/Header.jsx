import { useState } from "react";
import "./Header.css";
import Darkmode from "../Darkmode/Darkmode";
import { IoApps } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { FiHome, FiUser } from "react-icons/fi";
import { FaGraduationCap, FaRegFileLines } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";

function Header() {
  // change background header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const [toggle, setToggle] = useState(false);
  const [activenav, setActivenav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav-logo" style={{ color: "#007F73" }}>
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
