import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row">
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Projects
      </h3>

      <div className="relative z-20 mt-4 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll">
        {projects.map((project, i) => (
          <div
            className="items-cneter flex max-h-screen w-screen flex-shrink-0 snap-center flex-col justify-center space-y-5 p-10 md:p-44"
            key={i}
          >
            <motion.img
              initial={{ opacity: 0, y: -300 }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-fit self-center md:h-96"
              src="/train.png"
            />
            <div>
              <h4>
                Train Schedule App {i + 1} of {projects.length}
              </h4>
              <p>
                Going by a range of names, including “Product Tour” and
                “Tutorial”, you’ve definitely seen these in 95% of the apps you
                have downloaded. Right after the splash screen, you’ll be
                presented with a series of screens which tell you what the app
                does, and how you can do it. The vast majority take the form of
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-[#F7AB0A]/10"></div>
    </div>
  );
};

export default Projects;
