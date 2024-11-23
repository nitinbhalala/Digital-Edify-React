import React, { useEffect, useState } from "react";
import digitaledify from "../assets/digitaledify.png";
import { FaAngleDown, FaBars } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import StartNowModal from "./HomePage/StartNowModal";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleMouseEnter = (data) => {
    setIsDropdownOpen(data);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white border-b top-0 lg:-left-2 right-0 z-50">
      <div className="container mx-auto px-0 xl:px-24">
        <div className="flex items-center justify-between px-8 py-3 pb-2 lg:p-0 lg:px-0">
          {/* Logo */}
          <div >
            <img
              src={digitaledify}
              alt="Digital Edify - Best AWS, DevOps, Python, Digital Marketing Training Institute"
              title="Digital Edify - Best AWS, DevOps, Python, Digital Marketing Training Institute"
              className="h-14"
            />
          </div>
          {/* Mobile Menu Icon */}
          <div className="lg:hidden z-20">
            <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          <div
            className={` ${
              isMobileMenuOpen ? "block px-6 pt-10" : "hidden"
            } fixed lg:static top-0 left-0 w-full lg:w-auto h-screen lg:h-auto flex flex-col lg:flex-row transition-all bg-white lg:bg-transparent lg:flex gap-3 md:gap-6 lg:items-center`}
          >
            <div className="content-center">
              <ul className="flex flex-col lg:flex-row lg:gap-5 ">
                <li
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    className={`font-normal py-5 text-base font-sans uppercase flex gap-2 items-center cursor-pointer ${
                      isDropdownOpen === 1
                        ? "border-b border-b-[#F06292]"
                        : "border-0"
                    } `}
                  >
                    Courses <FaAngleDown size={15} />
                  </a>
                  {isDropdownOpen === 1 && (
                    <div className="absolute top-[57px] -left-2 mt-2 px-5 bg-[#fafafa] z-10 shadow-lg rounded-lg p-4 w-max">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        {/* Application Stack */}
                        <div className="w-60">
                          <h5 className="font-bold mb-3 text-sky-600">
                            Application Stack
                          </h5>
                          <ul className="space-y-2">
                            <li>
                              <a
                                href="#"
                                className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                Java
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                UI/UX Design
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                Python
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                React JS
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                Full-Stack Developer
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                Business Analyst
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                Software Testing
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* Platform Stack */}
                        <div className="w-60">
                          <h5 className="font-bold mb-3 text-sky-600">
                            Platform Stack
                          </h5>
                          <ul className="space-y-2">
                            <li>
                              <a
                                href="#"
                                className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                DevOps
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                Azure DevOps
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                AWS Cloud
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                Azure Cloud
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* AI Data Stack */}
                        <div className="w-60">
                          <h5 className="font-bold mb-3 text-sky-600">
                            AI Data Stack
                          </h5>
                          <ul className="space-y-2">
                            <li>
                              <a
                                href="#"
                                className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                Azure Data Engineering
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                AWS Data Engineering
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                GCP Data Engineering
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                AI Training & Certification
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                Data Science Training
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                Power BI
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
                <li
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    className={`font-normal text-base font-sans uppercase flex gap-2 items-center cursor-pointer py-5 ${
                      isDropdownOpen === 2
                        ? "border-b border-b-[#F06292]"
                        : "border-0"
                    }`}
                  >
                    Programs <FaAngleDown size={15} />
                  </a>
                  {isDropdownOpen === 2 && (
                    <div className="absolute top-[57px] -left-2 mt-2 bg-[#fafafa] z-10 shadow-lg rounded-lg p-4 w-max">
                      {/* Application Stack */}
                      <div className="w-60">
                        <ul className="space-y-2">
                          <li>
                            <a
                              href="#"
                              className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Full-Stack Java
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Full-Stack Python
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Full-Stack MERN
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Full-Stack AI Data Science
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Multi-Cloud DevOps
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Multi-Cloud Data Engineering
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              AI Data Analyst
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
                <li
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(3)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    className={`font-normal text-base font-sans uppercase flex gap-2 items-center cursor-pointer py-5 ${
                      isDropdownOpen === 3
                        ? "border-b border-b-[#F06292]"
                        : "border-0"
                    }`}
                  >
                    Services <FaAngleDown size={15} />
                  </a>
                  {isDropdownOpen === 3 && (
                    <div className="absolute top-[57px] -left-2 mt-2 bg-[#fafafa] z-10 shadow-lg rounded-lg p-4 w-max">
                      {/* Application Stack */}
                      <div className="w-60">
                        <ul className="space-y-2">
                          <li>
                            <a
                              href="#"
                              className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Class Training
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Online Training
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Weekend Training
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Corporate Training
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              One-To-One Training
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
                <li
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(4)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    className={`font-normal text-base font-sans uppercase flex gap-2 items-center cursor-pointer py-5 ${
                      isDropdownOpen === 4
                        ? "border-b border-b-[#F06292]"
                        : "border-0"
                    }`}
                  >
                    Resources <FaAngleDown size={15} />
                  </a>
                  {isDropdownOpen === 4 && (
                    <div className="absolute top-[57px] -left-2 mt-2 bg-[#fafafa] z-10 shadow-lg rounded-lg p-4 w-max">
                      {/* Application Stack */}
                      <div className="w-60">
                        <ul className="space-y-2">
                          <li>
                            <a
                              href="#"
                              className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Blogs
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Demos
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
                <li
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(5)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    className={`font-normal text-base font-sans uppercase flex gap-2 items-center cursor-pointer py-5 ${
                      isDropdownOpen === 5
                        ? "border-b border-b-[#F06292]"
                        : "border-0"
                    }`}
                  >
                    Company <FaAngleDown size={15} />
                  </a>
                  {isDropdownOpen === 5 && (
                    <div className="absolute top-[57px] -left-2 mt-2 bg-[#fafafa] z-10 shadow-lg rounded-lg p-4 w-max">
                      {/* Application Stack */}
                      <div className="w-60">
                        <ul className="space-y-2">
                          <li>
                            <a
                              href="#"
                              className="flex items-center text-gray-600 hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              About Us
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              </ul>
            </div>
            <div className="flex gap-5 h-fit ">
              <button className="bg-white text-base border border-black py-2 px-6 rounded-3xl hover:text-blue-800 hover:border-blue-800">
                Login
              </button>
              <button className="text-white text-base bg-sky-700 py-2 px-6 rounded-3xl  hover:bg-pink-700" onClick={() => openModal()}>
                Start Now
              </button>
            </div>
          </div>
        </div>
        {isOpen && <StartNowModal closeModal={closeModal} />}
      </div>
    </header>
  );
};

export default Header;
