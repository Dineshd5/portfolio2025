import { NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  // Active and normal link styles
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#ff9098] border-b-2 border-[#ff9098] pb-1 transition-all duration-300"
      : "text-white hover:text-[#bb9295] transition-all duration-300";

  return (
    <div className="w-screen fixed z-10 h-[103px] flex items-center justify-between px-[100px] bg-white/4 backdrop-blur-md">
      {/* Logo */}
      <div>
        <img src={Logo} className="w-32 h-12" alt="Logo" />
      </div>

      {/* Navigation Links */}
      <div className="flex gap-[80px] text-[20px] px-5 py-2 rounded-xl bg-[rgb(255,255,255,10%)] border-2 border-transparent">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
        <NavLink to="/projects" className={linkClass}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>
      </div>

      {/* Button */}
      <div>
        <button className="px-4 py-2 rounded-md bg-gradient-to-r from-[#ea424a] to-[#692929cb] text-white font-semibold hover:opacity-90 transition-opacity duration-300 cursor-pointer">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Navbar;
