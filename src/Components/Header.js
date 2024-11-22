import React, { useState } from "react";
import digitaledify from "../assets/digitaledify.png";
import { FaAngleDown } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="bg-white border-b top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-24">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <div className="">
            <img
              src={digitaledify}
              alt="Digital Edify - Best AWS, DevOps, Python, Digital Marketing Training Institute"
              title="Digital Edify - Best AWS, DevOps, Python, Digital Marketing Training Institute"
              className="h-16"
            />
          </div>

          <div className="flex gap-6">
            <div className="content-center">
              <ul className="flex gap-5 ">
                <li>
                  <a className="font-normal text-base font-sans uppercase flex gap-2 items-center">
                    Courses <FaAngleDown size={15} />
                  </a>
                </li>
                <li>
                  <a className="font-normal text-base font-sans uppercase flex gap-2 items-center">
                    Programs <FaAngleDown size={15} />
                  </a>
                </li>
                <li>
                  <a className="font-normal text-base font-sans uppercase flex gap-2 items-center">
                    Services <FaAngleDown size={15} />
                  </a>
                </li>
                <li>
                  <a className="font-normal text-base font-sans uppercase flex gap-2 items-center">
                    Resources <FaAngleDown size={15} />
                  </a>
                </li>
                <li>
                  <a className="font-normal text-base font-sans uppercase flex gap-2 items-center">
                    Company <FaAngleDown size={15} />
                  </a>
                </li>
              </ul>
            </div>
            <div className=" flex gap-5">
              <button className="bg-white text-base border border-black py-2.5 px-6 rounded-3xl hover:text-blue-800 hover:border-blue-800">
                Login
              </button>
              <button className="text-white text-base bg-sky-700 py-2.5 px-6 rounded-3xl  hover:bg-pink-700">
                Start Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
