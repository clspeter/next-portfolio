import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typing";

type Props = { socials: Social[] };

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
        {props.socials.map((social) => (
          <SocialIcon
            key={social._id}
            fgColor="gray"
            bgColor="transparent"
            url={social.url}
          />
        ))}
      </motion.div>
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
        <Link href="#contact">
          <div className="hidden text-center text-gray-400 sm:block">
            GET INTOUCH
          </div>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
