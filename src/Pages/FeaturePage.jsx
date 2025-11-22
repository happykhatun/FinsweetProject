import React from 'react'
import FeatureBannar from "../assets/FeatureBannar.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import icon6 from "../assets/icon6.png";
import icon3 from "../assets/icon3.png";
import icon1 from "../assets/icon1.png";
import manexplaining from "../assets/manexplaining.png";
import manholdingbook from "../assets/manholdingbook.png";
import Amanworking from "../assets/Amanworking.png";
import personusingmacbook from "../assets/personusingmacbook.png";

const FeaturePage = () => {
  return (
    <>
      <div className='bg-[#1C1E53] py-32'>
        <div className='container '>
          <div className='flex justify-between'>
            <div className='w-[582px]'>
              <h1 className='text-white text-[54px] leading-[74px] font-semibold'>All the features<span className='block'> you need</span></h1>
              <p className='text-white font-medium text-[16px] mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className='mt-8 py-4 px-14 rounded-full bg-[#FCD980] font-semibold text-[18px] text-[#282938]'>View Pricing</button>
            </div>
            <div>
              <img src={FeatureBannar} alt="FeatureBannar" />
            </div>
          </div>
        </div>
      </div>
      <div className='py-24'>
        <div className='container'>
          <div className='flex justify-between  items-center'>
            <div>
              <h3 className='font-semibold text-[38px] text-[#282938]'>100.000+</h3>
              <p className='font-normal text-[16px] text-gray-500'>Finsweet Users</p>
            </div>
            <div>
              <img src={logo1} alt="logo1" />
            </div>
            <div>
              <img src={logo2} alt="logo2" />
            </div>
            <div>
              <img src={logo3} alt="logo3" />
            </div>
            <div>
              <img src={logo4} alt="logo4" />
            </div>
            <div>
              <img src={logo5} alt="logo5" />
            </div>
          </div>
        </div>
      </div>
      <div className='pb-24'>
        <div className='container'>
          <h2 className='text-center text-[48px] font-semibold text-[#282938] leading-16'>The benefits of working<br /> with us</h2>
          <div className='flex gap-4 mt-12'>
            <div className='bg-[#EEF4FA] p-8 transition-all duration-500 cursor-pointer hover:scale-105 '>
              <img src={icon6} alt="icon6" />
              <h4 className='text-[24px] text-[#282938] font-normal'>Customize with ease</h4>
              <p className='font-normal text-[#282938] mt-3'>Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna<br /> aliqua ut enim.</p>
            </div>
            <div className='bg-[#EEF4FA] p-8 transition-all duration-500 cursor-pointer hover:scale-105 '>
              <img src={icon3} alt="icon3" />
              <h4 className='text-[24px] text-[#282938] font-normal'>Uses Client First</h4>
              <p className='font-normal text-[#282938] mt-3'>Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna<br /> aliqua ut enim. </p>
            </div>
            <div className='bg-[#EEF4FA] p-8  transition-all duration-500 cursor-pointer hover:scale-105 '>
              <img src={icon1} alt="icon1" />
              <h4 className='text-[24px] text-[#282938] font-normal'>Uses Client First</h4>
              <p className='font-normal text-[#282938] mt-3'>Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna<br /> aliqua ut enim. </p>
            </div>
          </div>
        </div>
      </div>
      <div className='pb-24'>
        <div className='container'>
          <div className='flex justify-between'>
            <div>
              <h3 className='font-medium text-[#000000] text-[18px]'>Use Client-first</h3>
              <h2 className='text-[38px] font-semibold text-[#232536] mt-4 leading-14'>Top agencies and freelancers<br /> around the world use<br />
                Client-first </h2>
              <p className='text-[16px] font-normal text-gray-500 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim<br /> veniam, quis nostrud exercitation.</p>
            </div>
            <div>
              <img src={manexplaining} alt='manexplaining' className='w-[460px] h-[330px]' />
            </div>

          </div>

        </div>
      </div>
      <div className='bg-[#F4F6FC] py-24'>
        <div className='container'>
          <div className='flex justify-between items-center'>
            <div>
              <img src={manholdingbook} alt="manholdingbook" className='h-[330px] w-[460px]' />
            </div>
            <div>
              <h3 className='font-medium text-[#000000] text-[18px]'>Free Revision Rounds</h3>
              <h2 className='text-[38px] font-semibold text-[#232536] mt-4 leading-14'>Get free Revisions and one week<span className='block'> of free maintenance</span></h2>
              <p className='text-[16px] font-normal text-gray-500 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim<br /> veniam.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='py-24'>
        <div className='container'>
          <div className='flex justify-between items-center'>
            <div>
              <h3 className='font-medium text-[#000000] text-[18px]'>24/7 Support</h3>
              <h2 className='text-[38px] font-semibold text-[#232536] mt-4 leading-14'>Working with us, you will be<span className='block'> getting 24/7 priority support</span></h2>
              <p className='text-[16px] font-normal text-gray-500 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim<br /> veniam.</p>
            </div>
            <div>
              <img src={Amanworking} alt="Amanworking" className='h-[330px] w-[460px]' />
            </div>
          </div>
        </div>
      </div>
      <div className='py-24 bg-[#FCD9801A]'>
        <div className='container'>
          <div className='flex justify-between items-center'>
            <div>
              <img src={personusingmacbook} alt="personusingmacbook" className='h-[330px] w-[460px]' />
            </div>
            <div>
              <h3 className='font-medium text-[#000000] text-[18px]'>Quick Delivery</h3>
              <h2 className='text-[38px] font-semibold text-[#232536] mt-4 leading-14'>Guranteed 1 week delivery for<span className='block'> standard five pager website</span></h2>
              <p className='text-[16px] font-normal text-gray-500 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim<br /> veniam.</p>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default FeaturePage
