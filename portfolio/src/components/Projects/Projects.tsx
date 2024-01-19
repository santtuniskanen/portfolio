"use client";
import * as React from "react";

import SchoolCarousel from "./SchoolCarousel";
import PersonalCarousel from "./PersonalCarousel";

export default function Projects() {
  return (
    <div
      id="projects"
      className="w-full md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-2 items-center gap-8">
          <h1>Personal projects.</h1>
          <div className="pl-16">
            <PersonalCarousel />
          </div>
        </div>
        <div className="max-w-[1240px] m-auto grid grid-cols-2 md:flex-col-reverse items-center gap-8">
          <div className="pl-16">
            <SchoolCarousel />
          </div>
          <h1>School projects.</h1>
        </div>
      </div>
    </div>
  );
}
