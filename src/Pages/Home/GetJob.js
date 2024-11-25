import React from 'react'
import OneLearnCircle from '../../Components/HomePage/OneLearnCircle'

const GetJob = () => {
    return (
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
    )
}

export default GetJob