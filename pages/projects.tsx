import React from "react";
import type { NextPage } from "next";
import Nav from "../Components/Nav";
import ProjectBox from "../Components/ProjectBox";
import Link from "next/link";

const Projects: NextPage = () => {
  return (
    <div className="min-h-full w-100 bg-mainGradientMobile md:bg-mainGradient text-mainWhite overflow-x-hidden">
      <div className="h-1/10 w-100">
        <Nav />
        <div className="h-full flex flex-col items-center  text-center w-full mt-5">
          <h1 className="text-3xl mb-5 underline font-extralight md:text-5xl">
            Projects
          </h1>
         <ProjectBox title="PixelTees" projectImageId="pixeltees" description="An Ecommerce website centered around selling tshirts with a pixel art focus."/>
         <div className="h-1/10 flex flex-col justify-center items-center">
              <Link href={"https://github.com/Indigo9898?tab=repositories"}><h1 className="cursor-pointer">Or Check Out My Github</h1></Link>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
