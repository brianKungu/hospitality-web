import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <nav className="border-b border-textColor/50 fixed top-0 left-0 z-20 w-full bg-inherit">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
            Hospitality
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-neutral rounded-lg md:hidden hover:bg-textcolor/50 focus:outline-none focus:ring-2 focus:ring-textColor dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={toggleNav}
        >
          <span className="sr-only">Open main menu</span>
          <HiOutlineBars3BottomRight
            className={`h-6 w-6 ${openNav ? "hidden" : "block"}`}
          />
          <AiOutlineClose
            className={`h-6 w-6 ${openNav ? "block" : "hidden"}`}
          />
        </button>
        {/* Desktop navigation links */}
        <div
          className="hidden md:flex items-center space-x-4"
          id="navbar-default"
        >
          <ul className="text-lg font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.pathName}
                  className={
                    router.pathname === link.pathName
                      ? "block text-red-300 bg-gray-900 py-2 pl-3 pr-4"
                      : "block py-2 pl-3 pr-4 text-neutral hover:text-textColor"
                  }
                //   aria-current="page"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Mobile navigation links */}
      <div className={`md:hidden ${openNav ? "block" : "hidden"}`}>
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-primaryBackground  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {navigationLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.pathName}
                className={
                  router.pathname === link.pathName
                    ? "block text-textColor py-2 pl-3 pr-4"
                    : "block py-2 pl-3 pr-4 text-neutral hover:text-textColor"
                }
                aria-current="page"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

const navigationLinks = [
  { name: "Home", pathName: "/" },
  { name: "Services", pathName: "/#services" },
  { name: "Gallery", pathName: "/#gallery" },
  { name: "Contact us", pathName: "/#contact" },
];

export default Navbar;
