import React from 'react'
import { MdCheck } from 'react-icons/md'
import WhyChooseCard from './WhyChooseCard'
import WhyDigitalEdify from '../Home/WhyDigitalEdify'
import OnlineTaining from '../Home/OnlineTaining'
import OurLocations from '../Home/OurLocations'
import HeroSection from './HeroSection'

const AboutUs = () => {



    const mydata = [
        {
            "title": "Experienced Instructors",
            "description": "Learn from industry experts with real-world experience and a passion for teaching.",
            "number": "1",
        },
        {
            "title": "Comprehensive Curriculum",
            "description": "Stay ahead with courses covering the latest trends and technologies in the IT industry.",
            "number": "2",
        },
        {
            "title": "Personalized Support",
            "description": "Receive individual guidance and mentorship throughout your learning journey.",
            "number": "3",
        },
        {
            "title": "State-of-the-Art Facilities",
            "description": "Our modern campuses are equipped with advanced technology and resources to enhance your learning.",
            "number": "4",
        },
        {
            "title": "Industry Partnerships",
            "description": "Benefit from our collaborations with over 100 industry leaders for internships and job placements.",
            "number": "5",
        },
        {
            "title": "Proven Success Record",
            "description": "Join a community of over 100,000 learners who have successfully advanced their careers with us.",
            "number": "6",
        }
    ]


    return (
        <>
            <HeroSection name="About Us" disc="where education meets innovation. Since our establishment in 2017, we've been committed to empowering individuals with the skills and knowledge to excel in the ever-evolving world of technology." boldDisc="Welcome to Digital Edify - " />
            {/* <div className="bg-[#f1f9ff] py-12 border-t border-b border-gray-300 font-poppins">
                <div className="absolute inset-0 abutBg opacity-50"></div>
                <div className="container mx-auto z-10 px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-7/12">
                            <h3 className="text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-4xl font-semibold mb-4">
                                
                            </h3>
                            <p className="mb-4">
                                <strong></strong>
                                where education meets innovation. Since our establishment in 2017, we've been committed to empowering
                                individuals with the skills and knowledge to excel in the ever-evolving world of technology.
                            </p>
                            <p className="font-semibold">Key Highlights</p>

                            <div className="mt-5">
                                {Data2.map((item) => {
                                    return (
                                        <div className="flex font-poppins gap-2 my-1.5">
                                            <div className="w-[19px] h-[19px] rounded-full flex justify-end bg-gradient-to-b from-[#023892] to-[#4a78da]">
                                                <MdCheck className="text-white text-[17px]" />
                                            </div>
                                            <p className=" text-gray-800">{item}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="md:w-5/12 flex justify-center mt-8 md:mt-0">
                            <div className="inline-block p-6 bg-gradient-to-r from-pink-600 to-blue-600" style={{ borderRadius: " 50% 50% 05%" }}>
                                <img
                                    src={blog7}
                                    alt="About Us"
                                    className="rounded-full w-64 h-64 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <h3 class="text-center text-2xl md:text-4xl p-1 bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#8D65E9] via-[#aa0091] to-[#bf1e64] mt-24 mb-2.5 font-poppins">Who We Are</h3>
            <div class="font-poppins flex justify-center mb-16">
                <p className='md:w-2/5 text-center'>Digital Edify is India's premier training institute specializing in cutting-edge IT education. With
                    campuses in <strong> Hyderabad, Bangalore, </strong>and <strong>Kakinada,</strong> we offer top-notch
                    classroom and online training programs designed to transform your career prospects.</p>
            </div>

            <div className='container'>
                <hr />
            </div>

            <h3 class="text-center text-2xl md:text-4xl p-1 font-poppins font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#8D65E9] via-[#aa0091] to-[#bf1e64] mt-16 mb-2.5">Why Choose Digital Edify?</h3>
            <div class="font-poppins flex justify-center mb-16">
                <p className='md:w-2/3 text-center'>Choosing the right educational partner is crucial for your success. Here's why Digital Edify stands out</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 container mb-5'>
                {
                    mydata?.map((item, index) => {
                        return (
                            <WhyChooseCard data={item} />
                        )
                    })
                }
            </div>

            <div className='container'>
                <hr />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center container font-poppins  gap-7 my-16">
                <p className='text-center md:text-right w-[95%] mx-auto'>
                    At Digital Edify, we're dedicated to providing an educational experience that goes beyond traditional learning.
                    We focus on practical skills, real-world projects, and personal development to ensure you are fully prepared
                    for the challenges of the tech industry.
                </p>
                <h3 class="text-center md:text-left text-2xl md:text-4xl p-1 font-poppins font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#8D65E9] via-[#aa0091] to-[#bf1e64]">Empower Your Future. <br /> Choose Digital Edify.</h3>
            </div>

            <WhyDigitalEdify />

            <OnlineTaining />

            <OurLocations />
        </>
    )
}

export default AboutUs
