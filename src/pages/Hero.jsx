import { useState } from "react";
import SplitText from "../Animation/SplitText";
import deadpool1 from "../assets/images/deadpool1.png";
import deadpool2 from "../assets/images/deadpool2.png";

const Hero = () => {
  const [hovered, setHovered] = useState(false); // state for hover

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center z-5 px-[100px]"
    >
      {/* Content */}
      <div className="relative flex-1 flex-col items-start justify-center  ">
        {/* Greeting */}
        <SplitText
          text="Hi, I'm Dinesh."
          className="text-5xl md:text-6xl font-bold text-white mb-4"
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
          className="text-2xl md:text-3xl font-semibold text-white mb-6"
          delay={80}
          duration={0.6}
          splitType="chars"
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0}
        />

        {/* Description - 2 lines */}
        <div className="flex flex-col gap-2 items-start">
          <SplitText
            text="I enjoy solving real-world problems with code,"
            className="text-lg md:text-xl text-gray-300 font-normal"
            delay={50}
            duration={0.6}
            splitType="chars"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0}
          />
          <SplitText
            text="and I'm constantly learning and experimenting with new technologies."
            className="text-lg md:text-xl text-gray-300 font-normal"
            delay={50}
            duration={0.6}
            splitType="chars"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0}
          />
        </div>

        {/* Call to Action */}
        <button className="mt-8 px-6 py-3 bg-white/5 cursor-pointer transition rounded-lg border border-[#F8898F] text-white font-semibold text-lg">
          Contact Me
        </button>
      </div>

      {/* Hover Image */}
      <div
        className="w-[534px] h-[494px] rounded-2xl  overflow-hidden relative top-10  "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={hovered ? deadpool2 : deadpool1}
          alt="Deadpool"
          className="w-full h-full object-cover  transition-all duration-300"
        />
      </div>
    </section>
  );
};

export default Hero;
