import React from 'react'
import { FloatingNav } from './ui/FloatingNavbar'
// import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FaHome, FaPhone, FaUser } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/MovingBorder';

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
        <div className='navbar h-[100px] flex justify-center items-center px-10'>
            {/* <FloatingNav navItems={navItems} /> */}

            <div className="flex justify-between w-full">
                <Image src={'/image1.png'} className="logo w-[70px] h-[70px] rounded-full
            " width={20} height={20} />
                <div className="linkSection border border-gray-500 flex justify-center items-center rounded-full ">
                    <ul className='flex justify-center items-center h-[70px]'>
                        <li className=' px-5 text-white text-xl flex justify-center items-center'>Home </li>
                        <li className=' px-5 text-white text-xl flex justify-center items-center'>Features </li>
                        <li className=' px-5 text-white text-xl flex justify-center items-center'>  Roadmap </li>
                        <li className=' px-5 text-white text-xl flex justify-center items-center'> FAQ </li>
                        <li className=' px-5 text-white text-xl flex justify-center items-center'> About Dora </li>
                    </ul>
                </div>
                <div className="button1">
                    <Button
                        borderRadius="1.75rem"
                        className="border-neutral-500 dark:border-slate-800 p-3 text-xl bg-gradient-to-r from-[#9612A3] via-[#9612A3] to-sky-700"
                    >
                        Get Started
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar


// .hover\:shadow-\[0_0px_20px_0px_\#FFFFFF_inset\]:hover {
// --tw-shadow: 0 0px 20px 0px #fff inset;
// --tw-shadow-colored: inset 0 0px 20px 0px var(--tw-shadow-color);
// box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);