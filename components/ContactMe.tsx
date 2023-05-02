import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

type Props = {};
type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = (props: Props) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((formData) => {
    window.location.href = `mailto:mustpe@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  });

  return (
    <div className="relative mx-auto flex h-screen w-screen max-w-7xl flex-col items-center justify-evenly px-4 text-center md:w-full md:flex-row md:px-10 md:text-left">
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        ContacMe
      </h3>

      <div className="flex flex-col space-y-10 md:w-full">
        <h4 className="font-sejmibold text-center text-4xl">
          I have got just what you need.{" "}
          <span className="underline decoration-blue-500/50">
            Let&#39;s Talk
          </span>
        </h4>

        <div className="space-y-5">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="h-7 w-7 animate-pulse" />
            <p>+17327924341</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="h-7 w-7 animate-pulse" />
            <p>mustpe@gmail.com</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="h-7 w-7 animate-pulse" />
            <p>Taoyuan, Taiwan</p>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="mx-auto flex w-fit flex-col space-y-2 md:w-fit"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput w-1/2"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput w-1/2"
              type="text"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput w-full"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            rows={5}
            className="contactInput"
          />
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 font-semibold text-black"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
