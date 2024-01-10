import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectComponent from "./ProjectComponents/ProjectComponent.jsx";
import ProjectTBAComponent from "./ProjectComponents/ProjectsComingSoon.jsx";
import VahtiImg from "../public/assets/projects/vahti.jpg";
import BankSimulImg from "../public/assets/projects/banksimul.jpg";
import ShowtimeImg from "../public/assets/projects/showtimesquad.jpg";
import stardewImg from "../public/assets/projects/stardewImg.jpg";

const Projects = () => {
  return (
    <div id="projects" className="flex w-full">
      <div className="max-w-[1240p] mx-auto px-2 py-16">
        <p2 className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p2>
        <h2 className="py-4">What I&apos;ve built</h2>
        <div className="max-w-[1240px] grid md:grid-cols-2 gap-8">
          <ProjectComponent 
            title="V.A.H.T.I" 
            backgroundImg={VahtiImg} 
            projectUrl="/vahti"
            tech='Information Technology Application Project with Arduino'
            />
          <ProjectComponent
            title="Bank Simulator"
            backgroundImg={BankSimulImg}
            projectUrl="/banksimul"
            tech='Bank Simulator Application written with C++/QT, Express.js and MySQL'
          />
          <ProjectComponent
            title="Web Development Project"
            backgroundImg={ShowtimeImg}
            projectUrl="/showtimesquad"
            tech='Full Stack application development with React.JS, Spring Boot and PostgreSQL'
          />
          <ProjectTBAComponent
            title="Stardew Valley Modding"
            backgroundImg={stardewImg}
            projectUrl="/stardewmod"
            tech='Creating Stardew Valley mods with C# and SMAPI.'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
