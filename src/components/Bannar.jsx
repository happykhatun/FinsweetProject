import React from 'react'
import bannar from "../assets/bannar.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Bannar = () => {
    return (
        <>
            <div className='bg-[#1C1E53] py-32'>
                <div className='container '>
                    <div className='flex justify-between'>
                        <div className='w-[582px]'>
                            <h1 className='text-white text-[54px] leading-[74px] font-semibold'>Building stellar websites for early <span className='block'>startups</span></h1>
                            <p className='text-white mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt.</p>
                            <div className='flex  mt-12 items-center gap-10 '>
                               <Link to="/WorkPage"> <button className='py-4 px-14 rounded-full bg-[#FCD980] font-semibold text-[18px] cursor-pointer hover:transition-all duration-300 hover:scale-105'>View our work</button></Link>
                                <div className='flex items-center gap-4 cursor-pointer group'>
                                    <span className='text-white group-hover:underline  '>View Pricing</span>
                                    <FaArrowRightLong className='text-white ' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={bannar} alt="bannar" />
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Bannar
