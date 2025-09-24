import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Hero from "../src/pages/Hero";
import Projects from "../src/pages/Projects";
import LogoLoop from "./Animation/LogoLoop";
import { skill_Logos } from "./assets/assets.js";
import ArcBlur from "./components/ArcBlur";
import CircleBlur from "./components/CircleBlur";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer.jsx";
const App = () => {
  return (
    <div className="relative z-0 font-[ruda] bg-black text-white min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main className="relative z-0">
        <Hero />

        {/* Decorative Blurs */}
        <CircleBlur left="50%" top="10%" className="hidden md:block" />
        <ArcBlur top="5%" left="5%" className="hidden lg:block" />
        <About />
        <CircleBlur left="2%" top="1000px" className="hidden md:block" />

        <LogoLoop
          logos={skill_Logos}
          speed={100}
          direction="left"
          logoHeight={50}
          gap={40}
          pauseOnHover
          fadeOut
          scaleOnHover
          className="my-16 md:my-24"
        />

        <CircleBlur right="5%" top="2200px" className="hidden md:block" />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
