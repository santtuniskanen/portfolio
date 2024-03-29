import Image from "next/image";
import React from "react";
import ReactSkill from "./SkillsComponents/SkillReact.jsx";
import TailwindSkill from "./SkillsComponents/SkillTailwind.jsx";
import LinuxSkill from "./SkillsComponents/SkillLinux.jsx";
import CPPSkill from "./SkillsComponents/SkillCPP.jsx";
import DockerSkill from "./SkillsComponents/SkillDocker.jsx";
import AzureSkill from "./SkillsComponents/SkillAzure.jsx";
import SpringSkill from "./SkillsComponents/SkillSpring.jsx";
import PythonSkill from "./SkillsComponents/SkillPython.jsx";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 ">
      <div className="max-w-[1240px] mx-auto fle flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I can do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ReactSkill />
          <TailwindSkill />
          <PythonSkill />
          <CPPSkill />
          <SpringSkill />
          <LinuxSkill />
          <DockerSkill />
          <AzureSkill />
        </div>
      </div>
    </div>
  );
};

export default Skills;
