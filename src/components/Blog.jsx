import React from 'react'
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import { FaArrowRightLong } from "react-icons/fa6";



const Blog = () => {
  return (
    <>
      <div className='py-32'>
        <div className='container font-poppins'>
          <h2 className='text-[48px] font-semibold'>Our blog</h2>
          <div className='grid grid-cols-3 mt-16 gap-4 '>
            <div className=' bg-white  p-4'>
              <img src={blog1} alt="blog1" />
              <h3 className='text-[16px] text-gray-500 font-medium mt-10'>19 Jan 2022</h3>
              <p className='text-[24px] font-normal text-[#282938] '>How one Webflow user grew his single person consultancy from $0-100K in 14 months</p>
              <p className='text-[16px] font-normal text-gray-500 mt-4'>See how pivoting to Webflow changed one<br /> person’s sales strategy and allowed him to attract</p>
              <div>
               <a href='#'  className='flex items-center gap-4 text-[16px] font-medium cursor-pointer mt-8'>Read More <FaArrowRightLong/></a>
              </div>

            </div>
            <div className=' bg-white p-4'>
              <img src={blog2} alt="blog2" />
              <h3 className='text-[16px] text-gray-500 font-medium mt-10'>19 Jan 2022</h3>
              <p className='text-[24px] font-normal text-[#282938]'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</p>
              <p className='text-[16px] font-normal text-gray-500 mt-4'>See how pivoting to Webflow changed one<br /> person’s sales strategy and allowed him to attract</p>
              <div>
                <a href='#' className='flex items-center gap-4 text-[16px] font-medium mt-8'> Read More <FaArrowRightLong/> </a>
              </div>

            </div>
            <div className=' bg-white p-4'>
              <img src={blog3} alt="blog3" />
              <h3 className='text-[16px] text-gray-500 font-medium mt-10'>19 Jan 2022</h3>
              <p className='text-[24px] font-normal text-[#282938]'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</p>
              <p className='text-[16px] font-normal text-gray-500 mt-4'>See how pivoting to Webflow changed one<br /> person’s sales strategy and allowed him to attract</p>
              <div className=''>
                <a href='#' className='flex items-center gap-4 text-[16px] font-medium mt-8'>Read More <FaArrowRightLong/></a>
              </div>

            </div>
          </div>



        </div>
      </div>

    </>
  )
}

export default Blog
