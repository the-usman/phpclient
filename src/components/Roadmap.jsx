import React from 'react'
import { Button } from './ui/MovingBorder'
import Image from 'next/image'
import { HoverBorderGradient } from './ui/gradientBorder'

const Roadmap = () => {
    return (
        <div className='mt-24 flex justify-center flex-col items-center '>
            <div className="keyFeatures w-full flex flex-col justify-center items-center">
                <div className="text-[#9612A3] font-[700] lg:text-4xl text-2xl w-full text-center">
                    AI Roadmap
                </div>
                <div className="text-white  lg:text-6xl md:text-4xl text-[7vw] font-[800] lg:w-[800px] md:w-[600px] w-[100vw] text-center mt-10">
                    The tool that evolves and grows with you.
                </div>
                <div className="text-gray-500 text-2xl mt-2 lg:w-[800px] md:w-[600px] w-[100vw] text-center">
                    Dora AI is still in beta, but has immense potential for emergent behavior and self-evolution. Below are features currently in development for future versions:
                </div>
                <div className="button1 mt-20">
                    <HoverBorderGradient
                        className={'w-[150px] bg-gradient-to-r from-[#9612A3] via-[#9612A3] to-sky-700'}
                    >
                        Get Started
                    </HoverBorderGradient>
                </div>
            </div>
            <div className=" mt-20 flex flex-wrap-reverse ">
                <div className="lg:pt-0 pt-10 lg:ml-0 ml-20 md:block lg:block hidden">
                    <Image src={'/ai-roadmap-progress.png'} width={60} height={500} />
                </div>
                <div className="lg:pt-0 pt-10 md:ml-0 lg:ml-0 roadmapSectionBox">
                    <div className="flex items-center">
                        <button className='bg-white text-black p-2 px-4 rounded-2xl text-xl'>
                            Shipped
                        </button>
                        <div className="text-white text-xl px-5 font-[700]">in Beta</div>
                    </div>

                    <div className="box01 h-[110px] lg:w-[500px] md:w-[500px] w-[95vw] rounded-xl mt-5 flex items-center px-7" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
                        <Image src={'/to-website.webp'} width={100} height={100} className='rounded-full lg:w-[70px] lg:h-[70px] md:w-[70px] md:h-[70px] w-[50px] h-[50px] p-2 ' style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }} />
                        <div className="px-3">
                            <div className=" md:text-2xl lg:text-2xl font-[500] text-white text-[5vw]">
                                Text to website
                            </div>
                            <div className="md:text-lg lg:text-lg text-[4vw]">
                                The first, but hardest step!
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center mt-10">
                        <button className='text-white p-2 px-4 rounded-2xl text-xl' style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }} >
                            Progress
                        </button>
                        <div className="text-white text-xl px-5 font-[700]">for 1.0</div>
                    </div>

                    <div className="box01 h-[110px] lg:w-[500px] md:w-[500px] w-[95vw] rounded-xl mt-5 flex items-center px-7" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
                        <Image src={'/generate-3d.webp'} width={100} height={100} className='rounded-full lg:w-[70px] lg:h-[70px] md:w-[70px] md:h-[70px] w-[50px] h-[50px] p-2  ' style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }} />
                        <div className="px-3">
                            <div className="md:text-2xl lg:text-2xl font-[500] text-white text-[5vw]">
                                AI-generated 3D
                            </div>
                            <div className="md:text-lg lg:text-lg text-[4vw]">
                                Generate true 3D sites with 3D assets.
                            </div>
                        </div>
                    </div>

                    <div className="box01 h-[110px] lg:w-[500px] md:w-[500px] w-[95vw] rounded-xl mt-5 flex items-center px-7" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
                        <Image src={'/ai-animation.webp'} width={100} height={100} className='rounded-full lg:w-[70px] lg:h-[70px] md:w-[70px] md:h-[70px] w-[50px] h-[50px] p-2  ' style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }} />
                        <div className="px-3">
                            <div className="md:text-2xl lg:text-2xl font-[500] text-white text-[5vw]">
                                AI-generated animations
                            </div>
                            <div className="md:text-lg lg:text-lg text-[4vw]">
                                Generation of interactive site animations.
                            </div>
                        </div>

                    </div>

                    <div className="box01 h-[50px] lg:w-[500px] md:w-[500px] w-[95vw] rounded-xl mt-5 flex items-center px-7" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>

                        <div className="px-3">
                            <div className="text-xl">
                                ... and many more <span className='text-white underline text-xl font-[500]'>  See full roadmap</span>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='w-[510px] lg:ml-32 md:ml-32 flex flex-col items-center ml-0'>
                    <div className="text-white text-center text-xl w-[90vw]">
                        Your support is vital. <br />
                        With every subscription, you fund the R&D of Dora AI.
                    </div>
                    <div className="video-container lg:w-[500px] md:w-[600px] w-[90vw] lg:h-[550px] h-[400px] mt-5">
                        <video muted loop className='rounded-xl videoRoadmap container-wrapper h- ob' style={{ objectFit: 'cover' }} autoPlay>
                            <source src="/show-2.mp4" type="video/mp4" width={400} height={700} />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap
