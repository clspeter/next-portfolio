import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typing";
import { urlFor } from "../sanity";

type Props = { pageInfo: PageInfo };

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-center gap-20 px-10 text-center md:flex-row md:text-left"
    >
      <h3 className="absolute top-20 text-2xl uppercase tracking-[20px] text-gray-500 md:top-24">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="h-48 w-48 flex-shrink-0 rounded-full object-cover md:mb-0 md:h-80 md:w-80 md:rounded-lg xl:h-[500px] xl:w-[500px]"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a little bit about me.
        </h4>
        <p className="mt-4 text-sm">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}

export default About;
