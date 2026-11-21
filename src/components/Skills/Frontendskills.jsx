import { LuBadgeCheck } from "react-icons/lu";
import { MdNotes } from "react-icons/md";

function Frontendskills() {
  return (
    <div className="skills-content">
      <h3 className="skills-title"><MdNotes /></h3>

      <div className="skills-box">
        <div className="skills-group">
          <div className="skills-data">
          <LuBadgeCheck />
            <div>
              <h3 className="skills-name">ReactJs</h3>
            </div>
          </div>

          <div className="skills-data">
          <LuBadgeCheck />

            <div>
              <h3 className="skills-name">ExpressJs</h3>
            </div>
          </div>

          <div className="skills-data">
          <LuBadgeCheck />

            <div>
              <h3 className="skills-name">HTML</h3>
            </div>
          </div>
        </div>

        <div className="skills-group">
          <div className="skills-data">
          <LuBadgeCheck />

            <div>
              <h3 className="skills-name">NodeJs</h3>
            </div>
          </div>

          <div className="skills-data">
          <LuBadgeCheck />

            <div>
              <h3 className="skills-name">MongoDB</h3>
            </div>
          </div>

          <div className="skills-data">
          <LuBadgeCheck />

            <div>
              <h3 className="skills-name">CSS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frontendskills;
