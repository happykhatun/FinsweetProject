import React from 'react'

const ContactUs = () => {
    return (
        <>
            <div className='py-32'>
                <div className='container'>
                    <h2 className='font-semibold text-[48px] text-[#282938] text-center'>Contact Us</h2>
                    <p className='text-[16px] font-normal text-gray-500 mt-4 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore.</p>
                    <div className='bg-[#F4F6FC] p-16 mt-16 rounded-2xl'>
                        <div className='grid grid-cols-2 gap-8'>
                            <div className='flex flex-col'>
                                <label className='font-normal text-[18px] text-[#000000]'>Name</label>
                                <input type='text' placeholder='Enter your name' className='bg-transparent border border-gray-400 rounded-md px-4 py-3 text-sm placeholder-[#000000] text-black hover:placeholder-gray-400 hover:border-[#1d12ec] mt-2 focus:outline-none' />
                            </div>
                            <div className='flex flex-col'>
                                <label className='font-normal text-[18px] text-[#000000]'>Email</label>
                                <input type='email' placeholder='Enter your Email' className='bg-transparent border border-gray-400 rounded-md px-4 py-3 text-sm placeholder-[#000000] mt-2 text-black focus:outline-none  hover:placeholder-gray-400 hover:border-[#1d12ec]' />
                            </div>
                            <div className='flex flex-col'>
                                <label className='font-normal text-[18px] text-[#000000]'>Subject</label>
                                <input type='text' placeholder='Provide context' className='bg-transparent border border-gray-400 rounded-md px-4 py-3 text-sm placeholder-[#000000] mt-2 text-black focus:outline-none hover:placeholder-gray-400 hover:border-[#1d12ec]' />
                            </div>
                            <div className='flex flex-col'>
                                <label className='font-normal text-[18px] text-[#000000]'>Subject</label>
                                <input type='text' placeholder='Select Subject' className='bg-transparent border border-gray-400 rounded-md px-4 py-3 text-sm placeholder-[#000000] mt-2  text-black focus:outline-none  hover:placeholder-gray-400 hover:border-[#1d12ec] ' />
                            </div>
                        </div>
                        <div className='flex flex-col mt-4'>
                            <label className='font-normal text-[18px] text-[#000000]'>Message</label>
                            <input type='text' placeholder='Write your  question here' className='bg-transparent border border-gray-400 rounded-md py-12 px-4 text-sm placeholder-[#000000] mt-2  text-black focus:outline-none  hover:placeholder-gray-400 hover:border-[#1d12ec] ' />
                        </div>
                        <button className='py-4 px-14 rounded-full bg-[#282938] font-semibold text-[18px] text-[#F4F6FC] mt-8 '>Send Messege</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs
