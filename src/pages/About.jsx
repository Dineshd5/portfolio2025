import Timeline from "../Animation/Timeline.jsx";
import deadpoolsit from "../assets/images/deadpoolsit.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen z-5 flex items-center px-4 sm:px-8 md:px-[100px] py-12"
    >
      {/* About me container */}
      <div className="w-full relative overflow-hidden flex flex-col p-6 sm:p-8 lg:p-10 items-start justify-center space-y-6 rounded-3xl bg-white/5 border border-[#F8898F]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#F2676E] font-extrabold">
          About Me
        </h1>

        <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed">
          I started my journey as a Civil Engineering diploma graduate, but my
          curiosity for technology led me into software development. I'm now
          focused on building full-stack applications using the MERN stack.
        </p>

        <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed">
          I enjoy solving real-world problems with code, and constantly learning
          and experimenting with new technologies.
        </p>

        {/* Decorative image - hidden on small screens */}
        <div className="hidden lg:block absolute right-15 top-58">
          <img
            className="w-[150px] md:w-[200px]"
            src={deadpoolsit}
            alt="Deadpool sitting"
          />
        </div>

        {/* Experience box */}
        <div className="w-full relative mt-12 md:mt-20 overflow-hidden min-h-[250px] flex flex-col px-6 sm:px-8 md:px-10 py-6 sm:py-8 items-start space-y-6 rounded-3xl bg-white/5 border border-[#F8898F]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#F2676E] font-extrabold">
            Experience
          </h1>
          <Timeline />
        </div>
      </div>
    </section>
  );
};

export default About;
