import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="mt-30 absolute h-[175px] w-[175px] animate-ping rounded-full border-4 md:mt-52 md:h-[500px] md:w-[500px] md:border" />
      <div className="mt-30 absolute h-[200px] w-[200px] rounded-full border border-[#333333] md:mt-52 md:h-[300px] md:w-[300px]" />
      <div className="mt-30 absolute h-[300px] w-[300px] rounded-full border border-[#333333] md:mt-52 md:h-[500px] md:w-[500px]" />
      <div className="mt-30 absolute h-[350px] w-[350px] animate-pulse rounded-full border border-[#4299E1] opacity-30 md:mt-52 md:h-[650px] md:w-[650px]" />
      <div className="absolute mt-52 hidden rounded-full border border-[#333333] md:block md:h-[800px] md:w-[800px]" />
    </div>
  );
};

export default BackgroundCircles;
