import Image from "next/image";
import React from "react";
import BanksimulImg from "../public/assets/projects/banksimul.jpg";

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
          <h3>C++/QT / MySQL / Express.js</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
            <h2 className='p-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 from-5 to-yellow-500 to-30%'>Overview</h2>
            <p className="p-2">

            </p>
            <p className="p-2">

            </p>
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
};

export default Vahti;
