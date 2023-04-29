import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute border rounded-full md:h-[500px] md:w-[500px] w-[175px] h-[175px] md:mt-52 mt-30 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full md:h-[300px] md:w-[300px] w-[200px] h-[200px] md:mt-52 mt-30" />
      <div className="absolute border border-[#333333] rounded-full md:h-[500px] md:w-[500px] w-[300px] h-[300px] md:mt-52 mt-30" />
      <div className="absolute border border-orange-500 rounded-full opacity-30 md:h-[650px] md:w-[650px] w-[350px] h-[350px] md:mt-52 mt-30animate-pulse" />
      <div className="hidden md:block absolute border border-[#333333] rounded-full md:h-[800px] md:w-[800px] mt-52" />
    </div>
  );
};

export default BackgroundCircles;
