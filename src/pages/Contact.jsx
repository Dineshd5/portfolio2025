import deadpoolheart from "../assets/images/deadpoolheart.png";
import SocialScroll from "../components/SocialScroll";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden gap-8 mb-16 mt-16 z-5 flex flex-col lg:flex-row justify-between md:justify-between mx-4 sm:mx-8 md:mx-[100px] rounded-3xl bg-white/5 border border-[#F8898F]"
    >
      {/* Left content */}
      <div className="p-7 flex flex-col space-y-12 flex-1 relative">
        <h1 className="text-2xl sm:text-3xl text-[#F2676E] font-extrabold">
          Contact
        </h1>

        <p className="text-base sm:text-lg md:text-[22px] font-medium">
          If you want to discuss more in detail you can contact me
        </p>

        <div>
          <a href="/Dinesh_Resume-1.pdf" download="Dinesh_Resume.pdf">
            <button className="px-4 py-2 rounded-md bg-gradient-to-r from-[#ea424a] to-[#692929cb] text-white text-base sm:text-lg font-semibold hover:opacity-90 transition-opacity duration-300 cursor-pointer">
              Download CV
            </button>
          </a>
        </div>
      </div>

      {/* Right content */}
      <div className=" flex-1 flex justify-end">
        <SocialScroll />
      </div>
      {/* Decorative Image */}
      <div className="absolute left-150 md:top-45 hidden sm:block">
        <img
          className="w-40 sm:w-56 md:w-72"
          src={deadpoolheart}
          alt="Deadpool Heart"
        />
      </div>
    </section>
  );
};

export default Contact;
