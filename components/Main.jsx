import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-v-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET&apos;S GO ON A JOURNEY
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m{" "}
            <span className="text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:from-pink-500 hover:to-yellow-500">
              Santtu
            </span>
          </h1>
          <h1 className="py-4 text-gray-700">A Software Engineer</h1>
          <p className="py-4 text-gray-600 max-w-[75%] m-auto">
            I&apos;m a software engineer interested in building and delivering
            high performance applications. I&apos;m currently focusing on DevOps
            technologies like containerisation, deployment, infrastructure and
            automation.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto p-5">
            <div className="shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-b from-sky-400 to-sky-200">
              <a href="https://linkedin.com/in/santtuniskanen">
                <FaLinkedin />
              </a>
            </div>
            <div className="shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-b from-orange-500 to-yellow-300">
              <a href="https://github.com/santtuniskanen">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
