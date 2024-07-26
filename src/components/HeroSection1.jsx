"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import HoverBorderGradient from './ui/gradientBorder'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import { CardBody, CardContainer, CardItem } from './ui/TDCard'

const HeroSection1 = () => {
    gsap.registerPlugin(ScrollTrigger);
    const fullText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vel nisi sunt beatae off";
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
                    
                </div>
            </div>
            <div className="w-[100%] h-[36vh] overflow-hidden flex gap-3">
                <Image src={'https://images.unsplash.com/photo-1721066115321-eb0eec055296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8fDA%3D'} width={500} height={500} className='w-[64vw] h-[500px]' />
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
                <div className="flex justify-around items-center p-7">
                    <div className='text-xl font-[600]'>Bref Intro.</div>
                    <div className="w-[85vw] h-[1px]  bg-black">

                    </div>
                </div>
                <div className='w-[100vw] p-10'>
                    <div className='text-7xl px-10 font-[200]'>
                        {displayedText}
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex">
                        <CardContainer className="inter-var -mt-20 sideCards" isScale={true}>
                            <CardBody className="relative group/card  hover:shadow-4xl  border-black/[0.5] w-[400px] h-[350px] rounded-xl p-6 border  ">
                                <CardItem
                                    translateZ="50"
                                    className="text-2xl font-bold text-neutral-600 text-center flex justify-center"
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

                                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
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
                            <CardBody className="relative group/card  hover:shadow-4xl  border-black/[0.5] w-[400px] h-[350px] rounded-xl p-6 border   ">
                                <CardItem
                                    translateZ="50"
                                    className="text-2xl font-bold text-neutral-600 text-center flex justify-center"
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
                                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
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
                            <CardBody className="relative group/card  hover:shadow-4xl  border-black/[0.5] w-[400px] h-[350px] rounded-xl p-6 border   ">
                                <CardItem
                                    translateZ="50"
                                    className="text-2xl font-bold text-neutral-600 text-center flex justify-center"
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

                                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
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
    )
}

export default HeroSection1
