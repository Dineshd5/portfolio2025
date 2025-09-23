import { Route, Routes } from "react-router-dom";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Hero from "../src/pages/Hero";
import Projects from "../src/pages/Projects";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div className="bg-black w-screen text-white h-screen ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
