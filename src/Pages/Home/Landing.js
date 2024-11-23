import React from "react";
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
import { FaCodepen, FaGithub, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import RoundedButoon from "../../Components/RoundedButoon";
import { HiArrowSmRight, HiDocumentText } from "react-icons/hi";
import { PiBagFill } from "react-icons/pi";
import { AiOutlineCalendar } from 'react-icons/ai';
import { BiStopwatch } from 'react-icons/bi';
import BlackButton from '../../Components/BlackButton';
import digitaledify from "../../assets/digitaledify.png";
import { RiFacebookFill } from 'react-icons/ri';
import { MdOutlineWhatsapp } from 'react-icons/md';
import Infosys from "../../assets/Compaines/p5.webp";
import oracle from "../../assets/oracle.webp";
import c360soft from "../../assets/c360soft.webp";
import jpmore from "../../assets/jpmorgan.webp";





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
        name: "LinkedIn Profile",
        disc: "Assistance in crafting a compelling LinkedIn profile for networking and visibility among recruiters.",
        icon: <FaLinkedin size={17} />,
    },
    {
        name: "Resume Preparation",
        disc: "Expert advice on resume writing to effectively highlight skills, experience, and achievements.",
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
    return (
        <>

            <div className="text-center font-poppins">
                <p className="text-[1.25rem] mb-1">Explore the Digital Edify way</p>
                <OneLearnCircle title='Learn' number='1' />
                <p className="text-xs md:text-base mt-2">Experience the New way of Learning with AI <br />
                    Digital Edify offers best technologies in the work, Curated for your Career Growth</p>
            </div>

            <div className="container mx-auto px-2">
                <p class="text-2xl md:text-3xl font-bold text-center my-16"> Courses</p>
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    {
                        CourseData.map((item, index) => {
                            return (
                                <CoursesCard data={item} />
                            )
                        })
                    }
                </div>
            </div>

            <div className="my-16">
                <WhiteButton name="View All Courses" theme='blue' icon={<VscGraph size={20} />} />
            </div>

            <div className="container mx-auto px-2">
                <p class="text-2xl md:text-3xl font-bold text-center my-16">Programs</p>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {
                        ProgramData.map((item, index) => {
                            return (
                                <CoursesCard data={item} />
                            )
                        })
                    }
                </div>
            </div>

            <div className="text-center mt-5">
                <OneLearnCircle title='Build' number='2' />
                <p className="text-xs md:text-base mt-2">Work on our Real-time <span className="text-blue-800">Projects , Task Based</span></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-8 w-full container mx-auto px-2">
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
                        <div className='bg-white border p-1.5 rounded-md'>
                            <FaCodepen className="text-gray-600" size={17} />
                        </div>
                    </div>
                    <h4 className="text-2xl font-bold mb-2">LMS Project</h4>
                    <p className=" mb-6 w-fit">
                        An LMS project develops a digital platform for online learning,featuring course
                        creation, content management, user tracking,assessments, and reporting,
                        aimed at enhancing educational interaction.
                    </p>

                    <div className="flex md:justify-start justify-center flex-wrap gap-4">
                        <RoundedButoon name='View Project' icon={<HiArrowSmRight size={20} />} theme='gray' />
                        <RoundedButoon name='View All Courses' icon={<VscGraph size={17} />} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 w-full container mx-auto px-2">
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
                        <div className='bg-white border p-1.5 rounded-md'>
                            <FaCodepen className="text-gray-600" size={17} />
                        </div>
                    </div>
                    <h4 className="text-2xl font-bold mb-2">HRMS Project</h4>
                    <p className=" mb-6 w-fit">
                        The HRMS project develops a digital system for managing HR functions like employee data, payroll, recruitment, and performance, aiming to streamline processes and enhance organizational efficiency.
                    </p>

                    <div className="flex md:justify-start justify-center flex-wrap gap-4">
                        <RoundedButoon name='View Project' icon={<HiArrowSmRight size={20} />} theme='gray' />
                        <RoundedButoon name='View All Courses' icon={<VscGraph size={17} />} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 w-full container mx-auto px-2">
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
                        <div className='bg-white border p-1.5 rounded-md'>
                            <FaCodepen className="text-gray-600" size={17} />
                        </div>
                    </div>
                    <h4 className="text-2xl font-bold mb-2">HRMS Project</h4>
                    <p className=" mb-6 w-fit">
                        The HRMS project develops a digital system for managing HR functions like employee data, payroll, recruitment, and performance, aiming to streamline processes and enhance organizational efficiency.
                    </p>

                    <div className="flex md:justify-start justify-center flex-wrap gap-4">
                        <RoundedButoon name='View Project' icon={<HiArrowSmRight size={20} />} theme='gray' />
                        <RoundedButoon name='View All Courses' icon={<VscGraph size={17} />} />
                    </div>
                </div>
            </div>

            <div className="text-center mt-10">
                <OneLearnCircle title='Get Certification' number='3' />
                <p className="text-xs md:text-base mt-2">Internships and Course certifications for<span className="text-blue-800">Enhanced Skill Validation.</span></p>
            </div>

            <div className="flex flex-wrap justify-center gap-10 xl:gap-28 w-full mt-16">
                <div className="flex-row justify-center items-center">
                    <p class="text-xl md:text-3xl font-bold text-center mb-3">Internship Certificate</p>
                    <img src={certi1} alt="certi1" className="mx-auto" />
                </div>
                <div className="flex-row justify-center items-center">
                    <p class="text-xl md:text-3xl font-bold text-center mb-3">Course Completion Certificate</p>
                    <img src={certi1} alt="certi1" className="mx-auto" />
                </div>
            </div>

            <div className="text-center mt-20">
                <OneLearnCircle title='Get Job' number='4' />
                <p className="text-xs md:text-base mt-2">Our focus on job-readiness <span className="text-blue-800">Github Profile, Linkedin Profile, Resume Prep and Help Apply</span></p>
            </div>

            <div className="flex justify-between w-full mt-32 relative p-3">
                <div className=" md:ml-10 xl:ml-48 z-10">
                    {
                        getJObData.map((item, index) => {
                            return (
                                <div className="flex justify-center md:justify-between w-full mx-auto">
                                    <div className="flex-row items-center hidden md:block">
                                        <div className="border-dashed border-gray-400 border-r h-20 w-[8px]"></div>
                                        <div className=" w-[15px] h-[15px] bg-white border border-gray-300 rounded-full z-10"></div>
                                        <div className="border-dashed border-gray-400 border-r h-[130px] w-[8px]"></div>
                                    </div>
                                    <div className="ps-7 pt-8">
                                        <div className="flex items-center ">
                                            <div className='bg-white border p-1.5 rounded-md'>
                                                <FaCodepen className="text-gray-600" size={17} />
                                            </div>
                                        </div>
                                        <p className="text-lg md:text-[22px] font-bold mt-5">{item.name}</p>
                                        <p className="mt-3 md:w-[500px]">{item.disc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <img src={global} alt="global" className="absolute right-0 hidden md:block h-[550px] lg:h-full " />
            </div>

            <div className="max-w-full mx-auto mt-20 py-20 bg-[#fafafa] ">
                <p className="text-center text-2xl md:text-3xl font-bold mb-24">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                        IT Engineers
                    </span>{" "}
                    who got Trained from Digital Edify
                </p>

                <div className="flex flex-wrap justify-center gap-16 md:gap-6 container mx-auto">
                    {engineersData.map((engineer) => (
                        <div
                            key={engineer.id}
                            className="relative flex flex-col items-center bg-white shadow-xl rounded-sm p-6 w-[285px]"
                            style={{ boxShadow: "#00000029 0 0 11px" }}

                        >
                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20">
                                <img
                                    src={engineer.profilePic}
                                    alt={engineer.name}
                                    className="rounded-full object-cover w-full h-full"
                                    loading="lazy"
                                />
                                <div
                                    className="absolute bottom-3 left-[85%] transform -translate-x-1/2 bg-white p-1 border border-[#DDDD] rounded-full"
                                >
                                    <FaLinkedinIn size={14} />
                                </div>
                            </div>

                            <h4 className="mt-9 font-semibold text-lg text-center">
                                {engineer.name}
                            </h4>
                            <h5 className=" text-center mt-1">
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

            <div className='container mx-auto px-2 mt-16 '>
                <p class="text-2xl md:text-3xl font-bold text-start w-full "> Upcoming Batch Schedule</p>
            </div>

            <div className='flex justify-center gap-8 mt-12 font-poppins'>
                <div className="flex justify-center gap-8">
                    {
                        batches.map((item, index) => {
                            return (
                                <div className="bg-white rounded-lg px-8 py-7 pb-8" style={{ boxShadow: "#ddd 0 0 20px " }} >
                                    <h5 className="text-lg font-semibold">{item.title}</h5>
                                    <h6 className="mb-2">{item.schedule}</h6>
                                    <hr />
                                    <div className="flex gap-2.5 items-center pt-4">
                                        <div className='bg-white border p-1.5 rounded-md'>
                                            <AiOutlineCalendar className="text-gray-700" size={17} />
                                        </div>
                                        <p className="text-sm leading-[16px]">
                                            <strong>{item.time.date}</strong>
                                            <br />
                                            {item.time.day}
                                        </p>
                                    </div>
                                    <div className="flex gap-2.5 items-center pt-4 pb-6 mb-3">
                                        <div className='bg-white border p-1.5 rounded-md'>
                                            <BiStopwatch className="text-gray-700" size={19} />
                                        </div>
                                        <p className="text-sm leading-[16px]">
                                            {item.time.startTime}
                                            <br />
                                            {item.time.duration}
                                        </p>
                                    </div>
                                    <WhiteButton name=' Get Free Course Demo ' icon={<VscGraph size={17} />} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="bg-black rounded-lg p-6 w-[280px]" style={{ boxShadow: "#E7E7E7 0px 2px 20px" }} >
                    <p className="text-3xl w-4/5 font-bold text-white text-center mt-5 mb-8 mx-auto">Can’t find a batch you were looking for?</p>
                    <WhiteButton name=' Get Free Course Demo ' icon={<VscGraph size={17} />} />
                </div>
            </div>

            <div className="bg-[#fafafa] border-t border-b border-[#eaeaea] w-full pt-5 mt-20 ">
                <h2 className="text-xl md:text-2xl font-bold mb-8 text-center">
                    Why Digital Edify
                </h2>
                <div className="flex justify-center items-center flex-wrap pb-7">
                    <div className='w-[310px] text-center border-r border-[#eaeaea]'>
                        <h3 className="text-3xl md:text-4xl font-bold ">100000+</h3>
                        <p className="mt-2 font-bold">LEARNERS</p>
                    </div>
                    <div className='w-[310px] text-center border-r border-[#eaeaea]'>
                        <h3 className="text-3xl md:text-4xl font-bold">10000+</h3>
                        <p className="mt-2 font-bold">BATCHES</p>
                    </div>
                    <div className='w-[310px] text-center border-r border-[#eaeaea]'>
                        <h3 className="text-3xl md:text-4xl font-bold">10+</h3>
                        <p className="mt-2 font-bold">YEARS</p>
                    </div>
                    <div className='w-[310px] text-center'>
                        <h3 className="text-3xl md:text-4xl font-bold">24/7</h3>
                        <p className="mt-2 font-bold">SUPPORT</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between w-full container mx-auto px-3 flex-wrap items-center mt-10">
                <div>
                    <p className="text-[45px] font-extrabold mb-3">
                        Learn. Build. Get Job.
                    </p>
                    <p className=" mb-8 text-start">
                        100000+ uplifted through our hybrid classroom & online training,<br />
                        enriched by real-time projects and job support.
                    </p>
                </div>
                <div className="space-y-2">
                    <BlackButton name='Free Demo' icon={<VscGraph size={17} />} />
                    <WhiteButton name='Get In Touch' icon={<VscGraph size={17} />} />
                </div>
            </div>

            <div className="mt-5 bg-[#fafafa] py-20 w-full">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800 text-center">Our Locations</h3>
                <p className="text-gray-600 mb-12 text-center">
                    Come and chat with us about your goals over a cup of coffee.
                </p>

                <div className="flex flex-wrap justify-center gap-7 text-center">
                    {locations.map((location) => (
                        <div
                            key={location.id}
                            className="bg-white rounded-xl cursor-pointer w-[280px] md:w-[340px] lg:w-[390px]"
                            style={{ boxShadow: "#E7E7E7 0px 2px 20px" }}
                        >
                            <img
                                src={location.image}
                                alt={location.title}
                                className="rounded-t-lg object-cover w-full h-[14rem] font-[1.25rem]"
                            />
                            <div className="p-[30px]">
                                <h5 className="text-lg md:text-xl font-semibold text-[#0040b3] mb-4">
                                    {location.title}
                                </h5>
                                <p className="text-[#212529] md:text-lg">{location.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white text-black py-12 border-t border-b border-[#DDDDDD] flex w-full justify-center  gap-48 ">

                <div>
                    <img src={digitaledify} alt="digitaledify" />
                    <p className="mt-4 font-poppins">Follow us on</p>
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

                <div>
                    <h2 className="font-semibold text-xl mb-4">Digital Edify</h2>
                    <ul className="space-y-4">
                        <li className='bg-white text-gray-600 border border-[#c9c9c9] rounded text-center w-fit px-2 py-[1px] '>
                            <a href="#" className="hover:underline">
                                Online Pay
                            </a>
                        </li>
                        <li className='bg-white text-gray-600 border border-[#c9c9c9] rounded text-center w-fit px-2 py-[1px] '>
                            <a href="#" className="hover:underline">
                                Razor Pay
                            </a>
                        </li>
                        <li className='bg-white text-gray-600 border border-[#c9c9c9] rounded text-center w-fit px-2 py-[1px] '>
                            <a href="#" className="hover:underline">
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="font-semibold text-xl mb-2.5 font-poppins">Company</h2>
                    <ul>
                        <li>
                            <a href="#" className="hover:underline">
                                About Us
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="font-semibold text-xl mb-2.5">Reach Us</h2>
                    <ul className="space-y-2">
                        <li>Phone: +91 9515175554</li>
                        <li>Email: hello@digitaledify.ai</li>
                        <li>WhatsApp: +91 9515175554</li>
                    </ul>
                </div>
            </div>

            <div className="text-center mt-3 font-poppins font-semibold">
                <p className="text-sm">
                    © Copyright Digital Edify | 2024{' '}
                    <a href="#" className="text-[#281af0] hover:underline">
                        Privacy Policy
                    </a>
                </p>
            </div>


        </>
    );
};

export default Landing;