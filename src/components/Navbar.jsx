"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { HoverBorderGradient } from './ui/gradientBorder';

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='navbar h-[100px] flex justify-center items-center px-10' style={{ zIndex: 99999999 }}>
            <div className="flex justify-between w-full">
                <Image 
                    src={'/image1.png'} 
                    className="logo w-[60px] h-[60px] rounded-full"
                    width={20} 
                    height={20} 
                    alt="Logo"
                />
                <div className={`${isScroll ? "bglinks" : ""} linkSection hidden lg:flex backdrop-blur-md border border-gray-500 justify-center items-center rounded-full`}>
                    <ul className='flex justify-center items-center h-[50px]'>
                        <li className='px-5 links text-white text-xl flex justify-center items-center'>Home</li>
                        <li className='px-5 links text-white text-xl flex justify-center items-center'>Features</li>
                        <li className='px-5 links text-white text-xl flex justify-center items-center'>FAQ</li>
                        <li className='px-5 links text-white text-xl flex justify-center items-center'>About US</li>
                    </ul>
                </div>
                <div className="button1">
                    <HoverBorderGradient
                        className={'w-[150px]'}
                    >
                        Get Started
                    </HoverBorderGradient>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
