"use client";
import * as React from "react";

import ProjectCarousel from "./Carousel";

export default function Projects() {
  return (
    <div
      id="projects"
      className="w-full md:h-screen p-2 flex items-center py-16 border-solid border-2 border-sky-500"
    >
      <div className="max-w-[1240px] m-auto border-solid border-2 border-sky-500">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-2 items-start gap-8">
          <h1>Personal projects.</h1>
          <div className="pl-16">
            <ProjectCarousel />
          </div>
        </div>
        <div className="max-w-[1240px] m-auto grid grid-cols-2 md:flex-col-reverse items-end gap-8">
          <div className="pl-16">
            <ProjectCarousel />
          </div>
          <h1>School projects.</h1>
        </div>
      </div>
    </div>
  );
}
