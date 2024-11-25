import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { RiArrowRightDoubleLine } from "react-icons/ri";

const Accordion = ({ data }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle the current index
    };

    return (
        <>
            <div className='bg-[#2953B4] rounded-xl text-white font-poppins text-xl font-medium text-center py-3'>
                {data.maintitle}
            </div>
            {
                data?.subdata?.map((item, index) => {
                    return (
                        <div key={index} className="rounded-md container mx-auto mt-8 font-poppins">
                            {/* Accordion Header */}
                            <button
                                className="w-full relative text-left text-sm md:text-lg px-6 py-4 font-semibold text-gray-800 bg-white flex justify-between items-center rounded-lg"
                                onClick={() => toggleAccordion(index)}
                                style={{ boxShadow: "0 0 13px #cccccc4f" }}
                            >
                                {item?.title}
                                <span>{openIndex === index ? <FaChevronUp /> : <FaChevronDown />}</span>
                                <div className="absolute bg-[#FAFAFA] border border-[#CCCCCC] rounded-md px-4 py-1.5 text-xs font-light bottom-12 font-poppins">
                                    {item.module}
                                </div>
                            </button>

                            {/* Accordion Content */}
                            <div
                                className={`mt-3 rounded-lg overflow-hidden transition-[max-height] duration-700 ease-in-out ${openIndex === index ? "max-h-[500px]" : "max-h-0"}`}
                                style={{ boxShadow: "0 0 13px #cccccc4f" }}
                            >
                                <div className="px-6 py-4 bg-white">
                                    <p className="font-semibold mb-3">Topics:</p>
                                    <ul className="space-y-4">
                                        {item.topics.map((topic, topicIndex) => (
                                            <li key={topicIndex}>
                                                <p className="font-medium">{topic.name}</p>
                                                <div className="flex gap-2 items-center">
                                                    <RiArrowRightDoubleLine color="#4882C2" />
                                                    <p className="">{topic.description}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </>
    );
};

export default Accordion;
