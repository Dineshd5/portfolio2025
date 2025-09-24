import { useEffect, useState } from "react";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Change active state based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY + window.innerHeight / 2 >= el.offsetTop) {
          current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (name) =>
    active === name
      ? "text-[#ff9098] border-b-2 border-[#ff9098] pb-1 transition-all duration-300"
      : "text-white hover:text-[#bb9295] transition-all duration-300";

  return (
    <div className="w-screen fixed z-10 h-[80px] sm:h-[90px] md:h-[103px] flex items-center justify-between px-4 sm:px-8 md:px-[100px] bg-white/4 backdrop-blur-md">
      {/* Logo */}
      <div>
        <img src={Logo} className="w-28 sm:w-32 h-auto" alt="Logo" />
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex gap-6 lg:gap-[80px] text-sm sm:text-base md:text-lg lg:text-xl px-4 py-2 rounded-xl bg-[rgb(0,0,0,50%)] border-2 border-white">
        <a href="#home" className={linkClass("home")}>
          Home
        </a>
        <a href="#about" className={linkClass("about")}>
          About
        </a>
        <a href="#projects" className={linkClass("projects")}>
          Projects
        </a>
        <a href="#contact" className={linkClass("contact")}>
          Contact
        </a>
      </div>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <a
          href="/Dinesh_Resume-1.pdf"
          download="Dinesh_Resume.pdf"
          className="px-4 py-2 rounded-md bg-gradient-to-r from-[#ea424a] to-[#692929cb] text-white font-semibold hover:opacity-90 transition-opacity duration-300 cursor-pointer"
        >
          Download CV
        </a>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-black/80 backdrop-blur-md flex flex-col items-center gap-6 py-6 md:hidden">
          <a
            href="#home"
            className={linkClass("home")}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className={linkClass("about")}
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className={linkClass("projects")}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={linkClass("contact")}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href="/Dinesh_Resume-1.pdf"
            download="Dinesh_Resume.pdf"
            className="px-4 py-2 rounded-md bg-gradient-to-r from-[#ea424a] to-[#692929cb] text-white font-semibold hover:opacity-90 transition-opacity duration-300 cursor-pointer"
          >
            Download CV
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
