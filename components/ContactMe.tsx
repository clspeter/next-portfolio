import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

const ContactMe = (props: Props) => {
  return (
    <div className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left">
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        ContacMe
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="font-sejmibold text-center text-4xl">
          I have got just what you need.{" "}
          <span className="underline decoration-[#F7AB0A]/50">
            Let&#39;s Talk
          </span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="h-7 w-7 animate-pulse" />
            <p>+17327924341</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="h-7 w-7 animate-pulse" />
            <p>mustpe@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
