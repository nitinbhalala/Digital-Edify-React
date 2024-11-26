import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { RiArrowRightDoubleLine } from "react-icons/ri";

const Accordion = ({ data }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            {data?.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-6 md:w-4/5 mx-auto">
                    <div className="bg-[#2953B4] rounded-xl text-white font-poppins md:text-xl font-medium text-center py-3">
                        {section?.maintitle}
                    </div>

                    {section?.subdata?.map((item, index) => (
                        <div key={`${sectionIndex}-${index}`} className="rounded-md container mx-auto mt-8 font-poppins relative">
                            <div className="absolute bg-[#FAFAFA] border border-[#CCCCCC] rounded-md px-4 py-1.5 text-xs font-light  font-poppins left-4 -top-5">
                                {item?.module}
                            </div>
                            <button
                                className="w-full  text-left text-base md:text-lg px-6 py-4 font-semibold text-gray-800 bg-white flex justify-between items-center rounded-lg"
                                onClick={() => toggleAccordion(`${sectionIndex}-${index}`)}
                                style={{ boxShadow: "0 0 13px #cccccc4f" }}
                            >
                                {item?.title}
                                <span>
                                    {openIndex === `${sectionIndex}-${index}` ? <FaChevronUp /> : <FaChevronDown />}
                                </span>

                            </button>

                            <div
                                className={`mt-3 rounded-lg overflow-hidden transition-[max-height] duration-700 ease-in-out ${openIndex === `${sectionIndex}-${index}` ? "max-h-[500px]" : "max-h-0"
                                    }`}
                                style={{ boxShadow: "0 0 13px #cccccc4f" }}
                            >
                                <div className="px-6 py-4 bg-white">
                                    <p className="font-semibold mb-3">Topics:</p>
                                    <ul className="space-y-4">
                                        {item?.topics?.map((topic, topicIndex) => (
                                            <li key={topicIndex}>
                                                <p className="font-medium">{topic?.name}</p>
                                                {
                                                    topic?.description &&
                                                    <div className="flex gap-2 items-center">
                                                        <RiArrowRightDoubleLine color="#4882C2" />
                                                        <p>{topic.description}</p>
                                                    </div>
                                                }
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
};

export default Accordion;
