import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Peter Liu.",
      "Guy-who-loves-tea.tsx",
      "CodingIsWhatILoveToDo.tsx",
    ],
    typeSpeed: 100,
    loop: true,
  });
  return (
    <div className="h-screen flex flex-col -space-y-16 md:space-y-8 items-center justify-center text-center">
      <BackgroundCircles />
      <div>
        <Image
          src="/peter.png"
          alt=""
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
          width={128}
          height={128}
        />
        <h2 className="text-sm uppercase text-gray-500 md:tracking-[15px] tracking-[5px] mt-4">
          Software Engineer
        </h2>
        <h1 className="mt-2 md:mt-4">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>
    </div>
  );
}

export default Hero;
