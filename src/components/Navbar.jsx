import React from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <>
      <nav className="max-[1000px]:hidden py-5 sticky top-0 z-10 text-xl px-[10%] border-b-[1px] border-b-black bg-white">
        <ul className="flex items-center">
          <div className="spacer flex-1">
            <li className=" whitespace-nowrap">
              <a href="" className="hover:text-orange-400">My Portfolio</a>
            </li>
          </div>
          <li className="hover:text-orange-400">
            <a href="/#background">Background</a>
          </li>
          <li className="hover:text-orange-400 mx-20">
            <a href="/#projects">Projects</a>
          </li>
          <li className="hover:text-orange-400 mr-auto whitespace-nowrap">
            <a href="/#contact">Contact Me</a>
          </li>
          <div className="spacer flex-1"></div>
        </ul>
      </nav>
      <MobileNav />
    </>
  );
};

export default Navbar;
