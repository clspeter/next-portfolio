import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

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

      <div className="flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-0 md:p-10">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default Experience;
