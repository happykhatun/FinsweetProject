import React from 'react'
import peopleworking from "../assets/peopleworking.png";
import group1 from "../assets/group1.png";
import group2 from "../assets/group2.png";
import group3 from "../assets/group3.png";
import group4 from "../assets/group4.png";
import group5 from "../assets/group5.png";
import group6 from "../assets/group6.png";
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const BlogPage = () => {
    return (
        <>
            <div className='py-32'>
                <div className='container text-center'>
                    <h2 className='font-semibold text-[48px] text-[#282938] leading-16'>A UX Case Study on Creating a<br /> Studious Environment for Students</h2>
                    <h4 className='font-medium text-[16px] text-[#282938] mt-4'>Andrew Jonson
                        Posted on 27th January 2021</h4>
                    <img src={peopleworking} alt="peopleworking" className='mt-8' />
                    <p className='font-normal text-[16px] text-gray-500 mt-12'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the<br /> stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of<br /> the spectator on a hillside.</p>
                    <Link to="/ReadBlog"> <a href='#' className='text-[#2405F2] text-[16px] font-normal cursor-pointer mt-4 hover:underline ' >Read more</a></Link>
                </div>
            </div>
            <div className='pb-32'>
                <div className='container'>
                    <h2 className='text-[48px] font-semibold text-[#282938] text-center'>Our Blog</h2>
                    <div className='grid grid-cols-3 mt-12'>
                        <div className=' bg-white  p-4'>
                            <img src={group1} alt="group1" />
                            <h3 className='text-[16px] text-gray-500 font-medium mt-10'>27 Jan 2021</h3>
                            <p className='text-[24px] font-normal text-[#282938] '>How one Webflow user grew his single person consultancy from $0-100K in 14 months</p>
                            <p className='text-[16px] font-normal text-gray-500 mt-4'>See how pivoting to Webflow changed one<br /> person’s sales strategy and allowed him to attract</p>
                            <div>
                                <a href='#' className='flex items-center gap-4 text-[16px] font-medium mt-8'>Read More <FaArrowRightLong /></a>
                            </div>

                        </div>
                        <div className=' bg-white  p-4'>
                            <img src={group2} alt="group2" />
                            <h3 className='text-[16px] text-gray-500 font-medium mt-10'>27 Jan 2021</h3>
                            <p className='text-[24px] font-normal text-[#282938] '>How one Webflow user grew his single person consultancy from $0-100K in 14 months</p>
                            <p className='text-[16px] font-normal text-gray-500 mt-4'>See how pivoting to Webflow changed one<br /> person’s sales strategy and allowed him to attract</p>
                            <div>
                                <a href='#' className='flex items-center gap-4 text-[16px] font-medium mt-8'>Read More <FaArrowRightLong /></a>
                            </div>

                        </div>
                        <div className=' bg-white  p-4'>
                            <img src={group3} alt="group3" />
                            <h3 className='text-[16px] text-gray-500 font-medium mt-10'>27 Jan 2021</h3>
                            <p className='text-[24px] font-normal text-[#282938] '>How one Webflow user grew his single person consultancy from $0-100K in 14 months</p>
                            <p className='text-[16px] font-normal text-gray-500 mt-4'>See how pivoting to Webflow changed one<br /> person’s sales strategy and allowed him to attract</p>
                            <div>
                                <a href='#' className='flex items-center gap-4 text-[16px] font-medium mt-8'>Read More <FaArrowRightLong /></a>
                            </div>

                        </div>
                        <div className=' bg-white  p-4 mt-16'>
                            <img src={group4} alt="group4" />
                            <h3 className='text-[16px] text-gray-500 font-medium mt-10'>27 Jan 2021</h3>
                            <p className='text-[24px] font-normal text-[#282938] '>How one Webflow user grew his single person consultancy from $0-100K in 14 months</p>
                            <p className='text-[16px] font-normal text-gray-500 mt-4'>See how pivoting to Webflow changed one<br /> person’s sales strategy and allowed him to attract</p>
                            <div>
                                <a href='#' className='flex items-center gap-4 text-[16px] font-medium mt-8'>Read More <FaArrowRightLong /></a>
                            </div>

                        </div>
                        <div className=' bg-white  p-4 mt-16'>
                            <img src={group5} alt="group5" />
                            <h3 className='text-[16px] text-gray-500 font-medium mt-10'>27 Jan 2021</h3>
                            <p className='text-[24px] font-normal text-[#282938] '>How one Webflow user grew his single person consultancy from $0-100K in 14 months</p>
                            <p className='text-[16px] font-normal text-gray-500 mt-4'>See how pivoting to Webflow changed one<br /> person’s sales strategy and allowed him to attract</p>
                            <div>
                                <a href='#' className='flex items-center gap-4 text-[16px] font-medium mt-8'>Read More <FaArrowRightLong /></a>
                            </div>

                        </div>
                        <div className=' bg-white  p-4 mt-16'>
                            <img src={group6} alt="group6" />
                            <h3 className='text-[16px] text-gray-500 font-medium mt-10'>27 Jan 2021</h3>
                            <p className='text-[24px] font-normal text-[#282938] '>How one Webflow user grew his single person consultancy from $0-100K in 14 months</p>
                            <p className='text-[16px] font-normal text-gray-500 mt-4'>See how pivoting to Webflow changed one<br /> person’s sales strategy and allowed him to attract</p>
                            <div>
                                <a href='#' className='flex items-center gap-4 text-[16px] font-medium mt-8'>Read More <FaArrowRightLong /></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BlogPage
