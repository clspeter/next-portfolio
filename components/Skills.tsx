import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="md:test-left max-w-2000px relative mx-auto flex h-screen min-h-screen flex-col items-center justify-center text-center xl:flex-row xl:px-10"
    >
      <h3 className="absolute top-24  text-2xl uppercase tracking-[20px] text-gray-500">
        Skills
        <p className="mt-4 text-sm tracking-[3px]">
          Hover over a skill for currency proficiency
        </p>
      </h3>
    </motion.div>
  );
};

export default Skills;
