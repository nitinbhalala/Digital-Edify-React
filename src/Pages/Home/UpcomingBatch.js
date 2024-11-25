import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai';
import WhiteButton from '../../Components/WhiteButton';
import { VscGraph } from 'react-icons/vsc';
import WeekDayBatches from '../../Components/HomePage/WeekDayBatches';

const UpcomingBatch = () => {

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

    return (
        <>
            <div className="container mx-auto px-2 mt-16 ">
                <p class="text-xl md:text-2xl font-bold text-center lg:text-start w-full font-poppins">
                    Upcoming Batch Schedule
                </p>
            </div>

            <div className="flex justify-center flex-wrap gap-8 mt-12 font-poppins">
                <div className="flex justify-center flex-wrap gap-8">
                    {batches.map((item, index) => {
                        return (
                            <WeekDayBatches data={item} />
                        );
                    })}
                </div>
                <div
                    className="bg-black rounded-lg py-6 w-[280px]"
                    style={{ boxShadow: "#E7E7E7 0px 2px 20px" }}
                >
                    <p className="text-xl md:text-3xl w-4/5 font-bold text-white text-center mt-5 mb-8 mx-auto">
                        Can’t find a batch you were looking for?
                    </p>
                    <div className="flex justify-center">
                        <WhiteButton
                            name=" Get Free Course Demo "
                            icon={<VscGraph size={17} />}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpcomingBatch
