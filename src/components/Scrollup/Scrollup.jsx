import "./Scrollup.css";
import { IoIosArrowUp } from "react-icons/io";

function Scrollup() {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });

  return (
    <a href="#" className="scrollup">
        <IoIosArrowUp className="scrollup-icon" />
    </a>
  );
}

export default Scrollup;
