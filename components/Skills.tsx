import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SkillCard from "./Skill";
import { Skill } from "@/typing";
import { isMobile } from 'react-device-detect';

type Props = { skills: Skill[] };

const Skills = (props: Props) => {
  const [hoverSkill, setHoverSkill] = React.useState<Skill | null>(null);
  const [isTouchDevice, setIsTouchDevice] = React.useState<boolean>(false);

  useEffect(() => {
    if (isMobile)
      setIsTouchDevice(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="md:test-left max-w-2000px relative mx-auto flex h-screen min-h-screen flex-col items-center justify-center gap-10 text-center xl:flex-row xl:px-10"
    >
      <h3 className="absolute top-14 text-2xl uppercase tracking-[20px] text-gray-500 md:top-24">
        Skills
      </h3>

      <div className={`mb-5 text-xl md:basis-1/2 ${hoverSkill?.title ? 'text-white-500' : 'text-gray-500'}`}>
        {hoverSkill?.title || `${isTouchDevice ? 'Tap' : 'Hover'} on a skill for current proficiency`}
      </div>

      <div className="grid grid-cols-3 gap-5 md:basis-1/2 md:grid-cols-4">
        {props.skills.map((skill, i) => (
          <SkillCard
            key={skill._id}
            skill={skill}
            directionTop={i > 7 ? false : true}
            setHoverSkill={setHoverSkill}
          />
        ))}
      </div>
    </motion.div >
  );
};

export default Skills;
