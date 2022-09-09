import Link from "next/link";
import React from "react";

interface ProjectItems {
  title: string;
  description: string;
  projectImageId: string;
  
}

const ProjectBox = (props: ProjectItems) => {
  return (
    <Link href="https://pixeltees.vercel.app/home">
    <div
      className={
        "min-h-3/10 mb-5  rounded-3xl w-6/10 bg-cover flex flex-col items-center text-darkGrey justify-center text-center"
      }
      id={props.projectImageId}
    >
      <h1 className="text-xl cursor-pointer underline mb-2">{props.title}</h1>
      <p className="text-sm cursor-pointer">{props.description}</p>
    </div>
    </Link>
  );
};

export default ProjectBox;
