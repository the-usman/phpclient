"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import HoverBorderGradient from './ui/gradientBorder'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import { CardBody, CardContainer, CardItem } from './ui/TDCard'
import Features1 from './Features/Features1'
import { animationArray } from '@/lib/animationArray'
import { PlaceholdersAndVanishInput } from './ui/placeholder'
import Marquee from './Marquree'
import HeaderLine from './ui/HeaderLine'

const HeroSection1 = () => {
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
    gsap.registerPlugin(ScrollTrigger);
    const fullText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vel nisi sunt beatae off";
    // const fullText2 = "Lorem ipsum dolor sit,";
    const [displayedText, setDisplayedText] = useState('');
    const ref = useRef(null);
    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.brefContainer',
                start: 'top top',
                end: 'top top',
                end: "+=1500px",
                pin: true,
                // markers: true,
                scrub: true,
                onUpdate: self => {
                    const progress = self.progress * 2;
                    const length = Math.round(progress * fullText.length);
                    setDisplayedText(fullText.substring(0, length));
                    if (progress >= 1) {
                        ref.current.style.height = "100px"
                    }
                },

            }
        })
    })
    return (
        <div className=' flex flex-col justify-center items-center '>
            <div className="hero h-[900px]">
                <div class="hero-content">
                    <a href="#ai" class="hero-badge">
                        <Image src={'/shinging.svg'} width={40} height={40} />
                        <div class="hero-badge-text">
                            New: Our AI Generated Websites
                        </div>
                    </a>
                    <div class="section-header" >
                        <h1 class="section-header-title section-header-title-h1 text-6xl mb-5 font-[700]" >
                            <div class="section-header-title-desktop">
                                <span >Think better with Reflect</span>
                            </div>
                        </h1>
                    </div>
                    <p class="hero-description">Never miss a note, idea or connection.</p>
                </div>
                <div className="hero-black-hole hero-black-hole-visible" onQvisible="q-9622af32.js#_hW[0]" qKey="WN_3" qId="p">
                    <div  onQvisible="q-e0c1df55.js#_hW[0]" qKey="e2_0" qId="r">
                        <video preload="false" autoPlay muted loop qId="s" src="https://reflect.app/home/build/q-c3d7becf.webm"></video>
                    </div>
                    <div className="hero-black-hole-circles" qKey="WN_2">
                        <div qKey="0">
                            <div className="hero-black-hole-circle hero-black-hole-circle-0" qKey="kf_1" qId="u">
                                {[...Array(8)].map((_, index) => (
                                    <div
                                        className="hero-black-hole-circle-dot"
                                        onMouseEnter={() => {
                                            // JavaScript function for onMouseEnter event
                                        }}
                                        qKey={index.toString()}
                                        qId={String.fromCharCode(118 + index)}
                                        key={index}
                                    ></div>
                                ))}
                            </div>
                        </div>
                        <div qKey="1">
                            <div className="hero-black-hole-circle hero-black-hole-circle-1" qKey="kf_1" qId="14">
                                {[...Array(8)].map((_, index) => (
                                    <div
                                        className="hero-black-hole-circle-dot"
                                        onMouseEnter={() => {
                                            // JavaScript function for onMouseEnter event
                                        }}
                                        qKey={index.toString()}
                                        qId={index < 9 ? `1${String.fromCharCode(53 + index)}` : `1${String.fromCharCode(97 + index - 10)}`}
                                        key={index}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="hero-black-hole-stars">
                        {animationArray.map((star, index) => (
                            <div
                                key={index}
                                style={{
                                    animationDuration: `${star.duration}s`,
                                    animationDelay: `${star.delay}s`,
                                    top: `${star.top}%`,
                                    left: `${star.left}%`,
                                    transform: star.transform,
                                }}
                                qKey={index.toString()}
                            ></div>
                        ))}
                    </div>

                </div>
                <div className="relative">

                    <div className="bgBackDropDiv w-[1000px] flex flex-col items-center h-[400px] pt-10 mt-[240px]" style={{ zIndex: 99990 }}>

                        <div className="w-[600px]">
                            <PlaceholdersAndVanishInput
                                placeholders={placeholders}
                                onChange={handleChange}
                                onSubmit={onSubmit
                                }
                            />
                        </div>

                    </div>
                </div>
            </div>
            <Marquee />
            <div className="brefContainer text-white h-[1500px]" ref={ref}>
                <HeaderLine text={"Bref Intro."} />

                <div className="">
                    <div className='w-[100vw] p-10 text-white'>
                        <div className='text-7xl px-10 font-[200]'>
                            {displayedText}
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex">
                            <CardContainer className="inter-var -mt-20 sideCards" isScale={true}>
                                <CardBody className="relative group/card  hover:shadow-7xl  border-white/[0.5] w-[400px] h-[350px] rounded-xl p-6 border shadow-[#F7D8FF]  ">
                                    <CardItem
                                        translateZ="50"
                                        className="text-2xl font-bold text-neutral-200 text-center flex justify-center"
                                    >
                                        <div>
                                            AI Web React
                                        </div>
                                    </CardItem>
                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className=""
                                    >

                                    </CardItem>
                                    <CardItem translateZ="100" className="w-full mt-4">
                                        <Image
                                            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            height="200"
                                            width="200"
                                            className="h-[200px] w-[200px] object-cover group-hover/card:shadow-xl rounded-full"
                                            alt="thumbnail"
                                        />
                                    </CardItem>
                                    <div className="flex justify-between items-center mt-5">

                                        <CardItem
                                            translateZ={20}

                                            className="px-4 py-2 rounded-xl  dark:text-black text-white text-xs font-bold"
                                        >
                                            <div className="ml-[85px]">
                                                <HoverBorderGradient
                                                    className={'w-[150px] ml-[cal(50% - 75px)]'}
                                                >
                                                    Get Started
                                                </HoverBorderGradient>
                                            </div>
                                        </CardItem>
                                    </div>
                                </CardBody>
                            </CardContainer>

                            <CardContainer className="inter-var -mt-20">
                                <CardBody className="relative group/card  hover:shadow-4xl  border-white/[0.5] w-[400px] h-[350px] rounded-xl p-6 border   ">
                                    <CardItem
                                        translateZ="50"
                                        className="text-2xl font-bold text-neutral-200 text-center flex justify-center"
                                    >
                                        <div>
                                            AI Web React
                                        </div>
                                    </CardItem>
                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className=""
                                    >

                                    </CardItem>
                                    <CardItem translateZ="100" className="w-full mt-4">
                                        <Image
                                            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            height="200"
                                            width="200"
                                            className="h-[200px] w-[200px] object-cover group-hover/card:shadow-xl rounded-full"
                                            alt="thumbnail"
                                        />
                                    </CardItem>
                                    <div className="flex justify-between items-center mt-5">

                                        <CardItem
                                            translateZ={20}
                                            className="px-4 py-2 rounded-xl   text-white text-xs font-bold"
                                        >
                                            <div className="ml-[85px]">
                                                <HoverBorderGradient
                                                    className={'w-[150px] ml-[cal(50% - 75px)]'}
                                                >
                                                    Get Started
                                                </HoverBorderGradient>
                                            </div>
                                        </CardItem>
                                    </div>
                                </CardBody>
                            </CardContainer>


                            <CardContainer className="inter-var -mt-20 sideCards" isScale={true}>
                                <CardBody className="relative group/card  hover:shadow-7xl  border-white/[0.5] w-[400px] h-[350px] rounded-xl p-6 border shadow-[#F7D8FF]  ">
                                    <CardItem
                                        translateZ="50"
                                        className="text-2xl font-bold text-neutral-200 text-center flex justify-center"
                                    >
                                        <div>
                                            AI Web React
                                        </div>
                                    </CardItem>
                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className=""
                                    >

                                    </CardItem>
                                    <CardItem translateZ="100" className="w-full mt-4">
                                        <Image
                                            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            height="200"
                                            width="200"
                                            className="h-[200px] w-[200px] object-cover group-hover/card:shadow-xl rounded-full"
                                            alt="thumbnail"
                                        />
                                    </CardItem>
                                    <div className="flex justify-between items-center mt-5">

                                        <CardItem
                                            translateZ={20}

                                            className="px-4 py-2 rounded-xl  dark:text-black text-white text-xs font-bold"
                                        >
                                            <div className="ml-[85px]">
                                                <HoverBorderGradient
                                                    className={'w-[150px] ml-[cal(50% - 75px)]'}
                                                >
                                                    Get Started
                                                </HoverBorderGradient>
                                            </div>
                                        </CardItem>
                                    </div>
                                </CardBody>
                            </CardContainer>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection1
