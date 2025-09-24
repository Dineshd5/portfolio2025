import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProjectCarousel = ({ projects }) => (
  <Swiper
    modules={[Autoplay]}
    spaceBetween={30}
    slidesPerView={3}
    loop={true}
    autoplay={{ delay: 2500, disableOnInteraction: false }}
  >
    {projects.map((project, i) => (
      <SwiperSlide key={i}>
        <div className="bg-white p-4 rounded shadow text-black h-[300px] flex flex-col relative group overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover rounded"
          />
          <h3 className="mt-2 font-bold">{project.title}</h3>
          <p className="text-sm line-clamp-3">{project.description}</p>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 rounded">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="bg-[#F2676E] text-white px-3 py-1 rounded hover:bg-[#F8898F]"
              >
                Live Demo
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="bg-[#333] text-white px-3 py-1 rounded hover:bg-[#555]"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default ProjectCarousel;
