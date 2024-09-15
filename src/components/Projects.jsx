import React from "react";
import Project from "./Project";
import { projects } from "../../projects";

const Projects = () => {
  return (
    <div
      className="mt-40 scroll-m-28"
      id="projects"
    >
      <h1 className="mb-10 text-center">Projects</h1>
      <div className="grid grid-cols-auto gap-10">
       {projects.map(project=>(
        <Project key={project.image} title={project.title} image={project.image} details={project.details} githubRepo={project.githubRepo} liveDemo={project.liveDemo}/>
       ))}
      </div>
    </div>
  );
};

export default Projects;
