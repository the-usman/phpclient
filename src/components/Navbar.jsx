import React from 'react'
import { FloatingNav } from './ui/FloatingNavbar'
// import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FaHome, FaPhone, FaUser } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/MovingBorder';
import { HoverBorderGradient } from './ui/gradientBorder';

const Navbar = () => {
    const navItems = [
        {
            name: "Home",
            link: "/",
            icon: <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "About",
            link: "/about",
            icon: <FaUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Contact",
            link: "/contact",
            icon: (
                <FaPhone className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
    ];
    return (
        <div className='navbar h-[100px] lg:backdrop-blur-0 backdrop-blur-md flex justify-center items-center px-10 ' style={{zIndex: 99999999}} >
            {/* <FloatingNav navItems={navItems} /> */}

            <div className="flex justify-between w-full">
                <Image src={'/image1.png'} className="logo w-[60px] h-[60px] rounded-full
            " width={20} height={20} />
                <div className="linkSection hidden lg:flex backdrop-blur-md  border border-gray-500  justify-center items-center rounded-full ">
                    <ul className='flex justify-center items-center h-[50px]'>
                        <li className=' px-5 text-white text-xl flex justify-center items-center'>Home </li>
                        <li className=' px-5 text-white text-xl flex justify-center items-center'>Features </li>
                        <li className=' px-5 text-white text-xl flex justify-center items-center'>  Roadmap </li>
                        <li className=' px-5 text-white text-xl flex justify-center items-center'> FAQ </li>
                        <li className=' px-5 text-white text-xl flex justify-center items-center'> About Dora </li>
                    </ul>
                </div>
                <div className="button1">
                    <HoverBorderGradient
                        className={'w-[150px] bg-gradient-to-r from-[#9612A3] via-[#9612A3] to-sky-700'}
                    >
                        Get Started
                    </HoverBorderGradient>
                </div>
            </div>
        </div>
    )
}

export default Navbar
