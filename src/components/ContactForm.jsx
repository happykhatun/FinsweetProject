import React from 'react'
import bacground from "../assets/bacground.png";
import bacgroundimg from "../assets/bacgroundimg.png";
import { FaArrowRightLong } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <>
      <div className='py-32'>
        <div className='container flex justify-between '>
          <div>
            <div className='relative'>
              <img src={bacground} alt="bacground" className='w-[600px] h-[570px]' />
              <img src={bacgroundimg} alt="bacgroundimg" className='absolute top-0 left-0 w-[600px] h-[570px]' />
              <div className='absolute top-0 left-0 text-white p-20'>
                <h2 className='text-[54px] font-semibold leading-16'>Building stellar websites for early startups</h2>
                <p className='text-[16px] font-medium mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
              </div>
            </div>

          </div>
          <div className='bg-[#1C1E53] h-[570px] w-[600px] items-center p-10'>
            <h3 className='font-normal text-[32px] text-white'>Send inquiry</h3>
            <p className='text-[16px] font-medium text-white mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit, sed do eiusmod tempor incididunt ut labore.</p>
            <form className='flex flex-col mt-10 gap-4 '>
              <input type="text" placeholder='Your Name' className='bg-transparent border border-gray-600 rounded-md px-4 py-3 text-sm placeholder-gray-400 text-white focus:outline-none focus:border-yellow-400' />
              <input type='email' placeholder='Email' className='bg-transparent border border-gray-600 rounded-md px-4 py-3 text-sm placeholder-gray-400 text-white focus:outline-none focus:border-yellow-400' />
              <input type='text' placeholder='Paste your Figma design URL' className='bg-transparent border border-gray-600 rounded-md px-4 py-3 text-sm placeholder-gray-400 text-white focus:outline-none focus:border-yellow-400' />
              <button className='py-4 px-14 rounded-full bg-[#FCD980] font-semibold text-[18px] text-[#1B1C2B] mt-10'>Send an Inquiry</button>
              <a href="#" className='text-white font-medium text-[18px] flex items-center gap-4 ml-32'>Get in touch with us <FaArrowRightLong /></a>
            </form>

          </div>
        </div>
      </div>

    </>
  )
}

export default ContactForm

