import React, { useState, useEffect } from 'react';
import SchoolCarousel from "./SchoolCarousel";
import PersonalCarousel from "./PersonalCarousel";
import Modal from './Modal';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index: number) => {
    setIsModalOpen(true);
    const dinosaur = "/assets/dinosaur.jpg";
    const fitness = "/assets/fitness.jpg";
    const notes = "/assets/notes.jpg";
    const portfolio = "/assets/portfolio.jpg";

    const projects = [
      {
        background: portfolio,
        title: "Portfolio",
        description: "Portfolio Website.",
      },
      {
        background: dinosaur,
        title: "Rust Raptor",
        description: "Grep clone written in Rust.",
      },
      {
        background: notes,
        title: "Memory Lane",
        description: "Note taking application written with React + TS, Tailwind & PostgreSQL.",
      },
      {
        background: fitness,
        title: "Workout Tracker",
        description: "Swift iOS application to track your workouts.",

      },
    ];

    if (index >= 0 && index < projects.length) {
      const project = projects[index];
      setSelectedProject(project);
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      // Disable scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

  return (
    <div
      id="projects"
      className="w-full md:h-screen p-2 flex items-center py-16"
      >
      <div className="max-w-[1240px] m-auto">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-2 items-center gap-8">
          <h1>Personal projects.</h1>
          <div className="pl-16">
            <PersonalCarousel openModal={openModal} />
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

export default Projects;