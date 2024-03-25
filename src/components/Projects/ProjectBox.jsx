const ProjectBox = ({ project }) => {
  const { title, img } = project;
  return (
    <div className="sm:w-[25%] relative cursor-pointer group sm:hover:brightness-75 hover:transition ease-in-out">
      <img
        src={img}
        alt={title}
        className="w-full h-full transition duration-500"
      />
      <div className="absolute bottom-[50%] sm:opacity-0 sm:bottom-[-100px] group-hover:opacity-100 group-hover:bottom-28 hover:transition duration-500 ease-in-out gap-5 justify-center items-center w-full text-center drop-shadow-md">
        <h4 className="text-white font-[600] hover:transition duration-300 ease-in-out text-center max-sm:text-lg leading-[28px] text-[24px]">
          {title}
        </h4>
      </div>
    </div>
  );
};

export default ProjectBox;
