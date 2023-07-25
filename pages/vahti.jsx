import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import VahtiImg from "../public/assets/projects/vahti.jpg";
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
          src={VahtiImg}
          alt=""
        />
        <div className="absolute top-[85%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-4">
          <h2 className="py-2">V.A.H.T.I</h2>
          <h3>Arduino</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2 className="p-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-5% via-sky-500 via-15% to-emerald-500 to-30%">
            Overview
          </h2>
          <p className="p-2">
            This was my first semester Information Technology application
            project. The aim of the project was to apply our previously learned
            subjects into a full project, including Electronics, Mathematics and
            Programming. The given task was to create a microprocessor
            application, which monitors its surrounding environment with
            different sensors and controls the connected hardware based on the
            sensor information.
          </p>
          <p className="p-2">
            This was my first Information Technology project. The project was
            completed in groups, and we had weekly meetings with our tutors, who
            oversaw our project progress. The project was very enjoyable, since
            I had never used microprocessors before and I could finally get some
            hands on experience using Version Control in a real world group
            setting. The project also sparked an interest towards Internet of
            Things, of which development I want to be a part of in the future.
          </p>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-grey-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2  text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-5% via-sky-500 via-45% to-emerald-500 to-50%">technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center font-bold">
                <RiRadioButtonFill className="pr-1" /> Arduino Uno
              </p>
              <p className="text-gray-600 py-2 flex items-center font-bold">
                <RiRadioButtonFill className="pr-1" /> Arduino C (Programming
                Language)
              </p>
              <p className="text-gray-600 py-2 flex items-center font-bold">
                <RiRadioButtonFill className="pr-1" /> Git
              </p>
              <p className="text-gray-600 py-2 flex items-center font-bold">
                <RiRadioButtonFill className="pr-1" /> ESP8266
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
