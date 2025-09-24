import deadpoolheart from "../assets/images/deadpoolheart.png";
import SocialScroll from "../components/SocialScroll";
const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden  h-[100%] mb-[64px] mt-[64px] z-5 flex  mx-[100px] rounded-3xl bg-white/5 border border-[#F8898F]"
    >
      {/* About me */}
      <div className="p-7 flex flex-col space-y-12 flex-1 ">
        <h1 className="text-3xl text-[#F2676E] font-extrabold">Contact</h1>
        <div className="space-y-12 ">
          <p className="text-[22px] font-medium">
            If you want to discuss more in detail you can contact me
          </p>
        </div>
        <div>
          <button className="px-4 py-2 rounded-md bg-gradient-to-r from-[#ea424a] to-[#692929cb] text-white text-lg font-semibold hover:opacity-90 transition-opacity duration-300 cursor-pointer">
            Download CV
          </button>
        </div>
        <div className="absolute right-100 top-45">
          <img className="w-[300px]" src={deadpoolheart} alt="" />
        </div>
      </div>
      <SocialScroll />
    </section>
  );
};

export default Contact;
