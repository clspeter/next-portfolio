import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typing";
import { urlFor } from "@/sanity";

type Props = { experience: Experience };

const ExperienceCard = (props: Props) => {
  const dateStringOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };
  return (
    <article className="z-10 flex w-[390px] flex-shrink-0 snap-center flex-col items-center gap-7 overflow-hidden rounded-lg bg-[#292929] p-10 transition-opacity duration-200 focus:opacity-100 hover:opacity-100 md:w-[600px] md:opacity-40 xl:w-[900px]">
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
        src={urlFor(props.experience?.companyImage).url()}
        className="h-32 w-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]"
      />

      <div className="md:px-1- px-0">
        <h4 className="text-xl font-light md:text-4xl">
          {props.experience.jobTitle}
        </h4>
        <div className="flex flex-row items-start space-x-4 md:flex-col md:items-start">
          <p className="mt-1 text-lg font-bold md:text-2xl">
            {props.experience.company}
          </p>
          <div className="my-2 flex flex-row space-x-2 md:space-x-4">
            {props.experience.technologies.map((technology) => (
              <img
                key={technology._id}
                className="full h-10 w-10 rounded-full"
                src={urlFor(technology.image).url()}
                alt={technology.title}
              />
            ))}
          </div>
        </div>
        <p>
          {new Date(props.experience.dateStarted).toLocaleDateString(
            undefined,
            dateStringOptions
          )}{" "}
          -{" "}
          {props.experience.isCurrentlyWorkingHere
            ? "Now"
            : new Date(props.experience.dateEnded).toLocaleDateString(
                undefined,
                {
                  year: "numeric",
                  month: "long",
                }
              )}
        </p>
        <ul className="text-sx ml-5 list-disc gap-4 md:text-lg">
          {props.experience?.points.map((point) => (
            <li key={point.slice(5)}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
