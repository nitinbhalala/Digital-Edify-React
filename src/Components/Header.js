import React, { useEffect, useState } from "react";
import digitaledify from "../assets/digitaledify.png";
import { FaAngleDown, FaBars } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import StartNowModal from "./HomePage/StartNowModal";
import { LuChevronDown } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

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
    <header className="sticky top-0 right-0 z-50 bg-white border-b lg:-left-2">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between px-8 py-3 pb-2 lg:p-0 lg:px-0">
          {/* Logo */}
          <div>
            <img
              onClick={() => navigate("/")}
              src={digitaledify}
              alt="Digital Edify - Best AWS"
              title="Digital Edify - Best AWS"
              loading="lazy"
              className="cursor-pointer h-14"
            />
          </div>
          {/* Mobile Menu Icon */}
          <div className="z-20 lg:hidden">
            <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          <div
            className={` ${isMobileMenuOpen ? "block px-6 pt-10" : "hidden"
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
                    className={`font-normal py-7 text-sm font-poppins uppercase flex gap-2 items-center cursor-pointer ${isDropdownOpen === 1
                      ? "border-b border-b-[#F06292]"
                      : "border-0"
                      } `}
                  >
                    Courses <LuChevronDown size={15} />
                  </a>
                  {isDropdownOpen === 1 && (
                    <div className="absolute top-[57px] -left-2 mt-2 px-5 bg-[#fafafa] z-10 shadow-lg rounded-lg p-4 w-max">
                      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
                        {/* Application Stack */}
                        <div className="w-60">
                          <h5 className="mb-3 font-bold text-sky-600">
                            Application Stack
                          </h5>
                          <ul className="space-y-2">
                            <li>
                              <p
                                className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                                onClick={() => navigate("/courses/java-training-certification")}
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                Java
                              </p>
                            </li>
                            <li>
                              <p
                                onClick={() => navigate("/courses/ui-ux-design-training")}
                                className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                UI/UX Design
                              </p>
                            </li>
                            <li>
                              <p
                                onClick={() => navigate("/courses/python-training-certification")}
                                className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                Python
                              </p>
                            </li>
                            <li>
                              <p
                                onClick={() => navigate("/courses/react-js-training-certification")}
                                className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                React JS
                              </p>
                            </li>
                            <li>
                              <p
                                onClick={() =>
                                  navigate("/courses/full-stack-developer-course")
                                }
                                className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                Full-Stack Developer
                              </p>
                            </li>
                            <li>
                              <p
                                onClick={() =>
                                  navigate("/courses/business-analyst-training-certification")
                                }
                                className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                Business Analyst
                              </p>
                            </li>
                            <li>
                              <p
                                onClick={() =>
                                  navigate("/courses/software-testing-training")
                                }
                                className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                Software Testing
                              </p>
                            </li>
                          </ul>
                        </div>
                        {/* Platform Stack */}
                        <div className="w-60">
                          <h5 className="mb-3 font-bold text-sky-600">
                            Platform Stack
                          </h5>
                          <ul className="space-y-2">
                            <li>
                              <p
                                onClick={() => navigate("/courses/devops-training-certification")}
                                className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                DevOps
                              </p>
                            </li>
                            <li>
                              <p
                                onClick={() => navigate("/courses/azure-devops-training-certification")}
                                className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                Azure DevOps
                              </p>
                            </li>
                            <li>
                              <p
                                onClick={() => navigate("/courses/aws-cloud-training-certification")}
                                className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                AWS Cloud
                              </p>
                            </li>
                            <li>
                              <p
                                onClick={() => navigate("/courses/azure-cloud-training-certification")}
                                className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                Azure Cloud
                              </p>
                            </li>
                            <li>
                              <p
                                onClick={() => navigate("/courses/sales-force-training-certification")}
                                className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                Salesforce
                              </p>
                            </li>
                          </ul>
                        </div>
                        {/* AI Data Stack */}
                        <div className="w-60">
                          <h5 className="mb-3 font-bold text-sky-600">
                            AI Data Stack
                          </h5>
                          <ul className="space-y-2">
                            <li>
                              <p
                                onClick={() =>
                                  navigate("/courses/azure-data-engineering-training-certification")
                                }
                                className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                Azure Data Engineering
                              </p>
                            </li>
                            <li>
                              <p
                                onClick={() =>
                                  navigate("/courses/aws-data-engineering-training-certification")
                                }
                                className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                AWS Data Engineering
                              </p>
                            </li>
                            <li>
                              <p
                                onClick={() =>
                                  navigate("/courses/gcp-data-engineering-training-certification")
                                }
                                className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                GCP Data Engineering
                              </p>
                            </li>
                            <li>
                              <p
                                onClick={() =>
                                  navigate(
                                    "/courses/ai-training-certification"
                                  )
                                }
                                className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                AI Training & Certification
                              </p>
                            </li>
                            <li>
                              <p
                                onClick={() =>
                                  navigate("/courses/data-science-training-certification")
                                }
                                className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                Data Science Training
                              </p>
                            </li>
                            <li>
                              <p
                                onClick={() => navigate("/courses/power-bi-training-certification")}
                                className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                Power BI
                              </p>
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
                    className={`font-normal text-sm font-poppins uppercase flex gap-2 items-center cursor-pointer py-7 ${isDropdownOpen === 2
                      ? "border-b border-b-[#F06292]"
                      : "border-0"
                      }`}
                  >
                    Programs <LuChevronDown size={15} />
                  </a>
                  {isDropdownOpen === 2 && (
                    <div className="absolute top-[57px] -left-2 mt-2 bg-[#fafafa] z-10 shadow-lg rounded-lg p-4 w-max">
                      {/* Application Stack */}
                      <div className="w-60">
                        <ul className="space-y-2">
                          <li>
                            <p
                              onClick={() =>
                                navigate("/programs/full-stack-java-training")
                              }
                              className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Full-Stack Java
                            </p>
                          </li>
                          <li>
                            <p
                              onClick={() =>
                                navigate("/programs/full-stack-python-training")
                              }
                              className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Full-Stack Python
                            </p>
                          </li>
                          <li>
                            <p
                              onClick={() =>
                                navigate("/programs/full-stack-mern-training")
                              }
                              className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Full-Stack MERN
                            </p>
                          </li>
                          <li>
                            <p
                              onClick={() =>
                                navigate("/programs/full-stack-ai-data-science-training")
                              }
                              className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Full-Stack AI Data Science
                            </p>
                          </li>
                          <li>
                            <p
                              onClick={() =>
                                navigate("/programs/multi-cloud-devops-training")
                              }
                              className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Multi-Cloud DevOps
                            </p>
                          </li>
                          <li>
                            <p
                              onClick={() =>
                                navigate(
                                  "/programs/multi-cloud-data-engineering-training"
                                )
                              }
                              className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Multi-Cloud Data Engineering
                            </p>
                          </li>
                          <li>
                            <p
                              onClick={() =>
                                navigate("/programs/data-analyst-training")
                              }
                              className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              AI Data Analyst
                            </p>
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
                    className={`font-normal text-sm font-poppins uppercase flex gap-2 items-center cursor-pointer py-7 ${isDropdownOpen === 3
                      ? "border-b border-b-[#F06292]"
                      : "border-0"
                      }`}
                  >
                    Services <LuChevronDown size={15} />
                  </a>
                  {isDropdownOpen === 3 && (
                    <div className="absolute top-[57px] -left-2 mt-2 bg-[#fafafa] z-10 shadow-lg rounded-lg p-4 w-max">
                      {/* Application Stack */}
                      <div className="w-60">
                        <ul className="space-y-2">
                          <li>
                            <p
                              onClick={() =>
                                navigate("/services/class-training")
                              }
                              className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Class Training
                            </p>
                          </li>
                          <li>
                            <p
                              onClick={() =>
                                navigate("/services/online-training")
                              }
                              className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Online Training
                            </p>
                          </li>
                          <li>
                            <p
                              onClick={() =>
                                navigate("/services/weekend-training")
                              }
                              className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Weekend Training
                            </p>
                          </li>
                          <li>
                            <p
                              onClick={() =>
                                navigate("/services/corporate-training")
                              }
                              className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Corporate Training
                            </p>
                          </li>
                          <li>
                            <p
                              onClick={() =>
                                navigate("/services/one-to-one-training")
                              }
                              className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              One-To-One Training
                            </p>
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
                  <p
                    className={`font-normal text-sm font-poppins uppercase flex gap-2 items-center cursor-pointer py-7 ${isDropdownOpen === 4
                      ? "border-b border-b-[#F06292]"
                      : "border-0"
                      }`}
                  >
                    Resources <LuChevronDown size={15} />
                  </p>
                  {isDropdownOpen === 4 && (
                    <div className="absolute top-[57px] -left-2 mt-2 bg-[#fafafa] z-10 shadow-lg rounded-lg p-4 w-max">
                      {/* Application Stack */}
                      <div className="w-60">
                        <ul className="space-y-2">
                          <li>
                            <p
                              onClick={() => navigate("/blogs/edify-blogs")}
                              className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Blogs
                            </p>
                          </li>
                          <li>
                            <p
                              onClick={() => navigate("/demos/edify-demos")}
                              className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Demos
                            </p>
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
                  <p
                    className={`font-normal text-sm font-poppins uppercase flex gap-2 items-center cursor-pointer py-7 ${isDropdownOpen === 5
                      ? "border-b border-b-[#F06292]"
                      : "border-0"
                      }`}
                  >
                    Company <LuChevronDown size={15} />
                  </p>
                  {isDropdownOpen === 5 && (
                    <div className="absolute top-[57px] -left-2 mt-2 bg-[#fafafa] z-10 shadow-lg rounded-lg p-4 w-max">
                      {/* Application Stack */}
                      <div className="w-60">
                        <ul className="space-y-2">
                          <li>
                            <p
                              onClick={() => navigate("/company/about-us")}
                              className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              About Us
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              </ul>
            </div>
            <div className="flex gap-5 h-fit">
              <button
                onClick={() =>
                  window.open(
                    "https://digitallync.us.auth0.com/u/login?state=hKFo2SBFWFN5eGxGcEFlRG1TcmNNVmZiVWZNRDNWdzNpZEpwR6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIDd6cjdTcWVUYlFXbTRnM080X0llVG9ranNJQUNkZ09Bo2NpZNkgZzQxSlFXRGtURTRmS0FsN0wwZEZ5Q21TaW5YWExHcWg",
                    "_blank"
                  )
                }
                className="bg-white font-poppins text-[15px] xl:text-base border border-black py-2 px-6 rounded-3xl hover:text-blue-800 hover:border-blue-800"
              >
                Login
              </button>
              <button
                className="text-white font-poppins text-[15px] xl:text-base bg-[#015DBE] py-2 px-6 rounded-3xl  hover:bg-pink-700"
                onClick={() => setIsOpen(!isOpen)}
              >
                Start Now
              </button>
            </div>
          </div>
        </div>
        <StartNowModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

export default Header;
