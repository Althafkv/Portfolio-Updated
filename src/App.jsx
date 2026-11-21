import { useEffect } from "react";
import About from "./components/About/About";
import Chatbot from "./components/Chatbot/Chatbot";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Qualification from "./components/Qualifications/Qualifications";
import Scrollup from "./components/Scrollup/Scrollup";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import MagicCursor from "./components/effects/MagicCursor";

function App() {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <MagicCursor />
      <Header />
      <div className="main">
        <Home />
        <About />
        <Qualification />
        <Skills />
        <Work />
        <Contact />
      </div>
      <Footer />
      <Chatbot />
      <Scrollup />
    </>
  );
}

export default App;
