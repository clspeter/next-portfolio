import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 p-5 flex flex-row justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://github.com/clspeter"
        />
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://www.instagram.com/mustpeter/"
        />
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://www.youtube.com/@peterliu4555"
        />
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://www.linkedin.com/in/peter-liu-1139799a/"
        />
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://www.cakeresume.com/s--a0mLUGey1QRVWAet4DHZxw--/peter-liu-aeeca7"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          className="cursor-pointer"
          url="mailto:mustpe@gmail.com"
        />
        <div className="text-gray-400 text-center hidden sm:block ">
          GET INTOUCH
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
