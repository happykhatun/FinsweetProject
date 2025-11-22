import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import pepole from "../assets/pepole1.png";
import pepole2 from "../assets/pepole2.png";
import line from "../assets/line.png";
import pepole3 from "../assets/pepole3.png";
import pepole4 from "../assets/pepole4.png";
import icon6 from "../assets/icon6.png";
import icon3 from "../assets/icon3.png";
import icon1 from "../assets/icon1.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import man1 from "../assets/man1.png";
import man2 from "../assets/man2.png";
import man3 from "../assets/man3.png";
import man4 from "../assets/man4.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";





function About() {
    return (
        <>

            <div className='py-32'>
                <div className='container'>
                    <div className='flex justify-between'>
                        <div>
                            <h4 className='font-normal text-[18px] text-[#282938]'>About us</h4>
                            <h2 className='text-[54px] font-semibold text-[#282938] leading-16'>Our designs solve<br /> problems</h2>
                            <p className='mt-8 text[16px] font-normal text-gray-500' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br /> do eiusmod tempor incididunt ut labore et dolore magna<br /> aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        <div>
                            <img src={pepole} alt="pepole" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='pb-32'>
                <div className='container bg-[#F4F5F5]'>
                    <div className='flex gap-10 p-12 items-center'>
                        <div>
                            <h4 className='font-medium text-[16px] text-[#282938]'>Who we are</h4>
                            <h2 className='font-semibold text-[38px] text-[#282938]'>Goal focussed</h2>
                            <p className='text[16px] font-normal text-gray-500 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br /> enim ad minim veniam, quis nostrud exercitation ullamco<br /> laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div>
                            <h2 className='font-semibold text-[38px] text-[#282938]'>Continuous improvement</h2>
                            <p className='text[16px] font-normal text-gray-500 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br /> enim ad minim veniam, quis nostrud exercitation ullamco<br /> laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <img src={pepole2} alt="pepole2" />
                </div>
            </div>
            <div className='pb-32'>
                <div className='container'>
                    <h2 className='font-semibold text-[48px] text-center text-[#282938]'>The process we follow</h2>
                    <div className='flex justify-between mt-12'>
                        <div>
                            <img src={line} alt="line" className='w-[200px]' />
                            <h3 className='text-[24px] font-medium text-[#282938] mt-8'>Planning</h3>
                            <p className='text-[16px] font-normal text-gray-500 mt-2'>Lorem ipsum dolor sit amet,<br /> consetetur sadipscing elitr.</p>
                        </div>
                        <div>
                            <img src={line} alt="line" className='w-[200px]' />
                            <h3 className='text-[24px] font-medium text-[#282938] mt-8'>Conception</h3>
                            <p className='text-[16px] font-normal text-gray-500 mt-2'>Lorem ipsum dolor sit amet,<br /> consetetur sadipscing elitr.</p>
                        </div>
                        <div>
                            <img src={line} alt="line" className='w-[200px]' />
                            <h3 className='text-[24px] font-medium text-[#282938] mt-8'>Design</h3>
                            <p className='text-[16px] font-normal text-gray-500 mt-2'>Lorem ipsum dolor sit amet,<br /> consetetur sadipscing elitr.</p>
                        </div>
                        <div>
                            <img src={line} alt="line" className='w-[200px]' />
                            <h3 className='text-[24px] font-medium text-[#282938] mt-8'>Development</h3>
                            <p className='text-[16px] font-normal text-gray-500 mt-2'>Lorem ipsum dolor sit amet,<br /> consetetur sadipscing elitr.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#EEF4FA] py-32'>
                <div className='container'>
                    <div className='flex justify-between'>
                        <div>
                            <h4 className='font-medium text-[16px] text-[#282938]'>Our Mission </h4>
                            <h2 className='font-semibold text-[38px] text-[#282938] mt-4'>Inspire, Innovate, Share</h2>
                            <p className='text-[16px] font-normal text-gray-500 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim<br /> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea<br /> commodo consequat.</p>
                        </div>
                        <div>
                            <img src={pepole3} alt="pepole3" />
                        </div>
                    </div>
                    <div className='flex justify-between mt-24'>
                        <div>
                            <img src={pepole4} alt="pepole4" />
                        </div>
                        <div>
                            <h4 className='font-medium text-[16px] text-[#282938]'>Our Vision</h4>
                            <h2 className='font-semibold text-[38px] text-[#282938]mt-4'>Laser focus</h2>
                            <p className='text-[16px] font-normal text-gray-500 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim<br /> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea<br /> commodo consequat.</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='py-32'>
                <div className='container'>
                    <h2 className='text-center text-[48px] font-semibold text-[#282938] leading-16'>The benefits of working<br /> with us</h2>
                    <div className='flex gap-4 mt-12'>
                        <div className='bg-[#EEF4FA] p-8 transition-all duration-500 cursor-pointer hover:scale-105 '>
                            <img src={icon6} alt="icon6" />
                            <h4 className='text-[24px] text-[#282938] font-normal'>Customize with ease</h4>
                            <p className='font-normal text-[#282938] mt-3'>Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna<br /> aliqua ut enim.</p>
                        </div>
                        <div className='bg-[#EEF4FA] p-8 transition-all duration-500 cursor-pointer hover:scale-105 '>
                            <img src={icon3} alt="icon3" />
                            <h4 className='text-[24px] text-[#282938] font-normal'>Uses Client First</h4>
                            <p className='font-normal text-[#282938] mt-3'>Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna<br /> aliqua ut enim. </p>
                        </div>
                        <div className='bg-[#EEF4FA] p-8  transition-all duration-500 cursor-pointer hover:scale-105 '>
                            <img src={icon1} alt="icon1" />
                            <h4 className='text-[24px] text-[#282938] font-normal'>Uses Client First</h4>
                            <p className='font-normal text-[#282938] mt-3'>Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna<br /> aliqua ut enim. </p>
                        </div>

                    </div>
                    <div className='flex justify-between mt-12 items-center'>
                        <div>
                            <h3 className='font-semibold text-[38px] text-[#282938]'>100.000+</h3>
                            <p className='font-normal text-[16px] text-gray-500'>Finsweet Users</p>
                        </div>
                        <div className='hover:shadow-2xl hover:h-14 w-[160] p-2 hover: bg-white'>
                            <img src={logo1} alt="logo1" />
                        </div>
                        <div>
                            <img src={logo2} alt="logo2" />
                        </div>
                        <div>
                            <img src={logo3} alt="logo3" />
                        </div>
                        <div>
                            <img src={logo4} alt="logo4" />
                        </div>
                        <div>
                            <img src={logo5} alt="logo5" />
                        </div>

                    </div>
                </div>
            </div>
            <div className='py-32 bg-[#F4F6FC]'>
                <div className='container'>
                    <h2 className='font-semibold text-[48px] text-[#282938] text-center'>Meet our team</h2>
                    <div className='flex justify-between text-center mt-12'>
                        <div className='bg-white p-10 relative overflow-hidden group'>
                            <img src={man1} alt="man1" />
                            <div className='flex gap-3 absolute top-[50%] left-18'>
                                <a href='#' className='rounded-full h-[4] w-[4] p-1 bg-white'><FaFacebookF /></a>
                                <a href='#' className='rounded-full h-[4] w-[4] p-1 bg-white'><FaTwitter /></a>
                                <a href='#' className='rounded-full h-[4] w-[4] p-1 bg-white'> <FaLinkedinIn /></a>
                            </div>
                            <h3 className='text-[24px] font-normal text-[#1D2130] mt-7 '>John Smith</h3>
                            <h5 className='font-normal text-[16px] text-gray-500'>CEO</h5>
                        </div>
                        <div className='bg-white p-10 relative'>
                            <img src={man2} alt="man2" />
                            <div className='flex gap-3 absolute top-[50%] left-18'>
                                <a href='#' className='rounded-full h-[4] w-[4] p-1 bg-white'><FaFacebookF /></a>
                                <a href='#' className='rounded-full h-[4] w-[4] p-1 bg-white'><FaTwitter /></a>
                                <a href='#' className='rounded-full h-[4] w-[4] p-1 bg-white'><FaLinkedinIn /></a>
                            </div>
                            <h3 className='text-[24px] font-normal text-[#1D2130] mt-7' >Simon Adams</h3>
                            <h5 className='font-normal text-[16px] text-gray-500'>CTO</h5>
                        </div>
                        <div className='bg-white p-10 relative'>
                            <img src={man3} alt="man3" />
                            <div className='flex gap-3 absolute top-[50%] left-18'>
                                <a href='#' className='rounded-full h-[4] w-[4] p-1 bg-white'><FaFacebookF /></a>
                                <a href='#' className='rounded-full h-[4] w-[4] p-1 bg-white'><FaTwitter /></a>
                                <a href='#' className='rounded-full h-[4] w-[4] p-1 bg-white'><FaLinkedinIn /></a>
                            </div>
                            <h3 className='text-[24px] font-normal text-[#1D2130] mt-7'>Paul Jones</h3>
                            <h5 className='font-normal text-[16px] text-gray-500'>Design Lead</h5>
                        </div>
                        <div className='bg-white p-10 relative'>
                            <img src={man4} alt="man4" />
                            <div className='flex gap-3 absolute top-[50%] left-18'>
                                <a href='#' className='rounded-full h-[4] w-[4] p-1 bg-white'><FaFacebookF /></a>
                                <a href='#' className='rounded-full h-[4] w-[4] p-1 bg-white'><FaTwitter /></a>
                                <a href='#' className='rounded-full h-[4] w-[4] p-1 bg-white'><FaLinkedinIn /></a>
                            </div>
                            <h3 className='text-[24px] font-normal text-[#1D2130] mt-7'>Sara Hardin</h3>
                            <h5 className='font-normal text-[16px] text-gray-500'>Project Manager</h5>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default About
