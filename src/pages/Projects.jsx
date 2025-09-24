import { projectsData } from "../assets/projects";
import ProjectCarousel from "../components/ProjectCarousel";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative z-5 mt-10 px-4 sm:px-8 md:px-[100px]"
    >
      <div className="relative overflow-hidden px-7 py-7 space-y-6 rounded-3xl bg-white/5 border border-[#F8898F]">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#F2676E] font-extrabold">
          Projects
        </h1>
        <ProjectCarousel projects={projectsData} />
      </div>
    </section>
  );
};

export default Projects;
