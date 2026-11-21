import { useState, useEffect } from "react";
import "./Darkmode.css";

function Darkmode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // ✅ Always start in light mode
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
    setIsDark(false);
  }, []);

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      setDark();
    } else {
      setLight();
    }
  };

  return (
    <div className="toggle-theme-wrapper">
      <button
        onClick={toggleTheme}
        className={`theme-toggle ${isDark ? "dark" : "light"}`}
        aria-label="Toggle dark mode"
      >
        <div className="toggle-track">
          <div className="toggle-thumb">
            <div className="thumb-icon">
              {isDark ? (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              ) : (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              )}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default Darkmode;
