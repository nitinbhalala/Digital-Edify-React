import React, { useEffect, useState } from "react";
import { MdOutlineLaptop, MdPerson } from "react-icons/md";
import P1 from "../../assets/Compaines/p1.webp";
import P2 from "../../assets/Compaines/p2.webp";
import P3 from "../../assets/Compaines/p3.webp";
import P4 from "../../assets/Compaines/p4.webp";
import P5 from "../../assets/Compaines/p5.webp";
import P6 from "../../assets/Compaines/p6.webp";
import P7 from "../../assets/Compaines/p7.webp";
import P8 from "../../assets/Compaines/p8.webp";
import P9 from "../../assets/Compaines/p9.webp";
import P10 from "../../assets/Compaines/p10.webp";
import P12 from "../../assets/Compaines/p12.webp";
import Landing from "./Landing";

const images = [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P12];
const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const textItems = [
    { text: "Learn.", color: "text-blue-500" },
    { text: "Build.", color: "text-green-500" },
    { text: "Get Job.", color: "text-pink-500" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % textItems.length);
    }, 1000); // Changes every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [textItems.length]);
  return (
    <div className="mt-16 mb-12 justify-items-center">
      <h4 className="text-3xl font-medium ">
        India's #1 Premium Training Institute
      </h4>
      <div className="flex font-bold justify-center gap-7">
        {textItems.map((item, index) => (
          <h1
            key={index}
            className={`transition-all duration-500 ${
              index === activeIndex ? item.color : "text-black "
            } text-[110px] font-extrabold mb-2.5`}
          >
            {item.text}
          </h1>
        ))}
      </div>
      <p className="mt-5 mb-12 text-lg max-w-xl text-center">
        100000+ uplifted through our hybrid classroom & online training,
        enriched by real-time projects and job support.
      </p>
      <div className="flex space-x-4">
        {/* Join Free Demo Button */}
        <button className="flex gap-3  items-center px-4 py-2 bg-black text-white font-medium rounded-xl hover:bg-sky-500">
          <MdOutlineLaptop size={20} />
          Join Free Demo
        </button>

        {/* Contact Course Advisor Button */}
        <button
          className="flex gap-3 rounded-xl items-center px-4 py-2 border border-orange-600 font-semibold hover:text-white hover:bg-pink-700"
          style={{
            boxShadow: "0px 10px 43px  rgba(239, 68, 68, 0.5)", // Bottom-only shadow
          }}
        >
          <MdPerson size={20} />
          Contact Course Advisor
        </button>
      </div>
      <div className="mt-24">
        <h2 className="text-center mb-2.5 text-3xl font-extrabold text-[#555]">
          Your Path to a Successful IT Career
        </h2>
        <p className="text-lg mb-8 text-center text-[#212529]">
          Our Alumni Work at Top Compaines
        </p>
        <div className="flex flex-wrap max-w-7xl justify-center">
          {images?.map((image) => {
            return (
              <img
                src={image}
                className="h-auto w-auto mt-2.5 mb-5 mx-10 filter grayscale-[100%] hover:filter-none "
              />
            );
          })}
        </div>
      </div>
      <Landing />
    </div>
  );
};

export default Home;
