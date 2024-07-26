"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import HoverBorderGradient from './ui/gradientBorder'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";

const HeroSection1 = () => {
    gsap.registerPlugin(ScrollTrigger);
    const fullText = "Lorem ipsum dolor sit amet consectetur, dejwoie kndoiew ouw er";
    // const fullText2 = "Lorem ipsum dolor sit,";
    const [displayedText, setDisplayedText] = useState('');
    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.brefContainer',
                start: 'top top',
                end: "+=1500px",
                pin: true,
                markers: true,
                scrub: true,
                onUpdate: self => {
                    const progress = self.progress * 2;
                    const length = Math.round(progress * fullText.length);
                    setDisplayedText(fullText.substring(0, length));
                }
            }
        })
    })
    return (
        <div className='pt-16 flex flex-col justify-center items-center'>
            <div className='flex justify-evenly items-center w-[90%]'>
                <h1 className='text-[10vw] font-[700] text-black relative w-[48vw] heroSectionH1'>
                    <div className="boxDesign w-[40px] h-[45px] right-[48%]  bg-[#9612A3] absolute">

                    </div >
                    <span className='text-[#9612A3] pr-6'>WEB</span>
                    AI,
                    <div className='-mt-[80px]'>
                        CREATOR
                    </div>
                </h1>
                {/* <div className='border border-gray-300'></div> */}
                <div className='w-[350px] flex gap-6'>
                    <Image src={"https://images.unsplash.com/photo-1717501218636-a390f9ac5957?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFpfGVufDB8fDB8fHww"} width={200} height={700} className='h-[54vh] w-[20vw]' />
                    <div className="p-3  h-[150px] sideLogoSection">
                        <h1 className='w-[100px] h-[150px] sideLogoSection text-black'>
                            <div className="logo">
                                <Image src={'/image1.png'} width={200} height={200} />
                            </div>
                            <div className="font-[500] text-center text-xl pt-7">
                                Dora AI.
                            </div>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="w-[100%] h-[36vh] overflow-hidden flex gap-3">
                <Image src={'https://images.unsplash.com/photo-1721066115321-eb0eec055296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8fDA%3D'} width={500} height={500} className='w-[66vw] h-[500px]' />
                <div className='w-[120px] h-[120px] bg-[#9612A3] mt-3 text-center  p-3 font-[300] flex flex-col items-centerjustify-center white-box'>
                    TRY FOR FREE
                    <Image src={'https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/arrow_hover.svg'} width={25} height={25} className='w-[25px] h-[25px] m-5 ml-8 ' />
                </div>
                <div className="relative">
                    <div className="absolute top-[150px]">
                        <HoverBorderGradient
                            className={'w-[150px]'}
                        >
                            Get Started
                        </HoverBorderGradient>
                    </div>
                </div>
            </div>
            <div className="brefContainer text-black">
                <div className="">
                    <div>Bref Intro</div>
                    <div className="">
                        
                    </div>
                </div>
                <div className='w-[100vw] p-10 mt-20'>
                    <div className='text-7xl px-10 font-[200]'>
                        {displayedText}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection1
