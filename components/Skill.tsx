import { motion } from "framer-motion";
import React from "react";

type Props = {
  directionTop: boolean;
};

const Skill = (props: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          y: props.directionTop ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="js.png"
        className=" h-24 w-24 rounded-full border border-gray-500 object-cover filter transition duration-200 ease-in-out group-hover:grayscale xl:h-32 xl:w-32"
      ></motion.img>
      <div className="absolute h-24 w-24 rounded-full opacity-0 transition duration-300 ease-in-out group-hover:bg-white group-hover:opacity-80 xl:h-32 xl:w-32">
        <div className="flex h-full items-center justify-center">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
