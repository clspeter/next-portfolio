import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/typing";
import { urlFor } from "@/sanity";

type Props = { projects: Project[] };

const Projects = ({ projects }: Props) => {
  return (
    <div className="relative mx-auto flex h-screen w-screen flex-col items-center justify-evenly overflow-hidden text-left md:flex-row">
      <h3 className="absolute top-14 text-2xl uppercase tracking-[20px] text-gray-500 md:top-24">
        Projects
      </h3>

      <div className="relative z-20 mt-4 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-blue-500">
        {projects.map((project, i) => (
          <div
            className="items-cneter flex max-h-screen w-screen flex-shrink-0 snap-center flex-col justify-center space-y-5 p-3 md:p-44"
            key={project._id}
          >
            <motion.img
              initial={{ opacity: 0, y: -200 }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-auto self-center h-64 md:h-96"
              src={urlFor(project.image).url()}
            />
            <div className="flex flex-col items-center space-y-4">
              <h4 className="text-center text-3xl font-bold">
                {project.title}
              </h4>
              <p className="max-w-5xl text-center">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-blue-500/10"></div>
    </div>
  );
};

export default Projects;
