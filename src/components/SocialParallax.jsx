import { useEffect, useRef } from "react";
import facebook from "../assets/socialImages/facebook.png";
import instagram from "../assets/socialImages/instagram.png";
import linkedin from "../assets/socialImages/linkedin.png";

const socialLinks = [
  { name: "GitHub", image: facebook, link: "https://github.com/Dineshd5" },
  {
    name: "LinkedIn",
    image: linkedin,
    link: "https://linkedin.com/in/your-profile",
  },
  {
    name: "Instagram",
    image: instagram,
    link: "https://instagram.com/your-profile",
  },
];

const SocialParallax = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const items = container.children;
      const containerRect = container.getBoundingClientRect();

      for (let item of items) {
        const itemRect = item.getBoundingClientRect();
        // Calculate horizontal offset based on container center
        const offset =
          containerRect.left +
          containerRect.width / 2 -
          (itemRect.left + itemRect.width / 2);
        // Apply transform for parallax effect
        item.style.transform = `translateY(${offset * 0.05}px) scale(${
          1 + Math.abs(offset * 0.001)
        })`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="w-full overflow-x-auto py-6 flex justify-center"
      ref={containerRef}
    >
      <div className="flex gap-10 px-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 flex-shrink-0 transition-transform duration-300 hover:scale-110"
          >
            <img
              src={social.image}
              alt={social.name}
              className="w-16 h-16 object-cover rounded-full"
            />
            <span className="text-sm text-black">{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialParallax;
