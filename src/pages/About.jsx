import Timeline from "../Animation/TimeLine";
import deadpoolsit from "../assets/images/deadpoolsit.png";
const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen z-5 flex items-center px-[100px]"
    >
      {/* About me */}
      <div className="w-screen relative overflow-hidden  flex flex-col px-7 py-7 items-start justify-center space-y-6 rounded-3xl bg-white/5 border border-[#F8898F] ">
        <h1 className="text-3xl text-[#F2676E] font-extrabold">About Me</h1>
        <p className="text-[22px] font-medium">
          I started my journey as a Civil Engineering diploma graduate, but my
          curiosity for technology led me into software development.I'm now
          focused on building full-stack applications using the MERN stack.
        </p>
        <p className="text-[22px] font-medium">
          I enjoy solving real-world problems with code, and constantly learning
          and experimenting with new technologies.
        </p>
        {/* image */}
        <div className="absolute right-10 top-54">
          <img className="w-[200px] " src={deadpoolsit} alt="" />
        </div>

        {/* Experience */}
        <div className="w-[100%] relative mt-20 overflow-hidden min-h-[300px] flex flex-col px-7 py-7 items-start space-y-6 rounded-3xl bg-white/5 border border-[#F8898F] ">
          <h1 className="text-3xl text-[#F2676E] font-extrabold">Experience</h1>
          <Timeline />
        </div>
      </div>
    </section>
  );
};

export default About;
