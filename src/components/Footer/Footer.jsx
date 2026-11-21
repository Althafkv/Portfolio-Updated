import "./Footer.css";
import { FaInstagramSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import Particles from "../Particles/Particles";

function Footer() {
  return (
    <footer className="footer">
      {/* Particles as background */}
      <div className="footer-particles">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={100}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="footer-container container">
        <h1 className="footer-title" style={{ color: "var(--brand-ink, #007F73)" }}>
          Portfolio.
        </h1>

        <ul className="footer-list">
          <li>
            <a href="#about" className="footer-link">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="footer-link">
              Contact
            </a>
          </li>
          <li>
            <a href="#skills" className="footer-link">
              Skills
            </a>
          </li>
        </ul>

        <div className="takequiz">
          <a
            href="https://quizworldreact.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="quizbtn"
          >
            Take a Quiz
          </a>
        </div>

        <div className="footer-social">
          <a
            style={{ backgroundColor: "#007F73" }}
            href="https://instagram.com/althaf.kv_"
            className="footer-social-link"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagramSquare />
          </a>
          <a
            style={{ backgroundColor: "#007F73" }}
            href="https://www.linkedin.com/in/althafkv"
            className="footer-social-link"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            style={{ backgroundColor: "#007F73" }}
            href="https://github.com/Althafkv"
            className="footer-social-link"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>

        <span className="footer-copy">
          All Rights Reserved &#169; Althaf Kv - 2025
        </span>
      </div>
    </footer>
  );
}

export default Footer;
