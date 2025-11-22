import React from 'react'
import peopleworking from "../assets/peopleworking.png";
import photoofpeople from "../assets/photoofpeople.png";

const ReadBlog = () => {
  return (
    <>
      <div className='py-32'>
        <div className='container flex flex-col items-center'>
          <div className='text-center'>
            <h2 className='font-semibold text-[48px] text-[#282938] leading-16'>A UX Case Study on Creating a<br /> Studious Environment for Students</h2>
            <h4 className='font-medium text-[16px] text-[#282938] mt-4'>Andrew Jonson
              Posted on 27th January 2021</h4>
            <img src={peopleworking} alt="peopleworking" className='mt-8' />
          </div>

          <div className='w-[750px] items-center mt-12'>
            <h2 className='font-semibold text-[38px] text-[#282938]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <p className='font-normal text-[16px] text-gray-500 mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur.<span className='text-[#2405F2]'> Excepteur sint occaecat cupidatat</span> non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h2 className='font-semibold text-[38px] text-[#282938] mt-10'>Ut enim ad minim veniam, quis nostrud.
            </h2>
            <p className='font-normal text-[16px] text-gray-500 mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat<span className='text-[#2405F2]'> cupidatat non</span> proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <ul className='font-normal text-[16px] text-gray-500 mt-6 ml-5'>
              <li className='list-disc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
              <li className='list-disc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
              <li className='list-disc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
            </ul>
            <p className='font-normal text-[16px] text-gray-500 mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud<span className='text-[#2405F2]'> exercitation ullamco </span>laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img src={photoofpeople} alt="photoofpeople" className='mt-8' />
            <h2 className='font-semibold text-[38px] text-[#282938] mt-14'>Ut enim ad minim veniam, quis nostrud.
            </h2>
            <p className='font-normal text-[16px] text-gray-500 mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis
              nostrud<span className='text-[#2405F2]'> exercitation ullamco</span> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReadBlog
