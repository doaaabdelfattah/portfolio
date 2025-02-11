"use-client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Form = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ead27fcf-bfe0-4fb5-b737-70f7c3caf8ff");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
            type="text"
            placeholder="Enter your name"
            required
            name="name"
          />
          <input
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white  dark:bg-darkHover/30 dark:border-white/90"
            type="email"
            placeholder="Enter your Email"
            required
            name="email"
          />
        </div>
        <textarea
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6  dark:bg-darkHover/30 dark:border-white/90"
          rows="6"
          placeholder="Enter your message"
          rquired
          name="message"
        />
        <button
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black text-white rounded-full mx-auto duration-500 hover:bg-black/80 dark:bg-transparent dark:border dark:hover:bg-darkHover"
          type="submit"
        >
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
          Submit now
        </button>
        <p className="">{result}</p>
      </form>
    </>
  );
};

export default Form;
