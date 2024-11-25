import React from 'react'
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import { MdOutlineWhatsapp } from 'react-icons/md'
import { RiFacebookFill } from 'react-icons/ri'
import digitaledify from "../assets/digitaledify.png";

const Footer = () => {
    return (
        <div>
            <div className=" px-1  bg-white text-black py-12 border-t border-b border-[#DDDDDD] w-full gap-10 md:gap-10 lg:gap-20 xl:gap-48 font-poppins">
                <div className="container md:flex md:justify-center">

                    <div className="w-fit mx-auto">
                        <img src={digitaledify} alt="digitaledify" className="mx-auto" />
                        <p className="mt-4 font-poppins text-center">Follow us on</p>
                        <div className="flex space-x-4 mt-2">
                            <a href="#" aria-label="Facebook">
                                <RiFacebookFill size={27} />
                            </a>
                            <a href="#" aria-label="Twitter">
                                <FaTwitter size={27} />
                            </a>
                            <a href="#" aria-label="LinkedIn">
                                <FaLinkedinIn size={27} />
                            </a>
                            <a href="#" aria-label="Instagram">
                                <FaInstagram size={27} />
                            </a>
                            <a href="#" aria-label="WhatsApp">
                                <MdOutlineWhatsapp size={27} />
                            </a>
                        </div>
                    </div>

                    <div className="w-fit mx-auto mt-8 md:mt-0">
                        <h2 className="font-semibold text-xl mb-4 text-center md:text-start">Digital Edify</h2>
                        <ul className="space-y-4">
                            <li className="bg-white hover:bg-gray-700 hover:text-white text-gray-600 border border-[#c9c9c9] rounded text-center w-fit px-2 py-[1px]  mx-auto md:mx-0">
                                <a href="#" className="">
                                    Online Pay
                                </a>
                            </li>
                            <li className="bg-white hover:bg-gray-700 hover:text-white mx-auto md:mx-0 text-gray-600 border border-[#c9c9c9] rounded text-center w-fit px-2 py-[1px] ">
                                <a href="#" className="">
                                    Razor Pay
                                </a>
                            </li>
                            <li className="bg-white hover:bg-gray-700 hover:text-white mx-auto md:mx-0 text-gray-600 border border-[#c9c9c9] rounded text-center w-fit px-2 py-[1px] ">
                                <a href="#" className="">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-fit mx-auto mt-8 md:mt-0">
                        <h2 className="font-semibold text-xl mb-2.5 font-poppins text-center md:text-start">Company</h2>
                        <ul>
                            <li className="text-center md:text-start">
                                <a href="#" className="hover:text-orange-500">
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-fit mx-auto mt-8 md:mt-0">
                        <h2 className="font-semibold text-xl mb-2.5 text-center md:text-start">Reach Us</h2>
                        <ul className="space-y-2">
                            <li className="text-center md:text-start">Phone: +91 9515175554</li>
                            <li className="text-center md:text-start">Email: hello@digitaledify.ai</li>
                            <li className="text-center md:text-start">WhatsApp: +91 9515175554</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center mt-3 font-poppins mb-4">
                <p className="text-xs">
                    © Copyright Digital Edify | 2024{" "}
                    <a href="#" className="text-[#281af0] hover:underline">
                        Privacy Policy
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Footer