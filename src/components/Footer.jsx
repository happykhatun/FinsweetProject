import React from 'react'
import logo from "../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";


function Footer() {
    return (
        <>
            <footer className='pt-22 bg-[#1C1E53]'>
                <div className='container font-poppins '>
                    <div className='grid grid-cols-2 '>
                        <div className=''>
                            <img src={logo} alt="logo" className='w-[156px] text-[38px]' />
                            <p className='font-medium text-[16px] text-gray-300 mt-6'>We are always open to discuss your project and<br /> improve your online presence.</p>
                            <div className='bg-[#FCD980] flex gap-6 p-5 h-[95px] w-[450px] mt-22'>
                                <div>
                                    <h4 className='font-medium text-[18px]'>Email me at</h4>
                                    <p className='font-normal text-[16px] text-gray-600'>contact@website.com</p>
                                </div>

                                <div>
                                    <h4 className='font-medium text-[18px]'>Call us</h4>
                                    <p className='font-normal text-[16px] text-gray-600'>0927 6277 28525</p>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <h2 className='font-semibold text-[48px] text-white'>Lets Talk!</h2>
                            <p className='font-normal text-[16px] text-gray-300 mt-3'>We are always open to discuss your project,<br /> improve your online presence and help with your<br /> UX/UI design challenges.</p>
                            <div className='flex gap-6 mt-7'>
                                <a href='#' className='h-[4] w-[4] bg-white p-2 rounded-full hover:text-white hover:bg-[#131d8e] transition-all duration-300 hover:scale-110'><FaFacebookF /></a>
                                <a href='#' className='h-[4] w-[4] bg-white p-2 rounded-full hover:text-white hover:bg-[#131d8e] transition-all duration-300 hover:scale-110'><FaTwitter /></a>
                                <a href='#' className='h-[4] w-[4] bg-white p-2 rounded-full hover:text-white hover:bg-[#131d8e] transition-all duration-300 hover:scale-110'><FaInstagram /></a>
                                <a href='#' className='h-[4] w-[4] bg-white p-2 rounded-full hover:text-white hover:bg-[#131d8e] transition-all duration-300 hover:scale-110'><FaLinkedinIn /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white py-8">
                    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-[#282938]">
                        <p className='font-medium text-[16px] text-[#282938]'>Copyright 2022, Finsweet.com</p>
                        <ul className="flex gap-6 mt-3 md:mt-0">
                            <li><a href="#" className="font-medium text-[16px] text-[#282938] hover:text-[#9da1e0]">Home</a></li>
                            <li><a href="#" className='font-medium text-[16px] text-[#282938] hover:text-[#9da1e0]'>About us</a></li>
                            <li><a href="#" className='font-medium text-[16px] text-[#282938] hover:text-[#9da1e0]'>Features</a></li>
                            <li><a href="#" className='font-medium text-[16px] text-[#282938] hover:text-[#9da1e0]'>Pricing</a></li>
                            <li><a href="#" className='font-medium text-[16px] text-[#282938] hover:text-[#9da1e0]'>FAQ</a></li>
                            <li><a href="#" className='font-medium text-[16px] text-[#282938] hover:text-[#9da1e0]'>Blog</a></li>
                        </ul>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
