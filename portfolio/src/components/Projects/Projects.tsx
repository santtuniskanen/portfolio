import React, {useState} from 'react';
import SchoolCarousel from "./SchoolCarousel";
import PersonalCarousel from "./PersonalCarousel";
import Modal from './Modal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (index: number) => {
    const projects = [
      {
        title: "Project 1",
        description: "Description of Project 1",
        // Add more details as needed
      },
      {
        title: "Project 2",
        description: "Description of Project 2",
        // Add more details as needed
      },
      {
        title: "Project 3",
        description: "Description of Project 3",
        // Add more details as needed
      },
      // Add more projects as needed
    ];

    if (index >= 0 && index < projects.length) {
      const project = projects[index];
      setSelectedProject(project);
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
  }
  return (
    <div
      id="projects"
      className="w-full md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-2 items-center gap-8">
          <h1>Personal projects.</h1>
          <div className="pl-16">
            <PersonalCarousel openModal={openModal}/>
            <Modal project={selectedProject} onClose={closeModal} />
          </div>
        </div>
        <div className="max-w-[1240px] m-auto grid grid-cols-2 md:flex-col-reverse items-center gap-8">
          <div className="pl-16">
            <SchoolCarousel />
          </div>
          <h1>School projects.</h1>
        </div>
      </div>
    </div>
  );
}
