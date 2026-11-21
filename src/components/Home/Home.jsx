import "./Home.css";
import Social from "./Social";
import Data from "./Data";
import Scrolldown from "./Scrolldown";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function Home() {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="section home section"
      id="home"
    >
      <div className="home-container container grid">
        <div className="home-content grid">
          <Social />
          <div className="home-img"></div>
          <Data />
        </div>
        <Scrolldown />
      </div>
    </motion.div>
  );
}

export default Home;
