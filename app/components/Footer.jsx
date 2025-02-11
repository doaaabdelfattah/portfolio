import Image from "next/image";
import React from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20 ">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="logo"
          className="w-36 mx-auto mb-2"
        />
        <div className="flex items-center gap-2 mx-auto w-max">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="mail"
            className="w-6"
          />
          doaa.abdalfattah@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>&copy; Doaa Abdelfattah. All right reserved. </p>

        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <Link target="_blank" href="https://github.com/doaaabdelfattah">
              Github
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/doaa-abd-elfattah-41596a11a/"
            >
              Linkedin
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
