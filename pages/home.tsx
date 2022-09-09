import type { NextPage } from "next";
import React from "react";
import Nav from "./../Components/Nav";
import Link from "next/link";

let Home: NextPage = () => {
  const mainText =
    "Hi, I'm Austen Dyer. I'm a  Houston Based Freelance Web Developer. I have experience in providing businesses a sleek powerful website utilizng modern day frameworks such as Next.js to deliver a customizable and high performing platform for businesses to take there business to the web.";

  return (
    <div className="min-h-full h-full w-100 bg-mainGradientMobile md:bg-mainGradient text-mainWhite">
      <div className="h-1/10 w-100">
        <Nav />
      </div>
      <div className="min-h-9/10 w-100 text-mainWhite flex justify-center items-center">
        <div className="flex flex-col items-center justify-center text-center w-9/10 lg:w-7/10">
          <div className="w-100 h-5">
            <h1 className="text-3xl mb-5 underline font-extralight md:text-5xl">
              Welcome
            </h1>
          </div>
          <div className="w-100 h-5">
            <p className="text-sm md:text-lg lg:text-2xl">{mainText}</p>
          </div>
          <div className="w-100 h-3/10 flex  justify-center items-center flex-col md:flex-row">
          <Link href={'/contact'}><button className=" p-5  md:h-15 bg-mainWhite text-darkGrey rounded-2xl mt-5 md:p-2 md:mr-5">
              Contact Me
            </button></Link>
            <Link href={'/projects'}><button className="p-5  bg-mainWhite text-darkGrey rounded-2xl mt-5 md:p-2">
              Projects
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
