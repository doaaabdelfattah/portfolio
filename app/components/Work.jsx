import React from "react";
import SectionHeader from "./reusable/SectionHeader";
import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";

import Link from "next/link";

const Work = ({ isDarkMode }) => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <SectionHeader
        title="My Latest work"
        subtitle="My Portfolio"
        description="Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development"
      />
      <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        {workData.map((project, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group hover:bg-black/20"
          >
            <div className="absolute inset-0 group-hover:bg-black/10 transition duration-300 rounded-lg shadow-md"></div>
            <div className="bg-white/90  w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-5  flex flex-col items-center justify-between  duration-500 group-hover:bottom-7 ">
              <div className="flex items-center justify-center flex-col gap-2">
                <div className="flex items-center text-center">
                  <a href={project.demo} target="_blank">
                    <h2 className="font-semibold">{project.title}</h2>
                    <p className="tex-sm text-gray-700">
                      {project.description}
                    </p>
                  </a>
                </div>
                <div className="flex gap-2">
                  <div className="border rounded-full border-black w-7 aspect-square flex items-center justify-center shadow-[2px_2px_0_#001] hover:bg-lime-300 transition">
                    <Link target="_blank" href={project.demo}>
                      <FaEarthAmericas />
                    </Link>
                  </div>
                  <div className="border rounded-full border-black w-7 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] hover:bg-yellow-400 transition">
                    <Link target="_blank" href={project.repo}>
                      <FaGithub />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href=""
        className="w-max flex items-center justify-center gap-2 textgray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-gray-50 duration-500 dark:border-white dark:hover:bg-darkHover"
      >
        Show more{" "}
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="right arrow"
          className="w-4"
        />
      </a>
    </div>
  );
};

export default Work;
