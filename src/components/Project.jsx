import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";


const Project = ({ title, image, details, githubRepo, liveDemo }) => {
  return (
    <div className="card shadow-card-shadow flex flex-col rounded-t-3xl overflow-hidden">
      <div className="image-wrapper h-80">
        <img src={image} alt={image} className="w-full h-full object-cover" />
      </div>
      <div className="content-wrapper flex-1 flex flex-col gap-4 mt-4 px-4 pb-4">
        <h2>{title}</h2>
        <p className="text-center text-lg">{details}</p>
        <div className="cursor-pointer button-wrapper mt-auto flex gap-4 flex-wrap text-center justify-center">
          <a href={githubRepo} className=" bg-black text-white p-2 hover:bg-slate-700 flex items-center gap-2 w-[142px]">
            <FaGithub />
            Github Repo</a>
          <a href={liveDemo} className="cursor-pointer bg-pink-500 text-white p-2 hover:bg-pink-400 flex items-center gap-2 w-[142px]">
            <MdLiveTv className="-translate-y-[1px]" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
