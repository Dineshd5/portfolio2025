import EmailIcon from "../assets/socialImages/email.png";
import github from "../assets/socialImages/github.png";
import linkedin from "../assets/socialImages/linkedin.png";
import x from "../assets/socialImages/twitter.png";

const socialLinks = [
  { name: "GitHub", image: github, link: "https://github.com/Dineshd5" },
  {
    name: "LinkedIn",
    image: linkedin,
    link: "https://www.linkedin.com/in/dinesh-selvakumar/",
  },
  {
    name: "Email",
    image: EmailIcon,
    link: "mailto:dineshcivilians6@gmail.com",
  },
  { name: "X", image: x, link: "https://twitter.com/your-profile" },
];

const SocialScroll = () => {
  return (
    <div
      className="p-4 sm:p-6 rounded-tr-2xl rounded-br-2xl border border-white/20
                 bg-white/10 backdrop-blur-sm shadow-xl
                 transform hover:scale-[1.01] transition-transform duration-300
                 flex flex-col flex-1 space-y-3 sm:space-y-4 w-full max-w-full sm:max-w-sm"
    >
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-lg
                     bg-white/5 hover:bg-white/15
                     transition-all duration-300 group
                     transform hover:translate-x-1"
        >
          <img
            src={social.image}
            alt={social.name}
            className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-base sm:text-lg md:text-xl font-semibold text-white/90 transition-colors duration-300 group-hover:text-white">
            {social.name}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialScroll;
