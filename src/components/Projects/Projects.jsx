
import { ProjectsData } from "../../constants";
import ProjectBox from "./ProjectBox";

const Projects = () => {
  return (
    <section className="bg-[#0e1015] py-96 overflow-hidden">
      <div className="flex flex-col justify-center items-center h-full text-center">
        <div className="max-w-4xl">
          <h3 className="text-[#fff] mb-6 text-[15px] leading-[33px] md:text-[30px] md:leading-[64px] font-[400] ">
            Our Latest Projects
          </h3>
          <p className="text-[#fff] mb-10 font-normal text-[12px] md:text-[14px]">
            Here is our latest projects. {`You'll`} love them!
          </p>
        </div>
        <div className="flex flex-wrap m-0 p-0">
          {ProjectsData.map((project, i) => (
            <ProjectBox key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
