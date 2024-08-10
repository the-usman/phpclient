import React from 'react'
import { ContainerScroll } from '../ui/scroll-animation';
import Image from 'next/image';
import CardSlider from '../ui/Card-slider';
import { GlareCard } from '../ui/glare-card';
import { Cover } from '../ui/Cover';
import { CardSpotlight } from '../ui/card-spotlight';
import { CardDemo } from '../ui/compareCard';


const Step = ({ title }) => {
    return (
        <li className="flex gap-2 items-start">
            <CheckIcon />
            <p className="text-white">{title}</p>
        </li>
    );
};

const CheckIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
                fill="currentColor"
                strokeWidth="0"
            />
        </svg>
    );
};

const Section5 = () => {

    return (
        <div className='h-[120vh]'>
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                Build amazing websites <br /> at <Cover>warp speed</Cover>
            </h1>
            <div className='flex'>
                <div className='flex flex-col justify-center items-center w-[50%] '>
                    <h1 className='text-2xl font-extrabold mb-10'>Step 1. Create Account</h1>
                    <CardSpotlight className="h-96 w-96">
                        <p className="text-xl font-bold relative z-20 mt-2 text-white">
                            Authentication steps
                        </p>
                        <div className="text-neutral-200 mt-4 relative z-20">
                            Follow these steps to secure your account:
                            <ul className="list-none  mt-2">
                                <Step title="Enter your email address" />
                                <Step title="Create a strong password" />
                                <Step title="Set up two-factor authentication" />
                                <Step title="Verify your identity" />
                            </ul>
                        </div>
                        <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                            Ensuring your account is properly secured helps protect your personal
                            information and data.
                        </p>
                    </CardSpotlight>
                </div>
                <div className='flex flex-col justify-center items-center w-[50%] '>
                    <h1 className='text-2xl font-extrabold mb-10'>Step 2. Compare our performance</h1>
                    <CardDemo />
                </div>
            </div>
        </div>
    )
}



export default Section5