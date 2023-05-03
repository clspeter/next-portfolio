import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "../typing";
import { urlFor } from "@/sanity";

type Props = { pageInfo: PageInfo };

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: pageInfo.typeWriter,
    typeSpeed: 100,
    loop: true,
  });
  return (
    <div className="flex h-screen flex-col items-center justify-center -space-y-16 text-center md:space-y-8">
      <BackgroundCircles />

      <div className="z-20 flex w-full flex-col gap-4">
        <Image
          src={urlFor(pageInfo?.heroImage).url()}
          alt=""
          className="relative mx-auto h-32 w-32 rounded-full object-cover"
          width={128}
          height={128}
        />
        <h2 className="text-md uppercase tracking-[5px] text-gray-500 md:tracking-[15px]">
          {pageInfo.role}
        </h2>
        <h1 className="z-10 text-3xl font-semibold md:text-5xl">
          <span>{text}</span>
          <Cursor cursorColor="#4299E1" />
        </h1>
        <div className="grid w-fit grid-cols-2 justify-center gap-2 self-center pt-5 md:grid-cols-4">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
