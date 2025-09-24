import "swiper/css";
import "swiper/css/autoplay"; // optional, sometimes needed
import { Autoplay } from "swiper/modules"; // import Autoplay module
import { Swiper, SwiperSlide } from "swiper/react";

const ProjectCarousel = ({ projects }) => (
  <Swiper
    modules={[Autoplay]} // register the module here
    spaceBetween={30}
    slidesPerView={3}
    loop={true}
    autoplay={{ delay: 2500, disableOnInteraction: false }}
  >
    {projects.map((project, i) => (
      <SwiperSlide key={i}>
        <div className="bg-white p-4 rounded shadow text-black h-[300px] flex flex-col">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover rounded"
          />
          <h3 className="mt-2 font-bold">{project.title}</h3>
          <p className="text-sm line-clamp-3">{project.description}</p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default ProjectCarousel;
