// src/assets/projects.js
import doctor from "./images/doctor.png";
import ecommerce from "./images/ecom.png";
import mobile from "./images/mobile.png";
import movie from "./images/movie.png";

export const projectsData = [
  {
    title: "React Native App",
    image: mobile,
    description:
      "Built cross-platform mobile app using React Native CLI with animations, carousel sliders, and custom bottom navigation.",
  },
  {
    title: "E-commerce Website",
    image: ecommerce,
    description:
      "Full-stack MERN e-commerce platform with user & admin panels, cart system, and payment integration.",
    liveLink: "https://forever-frontend-beta-seven.vercel.app",
    githubLink: "https://github.com/Dineshd5/MERN-Ecommerce",
  },
  {
    title: "Movie App",
    image: movie,
    description: "A full-stack movie booking application using MERN stack.",
    liveLink:
      "https://movie-mania-5e0edfow3-dineshs-projects-83ee3177.vercel.app",
    githubLink: "https://github.com/Dineshd5/MovieMania",
  },
  {
    title: "Bridge Landing Page",
    image: doctor,
    description:
      "A modern, responsive landing page built with React and Styled Components, featuring smooth animations, interactive UI elements, and a sleek, professional design.",
    liveLink: "https://bridj.in/",
  },
];
