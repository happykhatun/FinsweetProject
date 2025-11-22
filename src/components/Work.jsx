import React from 'react'
import pointer1 from "../assets/pointer1.png";
import pointer2 from '../assets/pointer2.png';
import pointer3 from '../assets/pointer3.png';
import pointer4 from '../assets/pointer4.png';
import { FaArrowRightLong } from "react-icons/fa6";




const Work = () => {
    return (
        <>
            <div className=' bg-[#F4F6FC]  py-32'>
                <div className='container flex justify-between'>
                    <div>
                        <h2 className='text-[48px] font-semibold text-[#282938]'>How we work</h2>
                        <p className='text-[#282938] font-'>Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor.</p>
                        <div className='text-[#2405F2] flex items-center gap-4 mt-4'>
                            <span className='font-medium text-[18px]'>Get in touch with us</span>
                            <FaArrowRightLong />

                        </div>

                    </div>
                    <div className='grid grid-cols-2 gap-12'>
                        <div>
                            <img src={pointer1} alt="pointer1" />
                            <h3 className='text-[32px] font-medium text-[#282938]'>Strategy</h3>
                            <p className='text-[#282938]'>Euismod faucibus turpis eu gravida<br /> mi. Pellentesque et velit aliquam .</p>
                        </div>
                        <div>
                            <img src={pointer2} alt="pointer2" />
                            <h3 className='text-[32px] text-[#282938] font-medium'>Wireframing</h3>
                            <p className='text-[#282938]'>Euismod faucibus turpis eu gravida<br /> mi. Pellentesque et velit aliquam .</p>
                        </div>
                        <div>
                            <img src={pointer3} alt="pointer3" />
                            <h3 className='text-[32px] font-medium text-[#282938]'>Design</h3>
                            <p className='text-[#282938]'>Euismod faucibus turpis eu gravida<br /> mi. Pellentesque et velit aliquam .</p>
                        </div>
                        <div>
                            <img src={pointer4} alt="pointer4" />
                            <h3 className='font-medium text-[32px] text-[#282938]'>Development</h3>
                            <p className='text-[#282938]'>Euismod faucibus turpis eu gravida<br /> mi. Pellentesque et velit aliquam .</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work
