import { assets, serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import SectionHeader from "./reusable/SectionHeader";
const Services = ({ isDarkMode }) => {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20" id="services">
      <SectionHeader
        title="My Servicese"
        subtitle="What I offer"
        description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
        sit, laudantium animi laborum veritatis magni? Facere, laborum!
        Repellat cupiditate, tenetur totam numquam aut culpa inventore, eum
        sapiente dolor illum eos."
      />

      <div className="grid grid-cols-auto gap-6 my-10">
        {serviceData.map(({ icon, description, link, title }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-gray-50 hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <Image src={icon} alt={title} className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-white/80 leading-5">
              {description}
            </p>
            <a href={link} className=" ">
              Read more{" "}
              <Image
                src={isDarkMode ? assets.right_arrow_white : assets.right_arrow}
                className="w-4"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
