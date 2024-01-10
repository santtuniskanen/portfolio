import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import BanksimulImg from "../public/assets/projects/banksimul.jpg";
import Link from "next/link";

const Vahti = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={BanksimulImg}
          alt=""
        />
        <div className="absolute top-[85%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4">
          <h2 className="py-2">Bank Simulator</h2>
          <h3>C++/QT - MySQL - Express.js</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
            <h2 className='p-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 from-5 to-yellow-500 to-30%'>Overview</h2>
            <p className="p-2">
              As the name suggests, this project was a bank simulator project, trying to emulate the software used in ATM (Automatic Teller Machine) software. The project was our first Full Stack application project.
            </p>
            <p className="p-2">
              The application consists of the User Interface, RESTful API and the database. We used the QT Framework for the frontend coupled with C++. This was the first time I really got to doing Object-Oriented Programming as well, compared to the procedural C programming we did during the first project. The backend was written in JavaScript, using the Express.JS library and we used MySQL as the database for the project.
            </p>
            <p className="p-2">
            I decided to host our backend and database on an Ubuntu Virtual Machine hosted on DigitalOcean. It would've honestly been more useful if we hosted the backend on a a service like Render, but I already had some Digital Ocean credits and some knowledge about setting up a web server with NGINX. At the end of the day, it was quite a fun experience and it eventually led into more interest towards Linux and the Cloud.
            </p>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-grey-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2  text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-5% via-sky-500 via-45% to-emerald-500 to-50%">technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center font-bold">
                <RiRadioButtonFill className="pr-1" /> QT Framework
              </p>
              <p className="text-gray-600 py-2 flex items-center font-bold">
                <RiRadioButtonFill className="pr-1" /> Express.JS
              </p>
              <p className="text-gray-600 py-2 flex items-center font-bold">
                <RiRadioButtonFill className="pr-1" /> MySQL
              </p>
              <p className="text-gray-600 py-2 flex items-center font-bold">
                <RiRadioButtonFill className="pr-1" /> NGINX
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

export default Vahti;
