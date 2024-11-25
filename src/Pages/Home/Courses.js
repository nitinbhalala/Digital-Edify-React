import React from 'react'
import CoursesCard from '../../Components/HomePage/CoursesCard';
import WhiteButton from '../../Components/WhiteButton';
import { VscGraph } from 'react-icons/vsc';

const Courses = ({ title }) => {

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

    return (
        <div className="container mx-auto px-2 relative">
            <div className="absolute -left-40 top-64 w-72 sm:w-[600px] h-[500px] rounded-full z-[-1] bg-[rgba(255,41,41,.059)] shadow-[0_0_200px_rgba(255,41,41,.141)] opacity-80" />
            <p class="text-2xl md:text-3xl font-bold text-center my-16 font-poppins text-[#343433]">
                {title}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 ">
                {CourseData.map((item, index) => {
                    return <CoursesCard data={item} />;
                })}
            </div>
            <div className="mt-16 mb-36 flex justify-center">
                <WhiteButton
                    name="View All Courses"
                    theme="blue"
                    icon={<VscGraph size={20} />}
                />
            </div>
        </div>
    )
}

export default Courses