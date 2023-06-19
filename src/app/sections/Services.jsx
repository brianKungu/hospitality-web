import Image from "next/image";
import React from "react";
import Section from "./Section";

function Services() {
  return (
    <Section id="services">
      <section className="py-12"></section>
      <h2 className="uppercase md:text-4xl text-xl font-bold">What we do</h2>
      <div className="block md:grid md:grid-cols-3 gap-4 mt-6">
        <div className="block md:col-span-1">
          <Image
            src="https://images.unsplash.com/photo-1601063458289-77247ba485ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGhvc3BpdGFsaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            className="rounded-lg shadow-lg"
            height={1000}
            width={1000}
            loading="lazy"
            alt="image"
          />
        </div>
        <div className="block md:col-span-2 mt-4 md:mt-0">
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index}>
                <h3 className="font-bold text-lg">{service.title}</h3>
                <p className="text-neutral/80 mt-2 text-md">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

const services = [
  {
    title: "Personal chef services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Kitchen planning and design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Personal chef services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Kitchen planning and design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default Services;
