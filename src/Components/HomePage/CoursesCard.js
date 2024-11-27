import React from "react";
import { FaCode } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { RiDownloadLine, RiEyeLine, RiShuffleFill } from "react-icons/ri";
import { TbClockHour9 } from "react-icons/tb";
import WhiteButton from "../WhiteButton";
import BlackButton from "../BlackButton";

const CoursesCard = ({ data }) => {
  return (
    <div className="p-2 md:p-4 font-poppins">
      <a
        // href="https://www.digitaledify.ai/courses/devops-training-certification.html"
        className="block p-4 md:p-8 rounded-lg border border-[#cccccc4f] bg-white/50  hover:shadow-2xl hover:scale-105 transform transition-all duration-300 cursor-pointer hover:bg-white"
        // style={{ boxShadow: "#cccccc3b 0 0 15px", }}
      >
        <h5 className="text-xl font-bold text-[#343433]">{data.courseName}</h5>
        <div className="flex flex-wrap gap-4 py-4">
          {data?.duration && (
            <div className="flex items-center  gap-2 ">
              <div className="bg-white border p-[2px] md:p-1.5 rounded-md">
                <TbClockHour9 className="text-gray-600" size={17} />
              </div>
              <p className="text-xs md:text-base">{data?.duration}</p>
            </div>
          )}
          {data?.liveProjects && (
            <div className="flex items-center gap-2 ">
              <div className="bg-white border p-[2px] md:p-1.5 rounded-md">
                <FaCode className="text-gray-600" size={16} />
              </div>
              <p className="text-xs md:text-base">{data?.liveProjects}</p>
            </div>
          )}
          {data?.rating && (
            <div className="flex items-center gap-2 ">
              <div className="bg-white border p-[2px] md:p-1.5 rounded-md">
                <FaStarHalfAlt className="text-gray-600" size={14} />
              </div>
              <p className="text-xs md:text-base">{data?.rating}</p>
            </div>
          )}
        </div>
        <p className="text-gray-700 mb-6 text-xs md:text-base">
          {data?.description}
        </p>
        <div className="flex justify-center md:justify-start flex-wrap gap-4">
          <BlackButton
            name="Curriculum"
            icon={<RiDownloadLine className="md:text-lg" />}
          />
          <WhiteButton
            name="Enroll Now"
            icon={<RiShuffleFill className="md:text-lg" />}
          />
        </div>
      </a>
    </div>
  );
};

export default CoursesCard;
