import React from "react";
import Image from "next/image";
import Link from "next/link";
import Vahti from "./ProjectsComponents/Vahti";
import BankSimul from "./ProjectsComponents/BankSimul";
import DevOps from "./ProjectsComponents/DevOps";
import StardewMod from "./ProjectsComponents/StardewModding";
import VahtiImg from "../public/assets/projects/vahti.jpg";
import BankSimulImg from "../public/assets/projects/BankSimulatorImage.jpg";
import DevOpsImg from "../public/assets/projects/DevOps.jpg";
import stardewImg from "../public/assets/projects/stardewImg.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240p] mx-auto px-2 py-16">
        <p2 className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p2>
        <h2 className="py-4">What I've built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Vahti title="Vahti" backgroundImg={VahtiImg} projectUrl="/Vahti" />
          <BankSimul
            title="Vahti"
            backgroundImg={BankSimulImg}
            projectUrl="/BankSimul"
          />
          <DevOps
            title="Vahti"
            backgroundImg={DevOpsImg}
            projectUrl="/DevOpsProject"
          />
          <StardewMod
            title="Vahti"
            backgroundImg={stardewImg}
            projectUrl="/StardewMod"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
