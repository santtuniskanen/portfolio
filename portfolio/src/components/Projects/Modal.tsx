// Modal.tsx
import React from 'react';

interface ModalProps {
    project: Project | null;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full">
                    <button
                        onClick={onClose}
                        className="absolute top-0 right-0 m-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                        >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
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
                    <div className="p-8">
                        <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
                        <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                        {/* Add more project details here */}
                    </div>
                </div>
            </div>
        </div>
        );
};

export default Modal;
