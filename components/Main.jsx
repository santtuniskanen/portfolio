import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-v-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="">
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Try not. Do or do not. There is no try.
          </p>
          <h1 className="py-4 text-gray-700">Hello there, </h1>
          <h1 className="py-4 text-gray-700">
            I&apos;m{" "}
            <span className="text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:from-pink-500 hover:to-yellow-500">
              Santtu
            </span>
          </h1>
          <p className="py-4 text-gray-600 max-w-[75%] m-auto ">
            I&apos;m a software engineer interested in building and delivering
            high performance applications. I&apos;m currently focusing on DevOps
            technologies like containerisation and infrastructure.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto p-5">
            <Link href="https://linkedin.com/in/santtuniskanen" target="_blank" rel="noreferrer">
              <div className="shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-b from-sky-400 to-sky-200">
                <FaLinkedin />
              </div>
            </Link>
            <Link href="https://github.com/santtuniskanen" target="_blank" rel="noreferrer">
              <div className="shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-gradient-to-b from-orange-500 to-yellow-300">
                <FaGithub />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
