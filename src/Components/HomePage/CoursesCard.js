import React from 'react'
import { FaCode } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { RiDownloadLine, RiEyeLine } from "react-icons/ri";
import { TbClockHour9 } from 'react-icons/tb';
import WhiteButton from '../WhiteButton';
import BlackButton from '../BlackButton';

const CoursesCard = ({ data }) => {
    return (
        <div className="p-4 font-poppins">
            <a
                // href="https://www.digitaledify.ai/courses/devops-training-certification.html"
                className="block p-8 rounded-lg border border-[#cccccc4f] bg-white/50  hover:shadow-2xl hover:scale-105 transform transition-all duration-300 cursor-pointer"
            // style={{ boxShadow: "#cccccc3b 0 0 15px", }}

            >
                <h5 className="text-xl font-bold text-[#343433]">{data.courseName}</h5>
                <div className="flex flex-wrap gap-4 py-4">
                    <div className="flex items-center  gap-2 ">
                        <div className='bg-white border p-1.5 rounded-md'>
                            <TbClockHour9 className="text-gray-600" size={17} />
                        </div>
                        {data.duration}
                    </div>
                    <div className="flex items-center gap-2 ">
                        <div className='bg-white border p-1.5 rounded-md'>
                            <FaCode className="text-gray-600" size={16} />
                        </div>
                        {data.liveProjects}
                    </div>
                    <div className="flex items-center gap-2 ">
                        <div className='bg-white border p-1.5 rounded-md'>
                            <FaStarHalfAlt className="text-gray-600" size={14} />
                        </div>
                        {data.rating}
                    </div>
                </div>
                <p className="text-gray-700 mb-6">
                    {data.description}
                </p>
                <div className="flex justify-center md:justify-start flex-wrap gap-4">
                    <BlackButton name='Curriculum' icon={<RiDownloadLine size={20} />} />
                    <WhiteButton name='Enroll Now' icon={<RiEyeLine size={20} />} />
                </div>
            </a>
        </div>
    )
}

export default CoursesCard
