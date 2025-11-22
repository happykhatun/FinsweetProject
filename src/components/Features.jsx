import React from 'react'
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";

const Features = () => {
    return (
        <>
            <div className='py-32 bg-[#F4F6FC]'>
                <div className='container font-poppins'>
                    <div className='text-center'>
                        <h4 className='text-[#282938] font-medium text-[16px]'>Features</h4>
                        <h2 className='text-[48px] text-[#282938] font-semibold leading-16'>Design that solves<br /> problems, one product at<br /> a time</h2>
                    </div>
                    <div className='grid grid-cols-3 gap-4 mt-12'>
                        <div className='bg-white p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-105 '>
                            <img src={icon1} alt="icon1"/>
                            <h4 className='text-[24px] text-[#282938] font-normal'>Uses Client First</h4>
                            <p className='font-normal text-[#282938] mt-3'>Euismod faucibus turpis eu gravida mi.<br/> Pellentesque et velit aliquam sed faucib<br/> turpis eu gravida mi. Pellentesque et<br/> velit aliquam sed mi. </p>
                        </div>
                        <div className='bg-white p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-105'>
                            <img src={icon2} alt="icon2"/>
                            <h4 className='text-[24px] text[#282938] font-normal'>Two Free Revision Round</h4>
                            <p className=' text-[#282938] font-normal mt-3'>Euismod faucibus turpis eu gravida mi.<br/> Pellentesque et velit aliquam sed faucib<br/> turpis eu gravida mi. Pellentesque et<br/> velit aliquam sed mi. </p>
                        </div>
                        <div className='bg-white p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-105'>
                            <img src={icon3} alt="icon3"/>
                            <h4 className='text-[#282938] text-[24px] font-normal'>Template Customization</h4>
                            <p className='text-[#282938] font-normal mt-3'>Euismod faucibus turpis eu gravida mi.<br/> Pellentesque et velit aliquam sed faucib<br/> turpis eu gravida mi. Pellentesque et<br/> velit aliquam sed mi. </p>
                        </div>
                        <div className='bg-white p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-105'>
                            <img src={icon4} alt="icon4"/>
                            <h4 className='text-[#282938] text-[24px] font-normal'>24/7 Support</h4>
                            <p className='text-[#282938] font-normal mt-3'>Euismod faucibus turpis eu gravida mi. <br/>Pellentesque et velit aliquam sed faucib<br/> turpis eu gravida mi. Pellentesque et<br/> velit aliquam sed mi. </p>
                        </div>
                        <div className='bg-white p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-105'>
                            <img src={icon5} alt="icon5"/>
                            <h4 className='font-normal text-[#282938] text-[24px]'>Quick Delivery</h4>
                            <p className='text-[#282938] font-normal mt-3'>Euismod faucibus turpis eu gravida mi.<br/> Pellentesque et velit aliquam sed faucib<br/> turpis eu gravida mi. Pellentesque et<br/> velit aliquam sed mi. </p>
                        </div>
                        <div className='bg-white p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-105'>
                            <img src={icon6} alt="icon6"/>
                            <h4 className='text-[24px] text-[#282938] font-normal'>Hands-on approach</h4>
                            <p className='text-[#282938] font-normal mt-3'>Euismod faucibus turpis eu gravida mi.<br/> Pellentesque et velit aliquam sed faucib<br/> turpis eu gravida mi. Pellentesque et<br/> velit aliquam sed mi. </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Features
