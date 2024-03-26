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
        description1: "Developer Portfolio. This project was initially done for my Summer 2023 School Project, when I took a DevOps course from Coursera. For a while I wasn't very happy with it, since most of the work came from a YouTube tutorial, so I decided to write it again myself. This time I decided to use TypeScript instead, because I've somewhat grown to like strongly typed languages. I've also discovered lots of other cool technologies since the first version, so I decided to add them into the mix.",
        description2: "Shadcn really caught my eye as a component library, since it doesn't work the way typical Javascript libraries do. You essentially add the component code straight into your own codebase, without having to worry about any dependencies or growing modules. The other technology I decided to add in is Bun, the might new JavaScript Runtime and whatever else it is. This project has quite a few hot technologies people keep talking about like Next, Tailwind, Shadcn and Bun, and it has honestly been a fun experience using them.",
        url: "https://github.com/santtuniskanen/portfolio"
      },
      {
        background: dinosaur,
        title: "Rust Raptor",
        description1: "Rust Raptor is a Command Line Program written in Rust. It's a project found in the Rust Programming Language book in the I/O section. The program essentially replicates the basic functionality of the classic unix command line seatch tool, grep.",
        description2: "Rust is a language I've been interested in for over a year now. Systems Programming is something that fascinates me, despite never having done it at all. There's something really cool about getting closer to the hardware on a software level. I've been using lots of Linux over the last few years and I'm hoping that I'll eventually have the time to start delving into Systems Programming, specifically in a Linux environment.",
        url: "https://github.com/santtuniskanen/rust-raptor",
      },
      {
        background: notes,
        title: "Memory Lane",
        description1: "Memory Lane is a Full Stack Web Application with the purpose of writing down notes. The main purpose of this project for me was to keep learning PostgreSQL and Backend Development further.",
        description2: "The Frontend of the application is done with Vite + React / TypeScript. The Backend is Express / TypeScript + PostgreSQL. I chose these technologies because I wanted to stay pretty close to the TypeScript level without having to go for any full blown Full Stack frameworks, like Next. I'm also writing a lot of the SQL by hand, still with the main purpose of learning SQL further. I also just like to sit in the terminal a lot.",
        description3: "While this application is nowhere near finished right now, the main goal of the project will be to learn DevOps, specifically CI/CD. I've been learning lots of Docker and Jenkins recently, and I want to eventually deploy the application to Kubernetes with ArgoCD.",
        url: "https://github.com/santtuniskanen/memorylane",
      },
      {
        background: fitness,
        title: "Workout Tracker",
        description1: "I've been wanting to build an application for iOS and MacOS environments for a long time, and in 2024 I got a pretty decent idea for it. I'd call myself a fairly serious weightlifter, and I usually use Obsidian to track my workouts. Since Obsidian is mainly a Markdown based notetaking application, it's not really the best choice for this purpose.",
        description2: "Enter Swift. I've been doing some Swift tutorials and I've really enjoyed a lot of the system components and how easy it is to implement them into your own applications. I really like visualizations and analytics, so the idea for this application was to write down my workouts and be able to visualize my progress over time.",
        description3: "As of now, the application isn't in a working state. It has basic login functionality, but I haven't had the time to write down the database for my workouts.",
        url: "https://github.com/santtuniskanen/workout-tracker",
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