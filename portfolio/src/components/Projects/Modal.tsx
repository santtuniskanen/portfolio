// Modal.tsx
import React from "react";
import Image from "next/image";

interface ModalProps {
  project: Project | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto backdrop-blur-lg">
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-[800px] w-full ">
          <button
            onClick={onClose}
            className="absolute top-0 right-0 m-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 absolute top-0 right-0 z-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="relative">
          <Image
              className="object-none h-72 w-300"
              src={project.background}
              width={800}
              height={300}
              alt="Background"
            />
            <div className="absolute bottom-0 left-0 p-8  text-white">
              <h2 className="text-2xl font-semibold bg-black p-1">{project.title}</h2>
            </div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Modal;
