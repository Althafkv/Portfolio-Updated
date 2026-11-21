import { LuBadgeCheck } from "react-icons/lu";
import { MdNotes } from "react-icons/md";

function Backendskills() {
  return (
    <div className="skills-content">
      <h3 className="skills-title"><MdNotes /></h3>

      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
            <LuBadgeCheck />

            <div>
              <h3 className="skills-name">JavaScript</h3>
            </div>
          </div>

          <div className="skills-data">
            <LuBadgeCheck />

            <div>
              <h3 className="skills-name">Redux</h3>
            </div>
          </div>

          <div className="skills-data">
            <LuBadgeCheck />

            <div>
              <h3 className="skills-name">RestAPI</h3>
            </div>
          </div>
        </div>

        <div className="skills-group">
          <div className="skills-data">
            <LuBadgeCheck />

            <div>
              <h3 className="skills-name">Tailwind</h3>
            </div>
          </div>

          <div className="skills-data">
            <LuBadgeCheck />

            <div>
              <h3 className="skills-name">Bootstrap</h3>
            </div>
          </div>

          <div className="skills-data">
            <LuBadgeCheck />

            <div>
              <h3 className="skills-name">Git</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backendskills;
