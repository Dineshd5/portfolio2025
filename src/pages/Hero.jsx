import { useState } from "react";
import SplitText from "../Animation/SplitText";
import deadpool1 from "../assets/images/deadpool1.png";
import deadpool2 from "../assets/images/deadpool2.png";

const Hero = () => {
  const [hovered, setHovered] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative z-5 mt-10 lg:mt-0 min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-4 sm:px-8 md:px-[100px] py-12"
    >
      {/* Content */}
      <div className="flex-1 flex flex-col items-start justify-center text-left">
        {/* Greeting */}
        <SplitText
          text="Hi, I'm Dinesh."
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          delay={100}
          duration={0.6}
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0}
        />

        {/* Title */}
        <SplitText
          text="Full-Stack Developer (MERN & React Native)"
          className="text-lg sm:text-xl md:text-3xl font-semibold text-white mb-6"
          delay={80}
          duration={0.6}
          splitType="chars"
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0}
        />

        {/* Description */}
        <div className="flex flex-col gap-2 items-start md:items-start">
          <SplitText
            text="I enjoy solving real-world problems with code,"
            className="text-base sm:text-lg md:text-xl  text-gray-300 font-normal"
            delay={50}
            duration={0.6}
            splitType="chars"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0}
          />
          <SplitText
            text="and I'm constantly learning and experimenting with new technologies."
            className="text-base sm:text-lg md:text-xl text-gray-300 font-normal"
            delay={50}
            duration={0.6}
            splitType="chars"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0}
          />
        </div>

        {/* Call to Action */}
        <button
          onClick={scrollToContact}
          className="mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-white/5 cursor-pointer transition rounded-lg border border-[#F8898F] text-white font-semibold text-base sm:text-lg"
        >
          Contact Me
        </button>
      </div>

      {/* Hover Image */}
      <div
        className="w-full sm:w-3/4 md:w-[534px] rounded-2xl overflow-hidden relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={hovered ? deadpool2 : deadpool1}
          alt="Deadpool"
          className="w-full h-auto object-cover transition-all duration-300"
        />
      </div>
    </section>
  );
};

export default Hero;
