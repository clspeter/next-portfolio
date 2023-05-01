import React from "react";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="relative mx-auto flex h-screen max-w-full flex-col justify-evenly overflow-hidden text-left md:flex-row">
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Projects
      </h3>
      <div className="absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-[#F7AB0A]/10"></div>
    </div>
  );
};

export default Projects;
