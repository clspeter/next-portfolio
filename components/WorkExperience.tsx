import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "@/typing";
import experience from "@/next-portfolio-sanity/schemas/experience";

type Props = { experiences: Experience[] };

const Experience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="text left relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden p-4 md:flex-row md:p-10"
    >
      <h3 className="absolute top-20 text-2xl font-semibold uppercase tracking-[15px] text-gray-500 md:top-24">
        Experience
      </h3>

      <div className="flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-blue-500 md:p-10">
        {props.experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
