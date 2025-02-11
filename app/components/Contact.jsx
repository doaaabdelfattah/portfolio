import React from "react";
import SectionHeader from "./reusable/SectionHeader";
import Form from "./Form";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20  bg-no-repeat  bg-center bg-[url('/footer-bg-color.png')] dark:bg-none bg-[length:90%_auto]"
    >
      <SectionHeader
        title="Get in touch"
        subtitle="Connect with me"
        description=" I'd love to hear from you! if you have any questions, comments or feedback, please use the form below"
      />
      <Form />
    </div>
  );
};

export default Contact;
