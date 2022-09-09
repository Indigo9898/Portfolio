import React from "react";
import Image from "next/image";
import Link from "next/link";

let Nav = () => {
  return (
    <nav className="h-100 flex  w-100 overflow-x-hidden">
      <div className="h-100 w-7/10 flex items-center md:w-9/10 text-xl tracking-wider">
        <Link href={'/home'}><h1 className="md:ml-2 font-thin cursor-pointer">Austen Dyer</h1></Link>
      </div>
      <div className="h-100 w-4/10 flex items-center md:w-3/10">
          <div className="h-100 w-6/10 flex justify-center items-center text-sm">
          <Link href={'/contact'}><h1 className="cursor-pointer">Contact Me</h1></Link>
          </div>
          <div className="h-100 w-6/10 flex justify-center items-center text-sm">
          <Link href={'/projects'}><h1 className="cursor-pointer">Projects</h1></Link>
          </div>
      </div>
    </nav>
  );
};

export default Nav;
