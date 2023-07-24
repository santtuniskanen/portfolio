import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Myself from '../public/assets/logo/myself.jpg';

const About = () => {
    return (
      <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
          <div className='col-span-2'>
            <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
              About
            </p>
            <h2 className='py-4'>Who I Am</h2>
            <p className='py-2 text-gray-600'>
            I started growing an interest to computers pretty early on in my life. The fascination eventually grew big enough that I had to build my own computer and I insisted to my parents that I'd do all of it myself. That interest eventually led me to different technology related communities where I met some wonderful people who introduced me to the world of Software Engineering.
            </p>
            <p className='py-2 text-gray-600'>
            I wasn't quite sure what I wanted to do after high school, but through different hoops I'd find my way to <span className='font-bold'>Oulu University of Applied Sciences</span>, studying Information Technology. On my way to the Sophomore year, I've learned electronics with our Arduino project, desktop application development, RESTAPIs and Databases with the Bank Simulator project. Going forward I'm going to bring our school projects and my interest towards <span className='font-bold'>DevOps</span> together creating CI/CD pipelines, working with containers and orchestration, working with cloud services and automation various aspects of the projects.
            </p>
            <Link href='/#projects'>
              <p className='py-2 text-gray-600 underline cursor-pointer'>
                Check out what I've been building 
              </p>
            </Link>
          </div>
          <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image src={Myself} className='rounded-xl' alt='/' />
          </div>
        </div>
      </div>
    );
  };
  
  export default About;