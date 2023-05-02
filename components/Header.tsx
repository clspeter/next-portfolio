import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 z-20 mx-auto flex flex-row justify-between p-5 md:max-w-7xl xl:items-center">
      <motion.div
        initial={{
          y: -75,
          opacity: 0,
          scale: 1.5,
        }}
        animate={{
          y: 0,
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
      <Link href="#contact">
        <motion.div
          initial={{
            y: -75,
            opacity: 0,
            scale: 1.5,
          }}
          animate={{
            y: 0,
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
          <div className="hidden text-center text-gray-400 sm:block">
            GET INTOUCH
          </div>
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;
