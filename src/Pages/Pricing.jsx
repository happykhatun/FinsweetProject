import React from 'react'
import Pointer from "../assets/Pointer.png";

const Pricing = () => {
    return (
        <>
            <div className='py-32'>
                <div className='container'>
                    <h2 className='font-semibold text-[48px] text-[#282938] text-center'>Our Pricing Plans</h2>
                    <p className='font-medium text-[16px] text-gray-500 text-center mt-4'>When you’re ready to go beyond prototyping in Figma, Webflow is<br /> ready to help you bring your designs to life — without coding them.</p>
                    <div className='flex gap-8 mt-16'>
                        <div className='bg-[#F4F6FC] h-[750px] p-12 w-[360px]'>
                            <div className='flex items-center gap-2'>
                                <h3 className='text-[38px] font-semibold text-[#282938]'>$299</h3>
                                <h5 className='text-[16px] font-normal text-[#2405F2]'>Per Design</h5>
                            </div>
                            <div className='mt-5'>
                                <h2 className='font-medium text-[24px] text-[#282938]'>Landing Page </h2>
                                <p className='font-medium text-[16px] text-gray-500  mt-2'>When you’re ready to go beyond<br /> prototyping in Figma, </p>
                            </div>

                            <div className='mt-20 '>
                                <div className='flex items-center gap-3'>
                                    <img src={Pointer} alt="Pointer" />
                                    <h3 className='font-normal text-[16px] text-[#282938]'>All limited links</h3>
                                </div>
                                <div className='flex items-center gap-3 mt-5'>
                                    <img src={Pointer} alt="Pointer" />
                                    <h3 className='font-normal text-[16px] text-[#282938]'>Own analytics platform</h3>
                                </div>
                                <div className='flex items-center gap-3 mt-5'>
                                    <img src={Pointer} alt="Pointer" />
                                    <h3 className='font-normal text-[16px] text-[#282938]'>Chat support</h3>
                                </div>
                                <div className='flex items-center gap-3 mt-5'>
                                    <img src={Pointer} alt="Pointer" />
                                    <h3 className='font-normal text-[16px] text-[#282938]'>Optimize hashtags</h3>
                                </div>
                                <div className='flex items-center gap-3 mt-5'>
                                    <img src={Pointer} alt="Pointer" />
                                    <h3 className='font-normal text-[16px] text-[#282938]'>Unlimited users</h3>
                                </div>
                                <button className='mt-30 py-4 px-14 rounded-full bg-[#282938]  font-semibold text-[18px] text-white'>Get started</button>
                            </div>
                        </div>
                        <div className='bg-[#1C1E53] h-[750px] p-12 w-[360px]'>
                            <div className='flex items-center gap-2'>
                                <h3 className='text-[38px] font-semibold text-[#FFFFFF]'>$399</h3>
                                <h5 className='text-[16px] font-normal text-[#FCD980]'>Multi Design</h5>
                            </div>
                            <div className='mt-5'>
                                <h2 className='font-medium text-[24px] text-[#FFFFFF]'>Website Page  </h2>
                                <p className='font-medium text-[16px] text-gray-400  mt-2'>When you’re ready to go beyond<br /> prototyping in Figma, Webflow’s<br /> ready to help. </p>
                            </div>

                            <div className='mt-20 '>
                                <div className='flex items-center gap-3'>
                                    <img src={Pointer} alt="Pointer" />
                                    <h3 className='font-normal text-[16px] text-[#FFFFFF]'>All limited links</h3>
                                </div>
                                <div className='flex items-center gap-3 mt-5'>
                                    <img src={Pointer} alt="Pointer" />
                                    <h3 className='font-normal text-[16px] text-[#FFFFFF]'>Own analytics platform</h3>
                                </div>
                                <div className='flex items-center gap-3 mt-5'>
                                    <img src={Pointer} alt="Pointer" />
                                    <h3 className='font-normal text-[16px] text-[#FFFFFF]'>Chat support</h3>
                                </div>
                                <div className='flex items-center gap-3 mt-5'>
                                    <img src={Pointer} alt="Pointer" />
                                    <h3 className='font-normal text-[16px] text-[#FFFFFF]'>Optimize hashtags</h3>
                                </div>
                                <div className='flex items-center gap-3 mt-5'>
                                    <img src={Pointer} alt="Pointer" />
                                    <h3 className='font-normal text-[16px] text-[#FFFFFF]'>Unlimited users</h3>
                                </div>
                                <button className='mt-25 py-4 px-14 rounded-full bg-[#FCD980]  font-semibold text-[18px] text-[#282938]'>Get started</button>
                            </div>
                        </div>
                        <div className='bg-[#F4F6FC] h-[750px] p-12 w-[360px]'>
                            <div className='flex items-center gap-2'>
                                <h3 className='text-[38px] font-semibold text-[#282938]'>$499 +</h3>
                                <h5 className='text-[16px] font-normal text-[#2405F2]'>Per Design</h5>
                            </div>
                            <div className='mt-5'>
                                <h2 className='font-medium text-[24px] text-[#282938]'>Complex Project</h2>
                                <p className='font-medium text-[16px] text-gray-500  mt-2'>When you’re ready to go beyond<br /> prototyping in Figma, </p>
                            </div>

                            <div className='mt-20 '>
                                <div className='flex items-center gap-3'>
                                    <img src={Pointer} alt="Pointer" />
                                    <h3 className='font-normal text-[16px] text-[#282938]'>All limited links</h3>
                                </div>
                                <div className='flex items-center gap-3 mt-5'>
                                    <img src={Pointer} alt="Pointer" />
                                    <h3 className='font-normal text-[16px] text-[#282938]'>Own analytics platform</h3>
                                </div>
                                <div className='flex items-center gap-3 mt-5'>
                                    <img src={Pointer} alt="Pointer" />
                                    <h3 className='font-normal text-[16px] text-[#282938]'>Chat support</h3>
                                </div>
                                <div className='flex items-center gap-3 mt-5'>
                                    <img src={Pointer} alt="Pointer" />
                                    <h3 className='font-normal text-[16px] text-[#282938]'>Optimize hashtags</h3>
                                </div>
                                <div className='flex items-center gap-3 mt-5'>
                                    <img src={Pointer} alt="Pointer" />
                                    <h3 className='font-normal text-[16px] text-[#282938]'>Unlimited users</h3>
                                </div>
                                <div className='flex items-center gap-3 mt-5'>
                                    <img src={Pointer} alt="Pointer" />
                                    <h3 className='font-normal text-[16px] text-[#282938]'>Assist and Help</h3>
                                </div>
                                <button className='mt-20 py-4 px-14 rounded-full bg-[#282938] font-semibold text-[18px] text-[#F4F6FC]'>Contact us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing
