import Image from "next/image";
import React from "react";
import { assets } from "../../assets/assets";
import { motion } from "motion/react";

const Header = ({ isDarkMode }) => {
  return (
    <div className="w-11/12 max-w-3xl mx-auto h-screen flex flex-col items-center justify-center">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image src={assets.profile_img} alt="" className="rounded-full w-64" />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo pt-2"
      >
        Hi! I'm Doaa Abdelfattah{" "}
        {/* <Image src={assets.hand_icon} alt="" className="rounded-full w-6" /> */}
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] text-center font-Ovo"
      >
        Frontend web developer{" "}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-3xl mx-auto text-center py-4 font-Ovo"
      >
        I am a highly skilled Front-End Developer who specializes in
        transforming UI/UX designs into fully functional, high-performance web
        applications.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border rounded-full bg-black  border-white text-white flex items-center justify-center gap-2 dark:bg-transparent"
        >
          Contact me
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Doaa-AbdelFattah-Resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center justify-center gap-2 bg-white dark:text-black "
        >
          My Resume
          <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
