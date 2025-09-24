import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Hero from "../src/pages/Hero";
import Projects from "../src/pages/Projects";
import LogoLoop from "./Animation/LogoLoop";
import { skill_Logos } from "./assets/assets.js";
import ArcBlur from "./components/ArcBlur";
import CircleBlur from "./components/CircleBlur";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div className=" relative z-0 font-[ruda] w-screen bg-black text-white h-vh">
      <Navbar />
      <Hero />
      {/* Decorative Blurs */}
      <CircleBlur left="500px" top="100px" />
      <ArcBlur top="50px" left="50px" />
      <CircleBlur left="500px" top="100px" />
      <About />
      <CircleBlur left="10px" top="800px" />
      <LogoLoop
        logos={skill_Logos}
        speed={100} // adjust speed
        direction="left"
        logoHeight={50}
        gap={40}
        pauseOnHover={true}
        fadeOut={true}
        scaleOnHover={true}
        className="my-16"
      />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
