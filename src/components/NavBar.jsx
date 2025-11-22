import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';


const NavBar = () => {

    return (
        <nav className='bg-[#1C1E53] font-poppins'>
            <div className='container flex justify-between items-center py-5 '>
                <div className=''>
                    <img src={logo} alt="logo" />
                </div>
                <ul className='flex gap-8 text-[#BBBBCB] cursor-pointer '>
                    <Link to="/"> <li className='hover:text-white'>Home</li></Link>
                    <Link to="/About"> <li className='hover:text-white'>About us</li></Link>
                    <Link to="/FeaturePage"> <li className='hover:text-white'>Features</li></Link>
                    <Link to="/Pricing"> <li className='hover:text-white'>Pricing</li></Link>
                    <Link to="/PrivacyPolicy"><li className='hover:text-white'>FAQ</li></Link>
                    <Link to="/BlogPage"> <li className='hover:text-white'>Blog</li></Link>
                </ul>
                <Link to="/ContactUs"> <button className='py-4 px-10 rounded-full border border-white text-white cursor-pointer hover:scale-105 hover:transition-all duration-300 hover:text-gray-400'>Contact us</button></Link>
            </div>
        </nav>
    )
}

export default NavBar
