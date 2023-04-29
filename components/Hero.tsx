import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Peter Liu.",
      "Im_a_software_engineer.tsx",
      "CodingIsWhatILoveToDo.tsx",
    ],
    loop: true,
    deleteSpeed: 50,
  });
  return (
    <div className="h-screen flex flex-col -space-y-16 md:space-y-8 items-center justify-center">
      <BackgroundCircles />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
}

export default Hero;
