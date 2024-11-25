import React from 'react'
import WhiteButton from '../../Components/WhiteButton';
import { CgImage } from 'react-icons/cg';
import { PiBagFill } from 'react-icons/pi';
import { HiDocumentText } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import global from "../../assets/globe.webp";

const GitHubProfile = () => {

    const getJObData = [
        {
            name: "GitHub Profile",
            disc: "Guidance on creating and maintaining a professional GitHub profile to showcase technical projects and coding prowess.",
            icon: <FaGithub size={17} />,
        },
        {
            name: "LinkedIn Profile",
            disc: "Assistance in crafting a compelling LinkedIn profile for networking and visibility among recruiters.",
            icon: <FaLinkedin size={17} />,
        },
        {
            name: "Resume Preparation",
            disc: "Expert advice on resume writing to effectively highlight skills, experience, and achievements.",
            icon: <HiDocumentText size={17} />,
        },
        {
            name: "Help in Applying",
            disc: "Support in identifying suitable job opportunities and navigating the application process.",
            icon: <PiBagFill size={17} />,
        },
    ];

    return (
        <div className="flex justify-between w-full mt-10 md:mt-32 relative p-3">
            <div className=" md:ml-10 xl:ml-80 z-10">
                {getJObData.map((item, index) => {
                    return (
                        <div className="flex justify-center md:justify-between w-full mx-auto font-poppins">
                            <div className="flex-row items-center hidden md:block">
                                <div className="border-dashed border-gray-400 border-r h-20 w-[8px]"></div>
                                <div className=" w-[15px] h-[15px] bg-white border border-gray-300 rounded-full z-10"></div>
                                <div className="border-dashed border-gray-400 border-r h-[130px] w-[8px]"></div>
                            </div>
                            <div className="ps-7 pt-8">
                                <div className="flex items-center ">
                                    <div className="bg-white border p-1.5 rounded-md">
                                        {item.icon}
                                    </div>
                                </div>
                                <p className="text-lg md:text-[22px] font-bold mt-5">
                                    {item.name}
                                </p>
                                <p className="mt-3 md:w-[500px]">{item.disc}</p>
                            </div>
                        </div>
                    );
                })}
                <div className="ml-7 md:ml-12 mt-10">
                    <WhiteButton name='Contact Course Advisor' icon={<CgImage size={17} />} />
                </div>
            </div>
            <img
                src={global}
                alt="global"
                className="absolute right-0 hidden md:block h-[550px] lg:h-full "
            />
        </div>
    )
}

export default GitHubProfile