import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

const Main = () => {
    return (
        <div className="w-full h-screen text-center">
            <div className="max-v-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600">LET'S BUILD SOMETHING TOGETHER</p>
                    <h1 className="py-4 text-gray-700">Hi, I'm <span className="text-[#5651e5]">Santtu </span></h1>
                    <h1 className="py-4 text-gray-700">A Software Engineer</h1>
                    <p className="py-4 text-gray-600 max-w-[75%] m-auto">I'm a software engineer interested in building and delivering high performance applications. I'm currently focusing on DevOps technologies like containerisation, deployment, infrastructure and automation.</p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto p-5">
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedin />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;