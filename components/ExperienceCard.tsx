import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex w-[390px] flex-shrink-0 snap-center flex-col items-center gap-7 overflow-hidden rounded-lg bg-[#292929] p-10 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] xl:w-[900px]">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src="/vercel.png"
        className="h-32 w-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]"
      />

      <div className="md:px-1- px-0">
        <h4 className="text-4xl font-light">CEO of X-Corp</h4>
        <p className="mt-1 text-2xl font-bold">X-Corp</p>
        <div className="my-2 flex gap-2">
          <img className="full h-10 w-10 rounded" src="/js.png" alt="" />
          <img className="full h-10 w-10 rounded" src="/js.png" alt="" />
          <img className="full h-10 w-10 rounded" src="/js.png" alt="" />
        </div>
        <p>2020-2021</p>
        <ul className="ml-5 list-disc gap-4 text-lg">
          <li>item 1 Butoon bullen cappti book apple beat boat</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 3</li>
          <li>item 3</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
