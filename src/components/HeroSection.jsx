import React, { useRef } from 'react';
import { Meteors } from './ui/meteros';
import { PlaceholdersAndVanishInput } from './ui/placeholder';
import Image from 'next/image';

const HeroSection = () => {
    const placeholders = [
        "What's the first rule of Fight Club?",
        "Who is Tyler Durden?",
        "Where is Andrew Laeddis Hiding?",
        "Write a Javascript method to reverse a string",
        "How to assemble your own PC?",
    ];

    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Reset the video to the beginning
        }
    };

    const handleChange = (e) => {
        console.log(e.target.value);
    };
    
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
    };
    
    return (
        <div className='h-[100vh] flex flex-col justify-center items-center relative'>
            <div className="textSectionInHero text-6xl font-[700] w-[800px] text-center">
                Sites beyond imagination, one prompt away.
            </div>
            <div className="mt-10 w-[600px]">
                <PlaceholdersAndVanishInput
                    placeholders={placeholders}
                    onChange={handleChange}
                    onSubmit={onSubmit}
                />
            </div>
            <div 
                className='w-[200px] flex mt-10 showVideo relative'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Image src={'/play.png'} height={30} width={30} alt="Play Icon" />
                <div className='ml-3 text-white text-xl'>
                    Watch the video
                </div>
                <div className="hiddenVideo absolute top-0 left-0 w-full h-full">
                    <video 
                        ref={videoRef} 
                        loop 
                        muted 
                        className='w-[300px] h-[300px] absolute z-[10000]'
                    >
                        <source src='https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/pipeline/1.mp4' />
                    </video>
                </div>
            </div>
            <Meteors />
        </div>
    );
}

export default HeroSection;
