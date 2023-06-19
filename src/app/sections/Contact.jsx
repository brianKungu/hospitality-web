import Image from "next/image";
import React from "react";
import Section from "./Section";

function Contact() {
  return (
    <Section id="contact">
      <section className="py-12"></section>
      <h2 className="uppercase md:text-4xl text-xl font-bold">Contact us</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
        <div className="col-span-1">
          <form className="mt-6 flex flex-col gap-4">
            <div>
              <label htmlFor="fullname"></label>
              <input
                type="text"
                placeholder="Full name"
                className="w-full p-4 rounded-md border border-neutral bg-transparent text-textColor focus:outline-none focus:border-textColor placeholder-textColor"
                required
              />
            </div>
            <div>
              <label htmlFor="email"></label>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 rounded-md border border-neutral bg-transparent text-textColor focus:outline-none focus:border-textColor placeholder-textColor"
                required
              />
            </div>
            <div>
              <label htmlFor="message"></label>
              <textarea
                placeholder="Talk to us"
                className="w-full h-[133px] md:h-[250px] p-4 rounded-md border border-neutral bg-transparent text-textColor focus:outline-none focus:border-textColor placeholder-textColor"
                required
              />
            </div>
            <button className="bg-textColor/90 hover:bg-textColor text-slate-100 md:w-1/4 w-full p-4 rounded-md">
              Send
            </button>
          </form>
        </div>
        <div>
          <Image
            src="/contactus.svg"
            width={500}
            height={500}
            loading="lazy"
            alt="contact us"
            className="text-transparent"
          />
        </div>
      </div>
    </Section>
  );
}

export default Contact;
