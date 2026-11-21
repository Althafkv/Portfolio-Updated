import { FaLinkedin, FaGithub, FaInstagramSquare  } from "react-icons/fa";

function Social() {
  return (
    <div className="home-social">
      <a
        style={{ color: "#007F73" }}
        href="https://www.linkedin.com/in/althafkv"
        className="home-social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>

      <a
        style={{ color: "#007F73" }}
        href="https://github.com/Althafkv"
        className="home-social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>

      <a
        style={{ color: "#007F73" }}
        href="https://www.instagram.com/althaf.kv_"
        className="home-social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagramSquare />
      </a>
    </div>
  );
}

export default Social;
