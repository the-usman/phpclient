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

            <div className="hero h-[900px]">
                <div class="hero-content flex-col">
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
                    <div onQvisible="q-e0c1df55.js#_hW[0]" qKey="e2_0" qId="r">
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
            {/* <div className=' h-[120vh] flex flex-col justify-center items-center relative text-white ' style={{ zIndex: 99999 }}>
                <HeroSection />
            </div> */}
            {/* <Section4 /> */}
        </div>
    )
}

export default Section1
