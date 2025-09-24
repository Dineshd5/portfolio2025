import top from "../assets/images/top.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-10 flex flex-col items-center space-y-4 z-20 relative">
      {/* Clickable placeholder image */}
      <img
        src={top}
        alt="Back to Top"
        className="w-8 h-8 object-cover cursor-pointer"
        onClick={scrollToTop}
      />

      {/* Clickable heading */}
      <h2
        className="text-xl md:text-2xl font-bold text-[#F2676E] cursor-pointer hover:text-[#F8898F] transition-colors duration-300"
        onClick={scrollToTop}
      >
        Back to Top
      </h2>
    </footer>
  );
};

export default Footer;
