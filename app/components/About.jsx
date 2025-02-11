import React from "react";
import { assets, infoList, toolsData } from "../../assets/assets";
import Image from "next/image";
import { motion } from "motion/react";
import SectionHeader from "./reusable/SectionHeader";

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-10 scroll-mt-20"
      id="about"
    >
      <SectionHeader title="About Me" subtitle="Introduction" />
      <div className="flex w-full mx-suto flex-col  items-center gap-20 my-20">
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </motion.div> */}
        {/* <div className="flex-1"> */}
        <p className="mb-10 max-w-2xl font-Ovo">
          I am a creative and detail-oriented{" "}
          <strong>Front-End Developer</strong> with a strong background in UI/UX
          design and digital product creation. With experience in both web
          development and graphic design, I specialize in transforming design
          concepts into fully functional, high-performance web applications.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
          {infoList.map(({ icon, iconDark, title, description }, index) => (
            <li
              key={index}
              className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-gray-50 hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover "
            >
              <Image
                src={isDarkMode ? iconDark : icon}
                alt={title}
                className="w-7 mt-3"
              />
              <h3 className="my-4 dark:text-white font-semibold text-gray-700">
                {title}
              </h3>
              <p className="text-gray-600 text-sm dark:text-white/80">
                {description}
              </p>
            </li>
          ))}
        </ul>
        {/* <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">
            Tools I use
          </h4>
          <ul className="flex items-center justify-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border-[0.5px] border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 "
              >
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul> */}
      </div>
      {/* </div> */}
    </motion.div>
  );
};

export default About;
