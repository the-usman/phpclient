import React from 'react'
import Section4 from '../Features/seaction4'
import { animationArray } from '@/lib/animationArray'
import { PlaceholdersAndVanishInput } from '../ui/placeholder'
import Image from 'next/image'
import HeroSection from '../HeroSection'

const Section1 = () => {
    const placeholders = [
        "What's the first rule of Fight Club?",
        "Who is Tyler Durden?",
        "Where is Andrew Laeddis Hiding?",
        "Write a Javascript method to reverse a string",
        "How to assemble your own PC?",
    ];


    const handleChange = (e) => {
        console.log(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
    };
    return (
        <div className='h-[120vh]'>
            <div className=' h-[120vh] flex flex-col justify-center items-center relative text-white ' style={{ zIndex: 99999 }}>
                <HeroSection />
            </div>
            <Section4 />
        </div>
    )
}

export default Section1
