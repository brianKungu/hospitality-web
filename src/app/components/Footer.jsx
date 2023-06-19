import React from "react";

function Footer() {
  function getCurrentYear() {
    return new Date().getFullYear();
  }
  return (
    <footer className="text-neutral mt-10 border-t border-textColor/50 flex flex-col items-center justify-center">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-10">
        <div>
          <h2 className="uppercase md:text-3xl lg:text-4xl text-xl font-bold">
            About us
          </h2>
          <p className="text-neutral/80 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>
        <div>
          <h2 className="uppercase md:text-3xl lg:text-4xl text-xl font-bold">
            Our mission
          </h2>
          <p className="text-neutral/80 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>
        <div>
          <h2 className="uppercase md:text-3xl lg:text-4xl text-xl font-bold">
            Contact us
          </h2>
          <p className="text-neutral/80 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>
      </div>
      <p className="mx-auto mt-10">©{getCurrentYear()}. All rights reserved</p>
    </footer>
  );
}

export default Footer;
