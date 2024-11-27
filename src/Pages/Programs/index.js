import React, { useState } from "react";
import rating from "../../assets/rating.webp";
import { MdCheck } from "react-icons/md";
import { LuUserPlus } from "react-icons/lu";
import { PiClockCountdown } from "react-icons/pi";
import Compaines from "../Home/Compaines";
import OneLearnCircle from "../../Components/HomePage/OneLearnCircle";
import LmsProject from "../Home/LmsProject";
import Certificate from "../Home/Certificate";
import GetJob from "../Home/GetJob";
import GitHubProfile from "../Home/GitHubProfile";
import ItEngineers from "../Home/ItEngineers";
import UpcomingBatch from "../Home/UpcomingBatch";
import OnlineTaining from "../Home/OnlineTaining";
import OurLocations from "../Home/OurLocations";
import LogoGrid from "../../Components/Course/LogoGrid";
import { useParams } from "react-router-dom";
import { programsData } from "../../utils/CourseData";
import StartNowModal from "../../Components/HomePage/StartNowModal";
import WhyJavaTraining from "../Course/WhyJavaTraining";
import Accordion from "../Course/Accordion";
import WhyDigitalEdify from "../Home/WhyDigitalEdify";
import { IoMdCloudDownload } from "react-icons/io";

const Programs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { name } = useParams();
  const Fundamentals = programsData?.filter((i) => i?.course === name)?.[0];

  const Data2 = [
    "Online & ClassRoom Real-Time training",
    "Project & Task Based Learning",
    "24/7 Learning Support with Dedicated Mentors",
    "Interviews, Jobs, and Placement Support",
  ];

  return (
    <div className="bg-[#FAFDFC]">
      <div className="container mx-auto px-2">
        <div className="flex flex-wrap font-poppins mt-20">
          {/* Left Column */}
          <div className="lg:w-1/2 w-full p-4">
            <div className="text-2xl md:text-4xl font-extrabold mb-4 text-[#212529] ">
              {Fundamentals?.headerTitle}
            </div>
            <div className="flex gap-2.5">
              <div className="mt-3.5">
                {Fundamentals?.courseList?.map((item, index) => {
                  return (
                    <div className="flex-row items-center justify-center">
                      <div className="bg-[#01AC61] rounded-full w-2.5 h-2.5"></div>
                      {index !== Fundamentals?.courseList?.length - 1 && (
                        <div className="border-[#01AC61] border-r h-[17px] w-[5px]"></div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div>
                {Fundamentals?.courseList?.map((item, index) => {
                  return <p className="mt-1">{item}</p>;
                })}
              </div>
            </div>

            <div className="mt-5">
              {Data2.map((item) => {
                return (
                  <div className="flex font-poppins gap-2 my-1.5">
                    <div className="w-[19px] h-[19px] rounded-full flex justify-end bg-gradient-to-b from-[#023892] to-[#4a78da]">
                      <MdCheck className="text-white text-[17px]" />
                    </div>
                    <p className="text-sm font-light text-gray-800">{item}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center justify-start py-4 font-poppins">
              <div className="border-r border-[#5080CC] pr-3">
                <LuUserPlus className="text-2xl md:text-3xl my-2" />
              </div>
              <div className="flex items-center gap-2 border-r border-[#5080CC] px-3">
                <div>
                  <p className="text-xs md:text-2xl font-semibold">50000 +</p>
                  <p className=" text-[10px] md:text-base text-gray-600 font-light">
                    Students Enrolled
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 border-r border-[#5080CC] px-3">
                <div>
                  <p className="text-xs md:text-2xl font-semibold flex items-center">
                    4.7{" "}
                    <img
                      src={rating}
                      alt="rating"
                      className="hidden md:block"
                    />
                    <p className="hidden md:block text-[10px] md:text-base text-gray-600 font-light">
                      (500)
                    </p>
                  </p>
                  <p className="  text-[10px] md:text-base text-gray-600 font-light">
                    Ratings
                  </p>
                </div>
                <PiClockCountdown className="text-2xl md:text-4xl ms-2" />
              </div>
              <div className="flex items-center gap-2 px-3">
                <div>
                  <p className="text-xs md:text-2xl font-semibold">60 Days</p>
                  <p className=" text-[10px] md:text-base text-gray-600 font-light">
                    Duration
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-start flex-wrap mt-3 gap-3">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Java Training"
                className="bg-[#1554BB] text-sm md:text-base text-white px-7 py-2.5 rounded-full font-poppins font-medium"
              >
                SCHEDULE ONLINE DEMO
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Java Training"
                className="bg-white border text-sm md:text-base border-[#1554BB] text-[#1554BB] px-7 py-2.5 rounded-full font-poppins font-medium"
              >
                CONTACT COURSE ADVISER
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 w-full p-4 flex justify-end">
            {Fundamentals?.headerImage && (
              <img
                src={Fundamentals?.headerImage}
                alt="DevOps"
                title="DevOps"
                className="w-full rounded-md"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
      <WhyJavaTraining title={Fundamentals?.courseTitle} />

      <p className="text-xl md:text-3xl font-semibold text-[#343433] text-center mb-10 font-poppins mt-16">
        Our Alumni Work at Top Companies
      </p>

      <Compaines />

      <div className="bg-[#F5F5F5] pt-8">
        <div className="container mx-auto px-2">
          <OneLearnCircle
            title="Learn"
            number="1"
            mainTitle="Explore the Digital Edify way"
          />
          <p className="text-xs md:text-base mt-2 font-poppins text-center">
            Learn from Curated Curriculums{" "}
            <span className="text-blue-800">developed by Industry Experts</span>
          </p>

          <p className="text-2xl md:text-4xl font-poppins font-semibold text-center mt-7 md:mt-16">
            {Fundamentals?.title}
          </p>
          <p className="text-sm md:text-base font-poppins text-center mt-3 mb-16">
            {Fundamentals?.subTitle}
          </p>

          <Accordion data={Fundamentals} />

          <p className="text-2xl md:text-4xl text-[#343433] font-semibold font-poppins text-center mt-5 mb-10">
            TOOlS & PLATFORMS
          </p>

          <LogoGrid logos={Fundamentals?.imageData} />

          {(name === "full_stack_python" || name === "full_stack_mern") && (
            <div className="flex gap-8 justify-center mt-10 pb-24">
              <div className="flex">
                <div className="px-5 py-4 bg-[#1554BB] w-fit text-white">
                  <IoMdCloudDownload size={30} />
                </div>
                <div className="text-lg flex flex-col leading-6 pt-2 px-8 shadow-xl bg-white">
                  <strong>Download</strong>
                  <em>curriculum</em>
                </div>
              </div>
              <div className="px-8 py-[18px] bg-[#1554BB] w-fit text-white">
                SCHEDULE A DEMO
              </div>
            </div>
          )}
        </div>
      </div>

      <OneLearnCircle title="Build" number="2" />
      <p className="text-xs md:text-base mt-2 font-poppins text-center">
        Work on our Real-time{" "}
        <span className="text-blue-800">Projects , Task Based</span>
      </p>

      <LmsProject />

      <Certificate />

      <GetJob />

      <GitHubProfile />

      <ItEngineers />

      <UpcomingBatch />

      <WhyDigitalEdify />

      <OnlineTaining />

      <OurLocations />

      <StartNowModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Programs;
