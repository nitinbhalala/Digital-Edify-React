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
      <div className=" px-5 mt-8 md:mt-12 lg:mt-16 mb-16 md:mb-32 justify-items-center font-poppins">
        <h4 className="text-2xl md:text-4xl lg:text-4xl font-medium text-center text-[#343433] leading-9">
          India's #1 Premium Training Institute
        </h4>
        <div className="flex flex-wrap font-bold justify-center gap-3 lg:gap-5 mb-2.5 leading-[45px] md:leading-[130px] mt-7 md:mt-5">
          {textItems.map((item, index) => (
            <h1
              key={index}
              className={`bg-gradient-to-r ${index === activeIndex ? item.color : "text-black "
                } text-[50px] md:text-[115px] font-extrabold `}
            >
              {item.text}
            </h1>
          ))}
        </div>
        <p className="mt-7 md:mt-6 mb-12 text-base md:text-lg max-w-xl text-center leading-8">
          100000+ uplifted through our hybrid classroom & online training,
          enriched by real-time projects and job support.
        </p>
        <div className="flex flex-wrap gap-2 lg:space-x-4 justify-center">
          {/* Join Free Demo Button */}

          {/* <BlackButton
            name="Join Free Demo"
            icon={<MdOutlineLaptop className="text-sm lg:text-xl" />}
          /> */}
          <button className="flex gap-2 lg:gap-3 text-xs lg:text-sm items-center px-2.5 lg:px-4 py-3 lg:py-2 bg-black text-white font-semibold rounded-lg hover:bg-sky-500 min-w-36 lg:min-w-44 justify-center">
            <MdOutlineLaptop className="text-sm lg:text-xl" />
            {"Join Free Demo"}
          </button>

          {/* Contact Course Advisor Button */}
          <WhiteButton
            name="Contact Course Advisor"
            icon={<MdPerson className="text-sm lg:text-2xl" />}
          />
        </div>
        <div className="mt-24">
          <h2 className="text-center mb-2.5 text-lg md:text-2xl font-extrabold md:tracking-widest text-[#555]">
            Your Path to a Successful IT Career
          </h2>
          <p className="text-[13px] md:text-[15px] lg:text-base mb-2.5 md:mb-5 text-center text-[#212529]">
            Our Alumni Work at Top Compaines
          </p>

          <div>
            {/* First Row - 5 Images */}
            <div className="grid grid-cols-5 gap-1 md:gap-12 md:mx-5 justify-items-center items-center">
              {images.slice(0, 5).map((image, index) => (
                <img
                  key={`row1-${index}`}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className={`object-contain filter grayscale-[100%] hover:filter-none ${index === 0
                    ? "h-9 md:h-20 w-[120px] md:w-[160px]"
                    : index === 1
                      ? "h-9 md:h-16 w-[120px] md:w-[180px]"
                      : index === 2
                        ? "h-9 md:h-12 w-[90px] md:w-[130px]"
                        : index === 3
                          ? "h-9 md:h-14 w-[90px] md:w-[160px]"
                          : index === 4
                            ? " h-9 md:h-14 w-[50px] md:w-[100px]"
                            : " h-9 md:h-18 w-[150px]"
                    }`}
                />
              ))}
            </div>

            {/* Second Row - 6 Images */}
            <div className="grid grid-cols-6 gap-1 md:gap-7 justify-items-center items-center">
              {images.slice(5, 11).map((image, index) => (
                <img
                  key={`row2-${index}`}
                  src={image}
                  alt={`Image ${index + 6}`}
                  className={`object-contain filter grayscale-[100%] hover:filter-none ${index === 0
                    ? "h-10 md:h-18 w-[150px]"
                    : index === 1
                      ? "h-10 md:h-16 w-[140px]"
                      : index === 2
                        ? "h-10 md:h-14 w-[130px]"
                        : index === 3
                          ? "h-10 md:h-20 w-[90px]"
                          : index === 4
                            ? "h-10 md:h-12 w-[100px]"
                            : index === 5
                              ? "h-10 md:h-12 w-[110px]"
                              : "h-10 md:h-14 w-[130px]"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Landing />
    </>
  );
};

export default Home;
