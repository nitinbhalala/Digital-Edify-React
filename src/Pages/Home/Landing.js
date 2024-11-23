import React, { useEffect, useState } from "react";
import img1 from "../../assets/code1.webp";
import img2 from "../../assets/crm.webp";
import img3 from "../../assets/hrms.webp";
import certi1 from "../../assets/certificateim.jpg";
import global from "../../assets/globe.webp";
import person from "../../assets/satish.webp";
import person2 from "../../assets/vijay.webp";
import person3 from "../../assets/akhil.webp";
import person4 from "../../assets/raveena.png";

import place1 from "../../assets/kakinada.jpg";
import place2 from "../../assets/bangalore.jpg";
import place3 from "../../assets/hyd.jpg";
import OneLearnCircle from "../../Components/HomePage/OneLearnCircle";
import CoursesCard from "../../Components/HomePage/CoursesCard";
import { VscGraph } from "react-icons/vsc";
import WhiteButton from "../../Components/WhiteButton";
import {
    FaCodepen,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa6";
import RoundedButoon from "../../Components/RoundedButoon";
import { HiArrowSmRight, HiDocumentText } from "react-icons/hi";
import { PiBagFill } from "react-icons/pi";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiStopwatch } from "react-icons/bi";
import BlackButton from "../../Components/BlackButton";
import digitaledify from "../../assets/digitaledify.png";
import { RiFacebookFill } from "react-icons/ri";
import { MdOutlineWhatsapp } from "react-icons/md";
import Infosys from "../../assets/Compaines/p5.webp";
import oracle from "../../assets/oracle.webp";
import c360soft from "../../assets/c360soft.webp";
import jpmore from "../../assets/jpmorgan.webp";
import { CgImage } from "react-icons/cg";

const CourseData = [
    {
        courseName: "DevOps Training",
        duration: "2 Months",
        liveProjects: "5 Live Projects",
        rating: "4.7/5",
        description:
            "DevOps training emphasizes on integrating development, operations, automation, and continuous delivery collaboration.",
    },
    {
        courseName: "Java Training",
        duration: "2 Months",
        liveProjects: "5 Live Projects",
        rating: "4.9/5",
        description:
            "Java training focuses on programming basics, OOP, data structures, APIs, and app development.",
    },
    {
        courseName: "AWS Cloud Training",
        duration: "2 Months",
        liveProjects: "5 Live Projects",
        rating: "4.8/5",
        description:
            "AWS training focuses on cloud computing with core services, architecture, security, and best practices.",
    },
    {
        courseName: "React Training",
        duration: "2 Months",
        liveProjects: "5 Live Projects",
        rating: "4.8/5",
        description:
            "React JS training covers UI building, component architecture, state management, hooks, and modern practices.",
    },

];

const ProgramData = [
    {
        courseName: "Multi-Cloud DevOps ",
        duration: "3 Months",
        liveProjects: "6 Live Projects",
        rating: "4.7/5",
        description:
            "Cloud DevOps Masters Training combines cloud computing and DevOps principles to empower professionals with the knowledge and skills needed to efficiently manage and automate software delivery pipelines in cloud environments.",
    },
    {
        courseName: "FullStack Java",
        duration: "3 Months",
        liveProjects: "6 Live Projects",
        rating: "4.8/5",
        description:
            "Full Stack Masters Training equips individuals with advanced expertise in both front- end and back - end development, enabling them to architect and build complex, full - fledged web applications with proficiency and versatility.",
    },
    {
        courseName: "AI & Data Science ",
        duration: "3 Months",
        liveProjects: "6 Live Projects",
        rating: "4.9/5",
        description:
            "Salesforce Masters Training provides comprehensive knowledge and skills for mastering the Salesforce platform, enabling professionals to design, implement, and optimise Salesforce solutions with expertise, driving business success.",
    },
    {
        courseName: "AI Data Analyst",
        duration: "3 Months",
        liveProjects: "6 Live Projects",
        rating: "4.8/5",
        description:
            " Business Data Analyst Masters Training offers a comprehensive way to develop advanced data analysis and interpretation skills, equipping professionals to make informed,data- driven decisions and drive business growth with precision.",
    },
];

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

