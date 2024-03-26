import React from "react";

const Main: React.FC = () => {
  return (
    <div className="relative w-full h-screen text-center bg-black">
      <div className="absolute inset-0 z-10 max-w-[800px] w-full h-full mx-auto p-16 flex flex-col justify-center items-end">
        <div className="w-full mb-8 text-right">
          <h1 className="text-white text-8xl">
            <span className="text-white">Hello </span>
            <span className="text-[#FF7F0E]">there</span>
            <span className="text-[#FFF] text-7xl">.</span>
          </h1>
        </div>
        <div className="w-full">
          <h1 className="text-white text-7xl text-right">
            <span className="text-[#FF7F0E]">I&apos;m </span>
            <span className="text-white">Santtu</span>
            <span className="text-[#FF7F0E] text-7xl">.</span>
          </h1>
        </div>
        <div className="max-w-[400px]">
          <p className="text-white text-2xl py-8 text-right leading-10">
            A passionate software engineering student with a keen focus on
            <span className="bg-gradient-to-r from-lime-400 to-lime-800 bg-clip-text text-transparent"> Backend Development</span> and <span className="bg-gradient-to-r from-blue-400 to-sky-900 bg-clip-text text-transparent">DevOps technologies.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
