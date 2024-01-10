import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import ShowtimeImg from "../public/assets/projects/showtimesquad.jpg";
import Link from "next/link";

const ShowtimeSquad = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={ShowtimeImg}
          alt=""
        />
        <div className="absolute top-[85%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4">
          <h2 className="py-2">Showtime Squad</h2>
          <h3>React - Spring Boot - Postgres</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
            <h2 className='p-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 from-5 to-yellow-500 to-30%'>Overview</h2>
            <p className="p-2">
              Second year kicked off with Web Development. The goal in this project was to create a web application for movie hobbyists, where they can browse movies and reviews, create and account, write reviews, join and create groups.
            </p>
            <p className="p-2">
              This project was quite different from out previous projects, since we had a lot more focus on project management this time around. While everyone was tasked to work with both the backend and the frontend, we had clear tasks that we could assign to ourselves from a Kanban board.
            </p>
            <p className="p-2">
            I was pretty excited about this project since over the summer I had been increasingly interested in DevOps, and I finally had "real world" application to practice with. We didn&apos;t have nearly as much time as I expected, but I managed to write a pipeline for the build and testing of our Spring application.
            </p>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-grey-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2  text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-5% via-sky-500 via-45% to-emerald-500 to-50%">technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center font-bold">
                <RiRadioButtonFill className="pr-1" /> React.JS
              </p>
              <p className="text-gray-600 py-2 flex items-center font-bold">
                <RiRadioButtonFill className="pr-1" /> Spring Boot
              </p>
              <p className="text-gray-600 py-2 flex items-center font-bold">
                <RiRadioButtonFill className="pr-1" /> PostgreSQL
              </p>
              <p className="text-gray-600 py-2 flex items-center font-bold">
                <RiRadioButtonFill className="pr-1" /> Continuous Integration
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
            <p className="underline cursor-pointer p-2">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default ShowtimeSquad;