const engineersData = [
    {
        id: 1,
        name: "Satish Korlapati",
        role: "Senior Associate Consultant",
        company: "Infosys",
        companyLogo: Infosys,
        profilePic: person,
        linkedIn: "#",
    },
    {
        id: 2,
        name: "Raveena Reddy",
        role: "SRE/DevOps Engineer",
        company: "JPMorgan",
        companyLogo: jpmore,
        profilePic: person4,
        linkedIn: "#",
    },
    {
        id: 3,
        name: "Akhil Nagothu",
        role: "Cloud DevOps Engineer-2",
        company: "Oracle",
        companyLogo: oracle,
        profilePic: person3,
        linkedIn: "#",
    },
    {
        id: 4,
        name: "Vijay Kumar Putturu",
        role: "Cloud DevOps Engineer",
        company: "C360 Soft",
        companyLogo: c360soft,
        profilePic: person2,
        linkedIn: "#",
    },
];

const locations = [
    {
        id: 1,
        image: place3,
        title: "Hyderabad, Telangana",
        description:
            "2nd Floor, Hitech City Rd, Above Domino's, opp. Cyber Towers, Jai Hind Enclave, Hyderabad, Telangana.",
    },
    {
        id: 2,
        image: place2,
        title: "Bengaluru, Karnataka",
        description:
            "3rd Floor, Site No 1&2 Saroj Square, Whitefield Main Road, Munnekollal Village Post, Marathahalli, Bengaluru, Karnataka.",
    },
    {
        id: 3,
        image: place1,
        title: "Kakinada, Andhra",
        description:
            "Madhav Nager Main Road, Opp SBI Bank, Opp SP Office, Kakinada, Andhra Pradesh.",
    },
];

const batches = [
    {
        title: "Week Day Batches",
        schedule: "(Mon-Fri)",
        time: {
            date: "25th Sept 2023",
            day: "Monday",
            startTime: "8 AM (IST)",
            duration: "1hr-1:30hr / Per Session",
        },
        demoLink: "#",
    },
    {
        title: "Week Day Batches",
        schedule: "(Mon-Fri)",
        time: {
            date: "27th Sept 2023",
            day: "Wednesday",
            startTime: "10 AM (IST)",
            duration: "1hr-1:30hr / Per Session",
        },
        demoLink: "#",
    },
    {
        title: "Week Day Batches",
        schedule: "(Mon-Fri)",
        time: {
            date: "29th Sept 2023",
            day: "Friday",
            startTime: "12 PM (IST)",
            duration: "1hr-1:30hr / Per Session",
        },
        demoLink: "#",
    },
];

