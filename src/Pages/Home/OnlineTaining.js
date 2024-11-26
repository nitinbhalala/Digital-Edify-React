import React, { useEffect, useState } from 'react'
import BlackButton from '../../Components/BlackButton'
import WhiteButton from '../../Components/WhiteButton'
import { VscGraph } from 'react-icons/vsc'

const OnlineTaining = () => {

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


    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % textItems.length);
        }, 1000); // Changes every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [textItems.length]);

    return (
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
                <BlackButton name=" Free Demo " icon={<VscGraph size={17} />} />
                <WhiteButton name="Get In Touch" icon={<VscGraph size={17} />} />
            </div>
        </div>
    )
}

export default OnlineTaining