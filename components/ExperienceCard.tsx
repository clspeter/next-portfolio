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
    <article className="z-30 flex w-[98%] flex-shrink-0 snap-center flex-col gap-7 items-center">
      <div className="flex flex-col rounded-lg bg-[#292929] px-2 py-4 md:p-10 overflow-hiddentransition-opacity duration-200 focus:opacity-100 hover:opacity-100 md:w-[600px] md:opacity-40 xl:w-[900px] my-auto items-center  min-h-min">
        <motion.img
          initial={{
            y: -80,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          src={urlFor(props.experience?.companyImage).url()}
          className="h-20 w-20 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]"
        />
        <div className="md:px-1- px-0">
          <h4 className="text-xl font-light md:text-4xl">
            {props.experience.jobTitle}
          </h4>
          <div className="flex flex-row items-center space-x-4 md:flex-col md:items-start">
            <p className="mt-1 text-lg font-bold md:text-2xl">
              {props.experience.company}
            </p>
            <div className="my-2 flex flex-row space-x-2 md:space-x-4">
              {props.experience.technologies?.map((technology) => (
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
      </div>
    </article>
  );
};

export default ExperienceCard;