const Landing = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const textItems = [
        {
            text: "Learn.",
            color: "from-[#006dbd] to-[#002cd4] bg-clip-text text-transparent",
        },
        {
            text: "Build.",
            color: "from-[#5e00c8] to-[#ac008e] bg-clip-text text-transparent",
        },
        {
            text: "Get Job.",
            color: "from-[#ac008e] to-[#cd0064] bg-clip-text text-transparent",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % textItems.length);
        }, 1000); // Changes every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [textItems.length]);

    return (
        <>
            <div className="text-center font-poppins">
                <p className="text-[1.25rem] mb-1 ">Explore the Digital Edify way</p>
                <OneLearnCircle title="Learn" number="1" />
                <p className="text-xs md:text-base mt-2">
                    Experience the New way of Learning with AI <br />
                    Digital Edify offers best technologies in the work, Curated for your
                    Career Growth
                </p>
            </div>

            <div className="container mx-auto px-2 relative">
                <div className="absolute -left-40 top-64 w-72 sm:w-[600px] h-[500px] rounded-full z-[-1] bg-[rgba(255,41,41,.059)] shadow-[0_0_200px_rgba(255,41,41,.141)] opacity-80" />
                <p class="text-2xl md:text-3xl font-bold text-center my-16 font-poppins text-[#343433]">
                    {" "}
                    Courses
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    {CourseData.map((item, index) => {
                        return <CoursesCard data={item} />;
                    })}
                </div>
            </div>

            <div className="mt-16 mb-36 flex justify-center">
                <WhiteButton
                    name="View All Courses"
                    theme="blue"
                    icon={<VscGraph size={20} />}
                />
            </div>

            <div className="container mx-auto px-2 relative">
                <div className="absolute left-0 top-0 sm:-left-80 sm:-top-52 w-72 sm:w-[600px] h-[500px] rounded-full z-[-1] bg-[rgba(255,41,41,.059)] shadow-[0_0_200px_rgba(255,41,41,.141)] opacity-80" />
                <div className="absolute top-28 sm:-left-36 sm:top-48 w-72 sm:w-[600px] h-[500px] rounded-full z-[-1] bg-[rgba(255,41,41,.059)] shadow-[0_0_200px_rgba(255,41,41,.141)] opacity-80" />
                <p class="text-2xl md:text-3xl font-bold text-center my-16 font-poppins text-[#343433]">
                    Programs
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {ProgramData.map((item, index) => {
                        return <CoursesCard data={item} />;
                    })}
                </div>
            </div>

            <div className="text-center mt-5 relative">
                <div className="absolute left-0 top-0 lg:-left-1 lg:-top-10 w-72 sm:w-[600px] h-[500px] rounded-full z-[-1] bg-[rgba(255,41,41,.059)] shadow-[0_0_200px_rgba(255,41,41,.141)] opacity-80" />
                <div className="absolute hidden lg:block top-28 lg:left-40 sm:top-[420px] w-72 sm:w-[600px] h-[500px] rounded-full z-[-1] bg-[rgba(255,41,41,.059)] shadow-[0_0_200px_rgba(255,41,41,.141)] opacity-80" />

                <OneLearnCircle title="Build" number="2" />
                <p className="text-xs md:text-base mt-2 font-poppins">
                    Work on our Real-time{" "}
                    <span className="text-blue-800">Projects , Task Based</span>
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-8 w-full container mx-auto px-2 font-poppins">
                <div className="flex justify-center md:justify-between w-full mx-auto">
                    <div className="bg-white md:mr-10 h-fit">
                        <img
                            src={img1}
                            alt="LMS Project"
                            title="LMS Project"
                            className="mx-auto"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex-row items-center hidden md:block">
                        <div className="border-dashed border-gray-400 border-r h-20 w-[8px]"></div>
                        <div className=" w-[15px] h-[15px] bg-white border border-gray-300 rounded-full z-10"></div>
                        <div className="border-dashed border-gray-400 border-r h-[328px] lg:h-64 xl:h-56 w-[8px]"></div>
                    </div>
                </div>
                <div className="w-full md:pl-12 md:pt-16 md:pb-10 py-10 px-3">
                    <div className="flex items-center mb-2">
                        <div className="bg-white border p-1.5 rounded-md">
                            <FaCodepen className="text-gray-600" size={17} />
                        </div>
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-[#343433]">LMS Project</h4>
                    <p className="text-sm mb-6 w-fit">
                        An LMS project develops a digital platform for online
                        learning,featuring course creation, content management, user
                        tracking,assessments, and reporting, aimed at enhancing educational
                        interaction.
                    </p>

                    <div className="flex md:justify-start justify-center flex-wrap gap-4">
                        <RoundedButoon
                            name="View Project"
                            icon={<HiArrowSmRight size={20} />}
                            theme="gray"
                        />
                        <RoundedButoon
                            name="View All Courses"
                            icon={<VscGraph size={17} />}
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 w-full container mx-auto px-2 font-poppins">
                <div className="flex justify-center md:justify-between w-full mx-auto">
                    <div className="bg-white md:mr-10 h-fit">
                        <img
                            src={img2}
                            alt="LMS Project"
                            title="LMS Project"
                            className="mx-auto"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex-row items-center hidden md:block">
                        <div className="border-dashed border-gray-400 border-r h-20 w-[8px]"></div>
                        <div className=" w-[15px] h-[15px] bg-white border border-gray-300 rounded-full z-10"></div>
                        <div className="border-dashed border-gray-400 border-r h-[328px] lg:h-64 xl:h-[333px] w-[8px]"></div>
                    </div>
                </div>
                <div className="w-full md:pl-12 md:pt-16 md:pb-10 py-10 px-3">
                    <div className="flex items-center mb-2">
                        <div className="bg-white border p-1.5 rounded-md">
                            <FaCodepen className="text-gray-600" size={17} />
                        </div>
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-[#343433]">
                        HRMS Project
                    </h4>
                    <p className="text-sm mb-6 w-fit">
                        The HRMS project develops a digital system for managing HR functions
                        like employee data, payroll, recruitment, and performance, aiming to
                        streamline processes and enhance organizational efficiency.
                    </p>

                    <div className="flex md:justify-start justify-center flex-wrap gap-4">
                        <RoundedButoon
                            name="View Project"
                            icon={<HiArrowSmRight size={20} />}
                            theme="gray"
                        />
                        <RoundedButoon
                            name="View All Courses"
                            icon={<VscGraph size={17} />}
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 w-full container mx-auto px-2 font-poppins">
                <div className="flex justify-center md:justify-between w-full mx-auto">
                    <div className="bg-white md:mr-10 h-fit">
                        <img
                            src={img3}
                            alt="LMS Project"
                            title="LMS Project"
                            className="pt-4 md:pt-10 pr-5 pb-10 pl-5"
                            loading="lazy"
                        />
                    </div>
                    <div className="flex-row items-center hidden md:block">
                        <div className="border-dashed border-gray-400 border-r h-20 w-[8px]"></div>
                        <div className=" w-[15px] h-[15px] bg-white border border-gray-300 rounded-full z-10"></div>
                        <div className="border-dashed border-gray-400 border-r h-[328px] lg:h-64 xl:h-[333px] w-[8px]"></div>
                    </div>
                </div>
                <div className="w-full md:pl-12 md:pt-16 md:pb-10 py-10 px-3">
                    <div className="flex items-center mb-2">
                        <div className="bg-white border p-1.5 rounded-md">
                            <FaCodepen className="text-gray-600" size={17} />
                        </div>
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-[#343433]">CRM Project</h4>
                    <p className="text-sm mb-6 w-fit">
                        A CRM project develops a system to manage company interactions with
                        customers, incorporating tools for contact, sales, productivity, and
                        support to enhance service, drive sales, and boost retention.
                    </p>

                    <div className="flex md:justify-start justify-center flex-wrap gap-4">
                        <RoundedButoon
                            name="View Project"
                            icon={<HiArrowSmRight size={20} />}
                            theme="gray"
                        />
                        <RoundedButoon
                            name="View All Courses"
                            icon={<VscGraph size={17} />}
                        />
                    </div>
                </div>
            </div>

            <div className="bg-[#FAFAFA] pb-16">
                <div className="text-center mt-10">
                    <OneLearnCircle title="Get Certification" number="3" />
                    <p className="text-xs md:text-base mt-2 font-poppins">
                        Internships and Course certifications for
                        <span className="text-blue-800"> Enhanced Skill Validation.</span>
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-10 xl:gap-28 w-full mt-16 ">
                    <div className="flex-row justify-center items-center">
                        <p class="text-xl md:text-3xl font-bold text-center mb-3 text-[#343433]">
                            Internship Certificate
                        </p>
                        <img src={certi1} alt="certi1" className="mx-auto w-4/5 lg:w-full" />
                    </div>
                    <div className="flex-row justify-center items-center">
                        <p class="text-xl md:text-3xl font-bold text-center mb-3 text-[#343433]">
                            Course Completion Certificate
                        </p>
                        <img src={certi1} alt="certi1" className="mx-auto w-4/5 lg:w-full" />
                    </div>
                </div>
            </div>

            <div className="text-center mt-10 md:mt-20 relative">
                <div className="absolute left-20 top-96 lg:left-52 lg:-top-10 w-72 sm:w-[600px] h-[500px] rounded-full z-[-1] bg-[rgba(255,41,41,.059)] shadow-[0_0_200px_rgba(255,41,41,.141)] opacity-80" />
                <div className="absolute hidden lg:block top-28 lg:left-10 lg:top-72 w-72 sm:w-[600px] h-[500px] rounded-full z-[-1] bg-[rgba(255,41,41,.059)] shadow-[0_0_200px_rgba(255,41,41,.141)] opacity-80" />
                <OneLearnCircle title="Get Job" number="4" />
                <p className="text-xs md:text-base mt-2 font-poppins">
                    Our focus on job-readiness{" "}
                    <span className="text-blue-800">
                        Github Profile, Linkedin Profile, Resume Prep and Help Apply
                    </span>
                </p>
            </div>

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

            <div className="max-w-full mx-auto mt-20 py-20 bg-[#fafafa] ">
                <p className="text-center text-2xl md:text-3xl font-bold mb-24 font-poppins">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                        IT Engineers
                    </span>{" "}
                    who got Trained from Digital Edify
                </p>

                <div className="flex flex-wrap justify-center gap-16 md:gap-6 container mx-auto">
                    {engineersData.map((engineer) => (
                        <div
                            key={engineer.id}
                            className="relative flex flex-col items-center bg-white shadow-xl rounded-sm p-6 w-[285px] font-poppins"
                            style={{ boxShadow: "#00000029 0 0 11px" }}
                        >
                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20">
                                <img
                                    src={engineer.profilePic}
                                    alt={engineer.name}
                                    className="rounded-full object-cover w-full h-full"
                                    loading="lazy"
                                />
                                <div className="absolute bottom-3 left-[85%] transform -translate-x-1/2 bg-white p-1 border border-[#DDDD] rounded-full">
                                    <FaLinkedinIn size={14} />
                                </div>
                            </div>

                            <h4 className="mt-9 font-semibold text-lg text-center">
                                {engineer.name}
                            </h4>
                            <h5 className="text-sm text-center text-gray-700 mt-1">
                                {engineer.role}
                            </h5>
                            <img
                                src={engineer.companyLogo}
                                alt={engineer.company}
                                className="mt-4 object-contain"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-2 mt-16 ">
                <p class="text-xl md:text-2xl font-bold text-center lg:text-start w-full font-poppins">
                    {" "}
                    Upcoming Batch Schedule
                </p>
            </div>

            <div className="flex justify-center flex-wrap gap-8 mt-12 font-poppins">
                <div className="flex justify-center flex-wrap gap-8">
                    {batches.map((item, index) => {
                        return (
                            <div
                                className="bg-white rounded-lg px-6 py-7 pb-8"
                                style={{ boxShadow: "#ddd 0 0 20px " }}
                            >
                                <h5 className="text-lg font-semibold">{item.title}</h5>
                                <h6 className="mb-2">{item.schedule}</h6>
                                <hr />
                                <div className="flex gap-2.5 items-center pt-4">
                                    <div className="bg-white border p-1.5 rounded-md">
                                        <AiOutlineCalendar className="text-gray-700" size={17} />
                                    </div>
                                    <p className="text-sm leading-[16px] text-gray-700">
                                        <strong>{item.time.date}</strong>
                                        <br />
                                        {item.time.day}
                                    </p>
                                </div>
                                <div className="flex gap-2.5 items-center pt-4 pb-6 mb-3">
                                    <div className="bg-white border p-1.5 rounded-md">
                                        <BiStopwatch className="text-gray-700" size={19} />
                                    </div>
                                    <p className="text-sm leading-[16px] text-gray-700">
                                        {item.time.startTime}
                                        <br />
                                        {item.time.duration}
                                    </p>
                                </div>
                                <WhiteButton
                                    name=" Get Free Course Demo "
                                    icon={<VscGraph size={17} />}
                                />
                            </div>
                        );
                    })}
                </div>
                <div
                    className="bg-black rounded-lg py-6 w-[280px]"
                    style={{ boxShadow: "#E7E7E7 0px 2px 20px" }}
                >
                    <p className="text-xl md:text-3xl w-4/5 font-bold text-white text-center mt-5 mb-8 mx-auto">
                        Can’t find a batch you were looking for?
                    </p>
                    <div className="flex justify-center">
                        <WhiteButton
                            name=" Get Free Course Demo "
                            icon={<VscGraph size={17} />}
                        />
                    </div>
                </div>
            </div>

            <div className="bg-[#fafafa] border-t border-b border-[#eaeaea] w-full pt-5 mt-20 font-poppins">
                <h2 className="text-xl md:text-2xl font-bold mb-8 text-center">
                    Why Digital Edify
                </h2>
                <div className="flex justify-center items-center flex-wrap pb-7">
                    <div className="w-[310px] text-center border-r border-[#eaeaea]">
                        <h3 className="text-3xl md:text-4xl font-semibold ">100000+</h3>
                        <p className="mt-2 font-semibold">LEARNERS</p>
                    </div>
                    <div className="w-[310px] text-center border-r border-[#eaeaea]">
                        <h3 className="text-3xl md:text-4xl font-semibold">10000+</h3>
                        <p className="mt-2 font-semibold">BATCHES</p>
                    </div>
                    <div className="w-[310px] text-center border-r border-[#eaeaea]">
                        <h3 className="text-3xl md:text-4xl font-semibold">10+</h3>
                        <p className="mt-2 font-semibold">YEARS</p>
                    </div>
                    <div className="w-[310px] text-center">
                        <h3 className="text-3xl md:text-4xl font-semibold">24/7</h3>
                        <p className="mt-2 font-semibold">SUPPORT</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between w-full container mx-auto px-3 flex-wrap items-center mt-10 font-poppins">
                <div>
                    <div className="flex flex-wrap font-bold justify-center sm:justify-start gap-3 lg:gap-7 mb-2.5 leading-[45px] lg:leading-snug">
                        {textItems.map((item, index) => (
                            <h1
                                key={index}
                                className={`bg-gradient-to-r ${index === activeIndex ? item.color : "text-black "
                                    } text-3xl sm:text-4xl lg:text-[45px] font-extrabold `}
                            >
                                {item.text}
                            </h1>
                        ))}
                    </div>
                    <p className=" mb-8 text-center sm:text-start sm:max-w-md lg:max-w-lg">
                        100000+ uplifted through our hybrid classroom & online training,
                        enriched by real-time projects and job support.
                    </p>
                </div>
                <div className="w-full sm:w-auto justify-items-center sm:justify-items-end  space-y-2">
                    <BlackButton name="Free Demo" icon={<VscGraph size={17} />} />
                    <WhiteButton name="Get In Touch" icon={<VscGraph size={17} />} />
                </div>
            </div>

            <div className="mt-5 bg-[#fafafa] py-20 w-full">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800 text-center font-poppins">
                    Our Locations
                </h3>
                <p className="text-gray-600 mb-12 text-center font-poppins">
                    Come and chat with us about your goals over a cup of coffee.
                </p>


                <div className="flex flex-wrap justify-center gap-7 text-center font-poppins">
                    {locations.map((location) => (
                        <div
                            key={location.id}
                            className="bg-white rounded-xl cursor-pointer w-[280px] md:w-[340px] lg:w-[390px]"
                            style={{ boxShadow: "#E7E7E7 0px 2px 20px" }}
                        >
                            <img
                                src={location.image}
                                alt={location.title}
                                className="rounded-t-lg object-cover w-full h-[14rem] font-[1.25rem] hidden md:block"
                            />
                            <div className="p-[30px]">
                                <h5 className="text-lg md:text-xl font-semibold text-[#0040b3] mb-4">
                                    {location.title}
                                </h5>
                                <p className="text-[#212529] text-sm md:text-base">
                                    {location.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div >
            </div >

            <div className=" px-1  bg-white text-black py-12 border-t border-b border-[#DDDDDD] w-full gap-10 md:gap-10 lg:gap-20 xl:gap-48 font-poppins">
                <div className="container md:flex md:justify-center">

                    <div className="w-fit mx-auto">
                        <img src={digitaledify} alt="digitaledify" className="mx-auto" />
                        <p className="mt-4 font-poppins text-center">Follow us on</p>
                        <div className="flex space-x-4 mt-2">
                            <a href="#" aria-label="Facebook">
                                <RiFacebookFill size={27} />
                            </a>
                            <a href="#" aria-label="Twitter">
                                <FaTwitter size={27} />
                            </a>
                            <a href="#" aria-label="LinkedIn">
                                <FaLinkedinIn size={27} />
                            </a>
                            <a href="#" aria-label="Instagram">
                                <FaInstagram size={27} />
                            </a>
                            <a href="#" aria-label="WhatsApp">
                                <MdOutlineWhatsapp size={27} />
                            </a>
                        </div>
                    </div>

                    <div className="w-fit mx-auto mt-8 md:mt-0">
                        <h2 className="font-semibold text-xl mb-4 text-center md:text-start">Digital Edify</h2>
                        <ul className="space-y-4">
                            <li className="bg-white hover:bg-gray-700 hover:text-white text-gray-600 border border-[#c9c9c9] rounded text-center w-fit px-2 py-[1px]  mx-auto md:mx-0">
                                <a href="#" className="">
                                    Online Pay
                                </a>
                            </li>
                            <li className="bg-white hover:bg-gray-700 hover:text-white mx-auto md:mx-0 text-gray-600 border border-[#c9c9c9] rounded text-center w-fit px-2 py-[1px] ">
                                <a href="#" className="">
                                    Razor Pay
                                </a>
                            </li>
                            <li className="bg-white hover:bg-gray-700 hover:text-white mx-auto md:mx-0 text-gray-600 border border-[#c9c9c9] rounded text-center w-fit px-2 py-[1px] ">
                                <a href="#" className="">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-fit mx-auto mt-8 md:mt-0">
                        <h2 className="font-semibold text-xl mb-2.5 font-poppins text-center md:text-start">Company</h2>
                        <ul>
                            <li className="text-center md:text-start">
                                <a href="#" className="hover:text-orange-500">
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-fit mx-auto mt-8 md:mt-0">
                        <h2 className="font-semibold text-xl mb-2.5 text-center md:text-start">Reach Us</h2>
                        <ul className="space-y-2">
                            <li className="text-center md:text-start">Phone: +91 9515175554</li>
                            <li className="text-center md:text-start">Email: hello@digitaledify.ai</li>
                            <li className="text-center md:text-start">WhatsApp: +91 9515175554</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center mt-3 font-poppins mb-4">
                <p className="text-xs">
                    © Copyright Digital Edify | 2024{" "}
                    <a href="#" className="text-[#281af0] hover:underline">
                        Privacy Policy
                    </a>
                </p>
            </div>
        </>
    );
};

export default Landing;
