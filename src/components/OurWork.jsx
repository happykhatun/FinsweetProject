import React from 'react'
import card1 from "../assets/card1.png"
import card2 from "../assets/card2.png"
import card3 from "../assets/card3.png"
import { FaArrowRightLong } from "react-icons/fa6";



const OurWork = () => {
    return (
        <>
            <div className='py-32'>
                <div className='container font-poppins'>
                    <div className='flex  items-center justify-between '>
                        <h2 className='text-[#282938] font-semibold text-[48px]  '>View our projects</h2>
                        <div className='flex items-center gap-4'>
                            <span className=' text-[#282938] font-medium'>View More  </span><FaArrowRightLong className='text-[#282938]' />
                        </div>
                    </div>
                    <div className='flex gap-8 mt-16'>
                        <img src={card1} alt="card1" className='w-[700px] after::hover'/>
                        <div className=' grid gap-8'>
                            <img src={card2} alt="card2" />
                            <img src={card3} alt="card3" />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default OurWork
