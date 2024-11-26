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
      {data?.accordionData?.map((section, sectionIndex) => {
        return (
          <div key={sectionIndex} className="mb-6 md:w-4/5 mx-auto">
            <div className="bg-[#2953B4] rounded-xl text-white font-poppins md:text-xl font-medium text-center py-3">
              {section?.maintitle}
            </div>

            {section?.subdata?.map((item, index) => {
              console.log("🚀 ~ {section?.subdata?.map ~ item:", item);
              const array = Object.keys(item)
                .filter((key) => key.startsWith("topics"))
                .map((key, i) => {
                  console.log("🚀 ~ .map ~ key:", key);
                  const topicsKey = i === 0 ? "topics" : `topics${i}`;
                  const introKey = i === 0 ? "intro" : `intro${i}`;
                  if (item[topicsKey]) {
                    return {
                      intro: item[introKey] ? item[introKey] : "",
                      topics: item[topicsKey],
                    };
                  }
                  return null;
                })
                .filter((item) => item !== null);
              console.log("🚀 ~ {data?.accordionData?.map ~ array:", array);
              return (
                <div
                  key={`${sectionIndex}-${index}`}
                  className="rounded-md container mx-auto mt-8 font-poppins relative"
                >
                  <div className="absolute bg-[#FAFAFA] border border-[#CCCCCC] rounded-md px-4 py-1.5 text-xs font-light font-poppins left-4 -top-5">
                    {item?.module}
                  </div>
                  <button
                    className="w-full  text-left text-base md:text-lg px-6 py-4 font-semibold text-gray-800 bg-white flex justify-between items-center rounded-lg"
                    onClick={() => toggleAccordion(`${sectionIndex}-${index}`)}
                    style={{ boxShadow: "0 0 13px #cccccc4f" }}
                  >
                    {item?.title}
                    <span>
                      {openIndex === `${sectionIndex}-${index}` ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </span>
                  </button>

                  <div
                    className={`mt-3 rounded-lg overflow-hidden transition-[max-height] duration-700 ease-in-out ${
                      openIndex === `${sectionIndex}-${index}`
                        ? "max-h-fit"
                        : "max-h-0"
                    }`}
                    style={{ boxShadow: "0 0 13px #cccccc4f" }}
                  >
                    <div className="px-6 py-4 bg-white">
                      <ul className="space-y-4">
                        {array?.map((j) => {
                          return (
                            <>
                              {j?.intro && (
                                <p className="font-semibold mt-2">{j?.intro}</p>
                              )}
                              <p className="font-semibold mb-3">Topics:</p>
                              {j?.topics?.map((topic, topicIndex) => {
                                return (
                                  <li key={topicIndex}>
                                    <p className="font-medium">{topic?.name}</p>
                                    {topic?.description &&
                                      (typeof topic?.description ===
                                      "string" ? (
                                        <div className="flex gap-2 items-center">
                                          <RiArrowRightDoubleLine color="#4882C2" />
                                          <p>{topic.description}</p>
                                        </div>
                                      ) : (
                                        topic.description?.map((i) => {
                                          return (
                                            <div className="flex gap-2 items-center">
                                              <RiArrowRightDoubleLine color="#4882C2" />
                                              <p>{i}</p>
                                            </div>
                                          );
                                        })
                                      ))}
                                  </li>
                                );
                              })}
                            </>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default Accordion;
