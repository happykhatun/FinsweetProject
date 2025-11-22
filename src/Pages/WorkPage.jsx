import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Image1 from "../assets/Image1.png";
import Image2 from "../assets/Image2.png";
import Image3 from "../assets/Image3.png";
import Image4 from "../assets/Image4.png";
import Image5 from "../assets/Image5.png";
import Image6 from "../assets/Image6.png";
import { FaArrowRightLong } from 'react-icons/fa6';




const WorkPage = () => {
  return (
    <>
      <div className='py-24 bg-[#F4F6FC]'>
        <div className='container'>
          <div className='text-center'>
            <h4 className='text-[16px] font-medium text-gray-500'>What we created</h4>
            <h2 className='text-[48px] font-semibold text-[#282938]'>Our Work Portfolio</h2>
            <p className='text-[16px] font-normal text-gray-500 mt-6'>We help teams create great digital products by providing them with tools and technology<br /> to make the design-to-code process universally accessible.</p>

            <div className='flex justify-center mt-8 gap-6'>
              <a href='#' className='h-[2] w-[2] bg-black text-white p-2 rounded-full  hover:bg-[#131d8e] transition-all duration-300 hover:scale-110'><FaFacebookF /></a>
              <a href='#' className='h-[4] w-[4] bg-black text-white p-2 rounded-full  hover:bg-[#131d8e] transition-all duration-300 hover:scale-110'><FaTwitter /></a>
              <a href='#' className='h-[4] w-[4] bg-black text-white p-2 rounded-full  hover:bg-[#131d8e] transition-all duration-300 hover:scale-110'><FaInstagram /></a>
              <a href='#' className='h-[4] w-[4] bg-black text-white p-2 rounded-full  hover:bg-[#131d8e] transition-all duration-300 hover:scale-110'><FaLinkedinIn /></a>
            </div>
          </div>


        </div>
      </div>
      <div className='py-24'>
        <div className='container'>
          <div>
            <ul className='flex justify-center gap-8'>
              <li>All</li>
              <li>UI Design</li>
              <li>Webflow Design</li>
              <li>Figma Design</li>
            </ul>
            <div className='grid grid-cols-2 gap-8 mt-12 '>
              <div>
                <img src={Image1} alt="Image" />
                <h2 className='font-semibold text-[38px] text-[#282938] mt-6'>Template 1</h2>
                <p className='text-[16px] text-gray-500 font-normal mt-3'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                <a href='#' className='flex items-center gap-4 mt-6 font-medium text-[#282938] text-[16px]'>View Portfolio  <FaArrowRightLong /></a>
              </div>
              <div>
                <img src={Image2} alt="Image" />
                <h2 className='font-semibold text-[38px] text-[#282938] mt-6' >Template 2</h2>
                <p className='text-[16px] text-gray-500 font-normal mt-3'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                <a href='#' className='flex items-center gap-4 mt-6 font-medium text-[#282938] text-[16px]'>View Portfolio  <FaArrowRightLong /></a>
              </div>
              <div>
                <img src={Image3} alt="Image" />
                <h2 className='font-semibold text-[38px] text-[#282938] mt-6'>Template 3</h2>
                <p className='text-[16px] text-gray-500 font-normal mt-3'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                <a href='#' className='flex items-center gap-4 mt-6 font-medium text-[#282938] text-[16px]'>View Portfolio  <FaArrowRightLong /></a>
              </div>
              <div>
                <img src={Image4} alt="Image" />
                <h2 className='font-semibold text-[38px] text-[#282938] mt-6'>Template 4</h2>
                <p className='text-[16px] text-gray-500 font-normal mt-3'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                <a href='#' className='flex items-center gap-4 mt-6 font-medium text-[#282938] text-[16px]'>View Portfolio  <FaArrowRightLong /></a>
              </div>
              <div>
                <img src={Image5} alt="Image" />
                <h2 className='font-semibold text-[38px] text-[#282938] mt-6'>Template 5</h2>
                <p className='text-[16px] text-gray-500 font-normal mt-3'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                <a href='#' className='flex items-center gap-4 mt-6 font-medium text-[#282938] text-[16px]'>View Portfolio  <FaArrowRightLong /></a>
              </div>
              <div>
                <img src={Image6} alt="Image" />
                <h2 className='mt-6 font-semibold text-[#282938] text-[38px]'>Template 6</h2>
                <p className='text-[16px] text-gray-500 font-normal mt-3'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.</p>
                <a href='#' className='flex items-center gap-4 mt-6 font-medium text-[#282938] text-[16px]'>View Portfolio  <FaArrowRightLong /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-32'>
        <div className='container text-center'>
          <h2 className='text-[48px] font-semibold text-[#282938] leading-16'>Let's build something great<br/> together</h2>
          <p className='text-[16px] text-gray-500 font-normal mt-5'>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies<br/> nec dolor sit amet, scelerisque cursus purus.</p>
          <button className='mt-10 py-4 px-14 rounded-full bg-[#FCD980] font-semibold text-[18px] text-[#1B1C2B]'>Contact Us</button>



        </div>
      </div>

    </>
  )
}

export default WorkPage
