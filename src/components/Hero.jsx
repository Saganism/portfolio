import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="text-center m-auto w-full sm:w-1/2 mt-20">
      <div className="w-full md:w-full lg:w-[80%] m-auto relative">
        <img
          className="rounded-full w-full h-full p-4 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
          src="avatar.avif"
          alt="portfolio"
        />
      </div>
      <p className="mt-8 mb-4">Web Developer | React JS</p>
      <div className="mb-4 flex gap-4 justify-center">
        <a href="https://www.linkedin.com/in/abdulazeez-alabbasi/"><FaLinkedin className="w-8 h-8 hover:fill-blue-600 cursor-pointer" /></a>
        <a href="https://github.com/Saganism"><FaGithub className="w-8 h-8 hover:fill-red-500 cursor-pointer" /></a>
      </div>
      <p>
        Hi! My name is Abdulazeez Alabbasi. I am a web developer who enjoys
        building scalable, maintainable, and robust React applications.
      </p>
    </div>
  );
};

export default Hero;
