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
import BlackButton from "../../Components/BlackButton";
import WhiteButton from "../../Components/WhiteButton";

const images = [P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, P12];
const Home = () => {
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
      <div className="container mx-auto px-5 mt-16 mb-32 justify-items-center font-poppins">
        <h4 className="text-2xl lg:text-4xl font-medium text-center text-[#343433]">
          India's #1 Premium Training Institute
        </h4>
        <div className="flex flex-wrap font-bold justify-center gap-3 lg:gap-7 mb-2.5 leading-[45px] lg:leading-snug">
          {textItems.map((item, index) => (
            <h1
              key={index}
              className={`bg-gradient-to-r ${index === activeIndex ? item.color : "text-black "
                } text-[50px] lg:text-[115px] font-extrabold `}
            >
              {item.text}
            </h1>
          ))}
        </div>
        <p className="mt-5 mb-12 text-base lg:text-lg max-w-xl text-center">
          100000+ uplifted through our hybrid classroom & online training,
          enriched by real-time projects and job support.
        </p>
        <div className="flex space-x-4">
          {/* Join Free Demo Button */}

          <BlackButton
            name="Join Free Demo"
            icon={<MdOutlineLaptop className="text-xs lg:text-xl" />}
          />

          {/* Contact Course Advisor Button */}
          <WhiteButton
            name="Contact Course Advisor"
            icon={<MdPerson className="text-sm lg:text-2xl" />}
          />
        </div>
        <div className="mt-24">
          <h2 className="text-center mb-2.5 text-lg lg:text-3xl font-extrabold text-[#555]">
            Your Path to a Successful IT Career
          </h2>
          <p className="text-sm lg:text-lg mb-8 text-center text-[#212529]">
            Our Alumni Work at Top Compaines
          </p>
          <div className="hidden lg:flex flex-wrap max-w-7xl justify-center">
            {images?.map((image) => {
              return (
                <img
                  src={image}
                  className="h-6 w-16 sm:h-8 sm:w-20 lg:h-auto lg:w-auto mt-2.5 mb-5 mx-1 lg:mx-10 filter grayscale-[100%] hover:filter-none "
                />
              );
            })}
          </div>
          <div className="flex max-w-xl sm:gap-3 lg:gap-4 justify-center items-center lg:hidden">
            {images.slice(0, 5).map((image, index) => (
              <img
                key={index}
                src={image}
                className="h-6 w-16 sm:h-10 sm:w-28 lg:h-auto lg:w-auto mt-2.5 mb-4 mx-1 lg:mx-10 filter grayscale-[100%] hover:filter-none"
              />
            ))}
          </div>
          <div className="flex max-w-xl lg:gap-4 justify-center items-center lg:hidden">
            {images.slice(5, 11).map((image, index) => (
              <img
                key={index}
                src={image}
                className="h-6 w-14 sm:h-10 sm:w-[105px] lg:h-auto lg:w-auto mt-2.5 mb-5 mx-1 lg:mx-10 filter grayscale-[100%] hover:filter-none"
              />
            ))}
          </div>
        </div>
      </div>
      <Landing />
    </>
  );
};

export default Home;
