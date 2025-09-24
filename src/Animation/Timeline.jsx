import { useEffect, useRef, useState } from "react";

const Timeline = () => {
  const itemsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const timelineData = [
    {
      title: "AutoCAD Draftsman",
      company: "Maha Associates, Tirupur",
      period: "2022 – 2023 | Tirupur",
      description: [
        "Created detailed floor plans, DTCP approval drawings, and layout plans.",
        "Worked on residential and commercial project designs using AutoCAD.",
        "Gained practical experience in civil drafting and industry workflows.",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "Nextskill Technologies Pvt. Ltd., Coimbatore",
      period: "05/2024 – 07/2024 | Coimbatore",
      description: [
        "Developed responsive and interactive user interfaces using React.js.",
        "Utilized modern front-end libraries to enhance performance and user experience.",
      ],
    },
    {
      title: "React Native Intern",
      company: "ItBoomi, Tirupur",
      period: "06/2025 – Present | Tirupur",
      description: [
        "Built cross-platform mobile applications using React Native CLI (without Expo).",
        "Developed features replicating modern service-based apps (beauty/home services).",
        "Implemented smooth animations, carousel sliders, custom bottom navigation, and multiple UI components optimized for mobile.",
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      itemsRef.current.forEach((el, index) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          const offsetTop = rect.top + window.scrollY;
          if (window.scrollY >= offsetTop - 200) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <ul className="relative max-w-4xl mx-auto py-12">
        {/* central spine */}
        <div className="absolute -left-3 md:left-1/2 top-0 h-full w-1 md:-translate-x-1/2 bg-[#F8898F]/40">
          <div
            className="w-1 bg-[#F2676E] transition-all duration-500 ease-out origin-top"
            style={{
              height: `${((activeIndex + 1) / timelineData.length) * 100}%`,
            }}
          />
        </div>

        {timelineData.map((item, i) => (
          <li
            key={i}
            ref={(el) => (itemsRef.current[i] = el)}
            className="relative flex flex-col md:flex-row justify-between items-start mb-16"
          >
            {/* Left side */}
            <div className="w-full md:w-5/12 ml-4 md:ml-0 md:text-right md:pr-8 mb-4 md:mb-0">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                {item.company}
              </p>
              <p className="text-xs sm:text-sm text-gray-400">{item.period}</p>
            </div>

            {/* Circle */}
            <div className="absolute md:relative z-10 flex items-center justify-center mb-4 -ml-5.5 md:ml-0 md:mb-0">
              <span
                className={`w-6 h-6 rounded-full border-4 transition-colors ${
                  i <= activeIndex
                    ? "border-[#F2676E] bg-white animate-pulse"
                    : "border-[#F8898F] bg-white/20"
                }`}
              />
            </div>

            {/* Right side */}
            <div className="w-full ml-4 md:ml-0 md:w-5/12  md:text-left">
              <ul className="list-disc text-white/80 leading-relaxed">
                {item.description.map((desc, idx) => (
                  <li key={idx} className="mb-2 text-sm sm:text-base">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
