import { FiLink } from "react-icons/fi";
import {
  SiBootstrap, SiCss3, SiExpress, SiGit, SiGithub, SiHtml5, SiJavascript,
  SiMongodb, SiNodedotjs, SiReact, SiRedux, SiTailwindcss, SiTypescript,
  SiWordpress, SiVite, SiFigma,
} from "react-icons/si";
import "./Skills.css";

const groups = [
  { title: "Frontend", skills: [
    ["React.js", SiReact], ["TypeScript", SiTypescript],
    ["JavaScript", SiJavascript], ["Redux", SiRedux],
    ["HTML5", SiHtml5], ["CSS3", SiCss3],
    ["Tailwind CSS", SiTailwindcss], ["Bootstrap", SiBootstrap],
  ] },
  { title: "Backend", skills: [
    ["Node.js", SiNodedotjs], ["Express.js", SiExpress],
    ["MongoDB", SiMongodb], ["REST APIs", FiLink],
  ] },
  { title: "Tools", skills: [
    ["Git", SiGit], ["GitHub", SiGithub], ["WordPress", SiWordpress],
    ["Vite", SiVite], ["Figma", SiFigma],
  ] },
];

export default function Skills() {
  return (
    <section className="skills section" id="skills" aria-labelledby="skills-heading">
      <h2 className="section-title" id="skills-heading">Skills</h2>
      <div className="stack-grid container">
        {groups.map(({ title, skills }) => (
          <div className="stack-panel" key={title}>
            <h3>{title}</h3>
            <ul className="stack-list">
              {skills.map(([name, Icon]) => (
                <li key={name}><Icon aria-hidden="true" />{name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
