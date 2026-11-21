import { Monitor, FileText, Headphones } from "lucide-react";

function Aboutinfo() {
  return (
    <div className="about-info grid">
      <div className="about-box">
      <div className="icon-wrapper"><Monitor  className="about-icon"/></div >

        <h3 className="about-title">Developer</h3>
        <span className="about-subtitle">React & Frontend</span>
      </div>

      <div className="about-box">
      <FileText className="about-icon" />

        <h3 className="about-title">Completed</h3>
        <span className="about-subtitle">15+ Projects</span>
      </div>

      <div className="about-box">
      <Headphones className="about-icon" />

        <h3 className="about-title">Support</h3>
        <span className="about-subtitle">Online 24/7</span>
      </div>
    </div>
  );
}

export default Aboutinfo;
