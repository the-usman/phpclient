"use client";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from 'next/image';
import { TracingBeam } from './ui/tracing-beams';
import { Button } from './ui/MovingBorder';
import { PlaceholdersAndVanishInput } from './ui/placeholder';
import { motion } from 'framer-motion';
import { ImagesSlider } from './ui/image-slider';
import CardSlider from './ui/Card-slider';
import { GlareCard } from './ui/glare-card';
import { ContainerScroll } from './ui/scroll-animation';
import { HoverBorderGradient } from './ui/gradientBorder';

const Features = () => {
    const fullText = "Lorem ipsum dolor sit amet consectetur, dejwoie kndoiew ouw er";
    const fullText2 = "Lorem ipsum dolor sit,";
    const [displayedText, setDisplayedText] = useState('');
    const [displayedText2, setDisplayedText2] = useState('');
    const ref = useRef(null);
    const videos = [
        'https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/pipeline/1.mp4',
        'https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/pipeline/2.mp4',
        'https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/pipeline/3.mp4'
    ];
    const [videoIndex, setVideoIndex] = useState(0);
    const [changeBg, setChangeBg] = useState(false);
    const [endAni, setEndAni] = useState(false);

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.container1',
                start: 'top 100px',
                scrub: true,
                pin: true,
                end: "+=1000",
                onUpdate: self => {
                    const progress = self.progress * 2;
                    const length = Math.round(progress * fullText.length);
                    setDisplayedText(fullText.substring(0, length));
                    if (progress > 0.4) {
                        const progress2 = (progress - 0.4) * 2;
                        const length2 = Math.round(progress2 * fullText2.length);
                        setDisplayedText2(fullText2.substring(0, length2));
                    }
                    if (progress > 0.8) {
                        setChangeBg(true);
                    }

                    if (progress >= 1) {
                        setEndAni(true);
                    } else {
                        setEndAni(false);
                    }
                }
            }
        });

        tl.from('.generateText', {
            width: '0px',
            duration: 10,
            ease: 'none'
        });
        tl.to('.editor', {
            x: '37%',
            position: 'absolute',
            duration: 1,
            ease: 'none'
        });
        // gsap.timeline({
        //     scrollTrigger: {
        //         trigger: '.video-pin',
        //         pin: true,
        //         markers: true,
        //         end: "+=500",
        //         onUpdate: self => {
        //             const progress = self.progress;
        //             setVideoIndex(Math.floor(progress * videos.length));
        //         }
        //     }
        // })
    });

    const images = [
        "https://images.unsplash.com/photo-1455587734955-081b22074882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D",

        "https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8fDA%3D",

        "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsfGVufDB8fDB8fHww",

        "https://images.unsplash.com/photo-1541971875076-8f970d573be6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsfGVufDB8fDB8fHww",

        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8fDA%3D",

        "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsfGVufDB8fDB8fHww",

        "https://images.unsplash.com/photo-1541971875076-8f970d573be6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsfGVufDB8fDB8fHww",

        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsfGVufDB8fDB8fHww",
    ];



    useEffect(() => {
        if (endAni) {
            gsap.to('.editor', {
                x: '37%',
                position: 'absolute',
                duration: 1,
                ease: 'none'
            });
            gsap.to('.textSection', {
                x: "-100px",
                duration: 1,
            });
        } else {
            gsap.to('.editor', {
                x: '0%',
                position: 'relative',
                duration: 1,
                ease: 'none'
            });
        }
    }, [endAni]);

    const handleVideoEnd = () => {
        console.log("Current video index:", videoIndex);
        setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };
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

    const handleClick = () => {
        if (ref.current) {
            ref.current.click();
        }
    };

    return (
        <div id='features bg-transparent'>
            {/* <div className="do h-[100vh]"></div> */}
            <div className="container1 flex flex-col justify-center items-center bg-transparent">
                <div className='w-[70%] relative bg-transparent'>
                    <div className=' w-full h-[100vh] editor bg-transparent' style={{ backgroundImage: endAni ? '' : 'url(/editor-bg.webp)' }}>
                        {!endAni ? (
                            <div className="insideEditor bg-transparent relative w-[500px] rounded-2xl overflow-hidden border border-[#101118]">
                                <div className='p-3 bg-[#101118] flex items-center'>
                                    <Image src='/ai-star.svg' width={30} height={30} alt='AI Star' />
                                    <div className='font-[700] text-2xl text-white ml-2'>AI</div>
                                </div>
                                <div className="h-[400px] flex flex-col justify-center items-center">
                                    <div className='w-[70%] h-[130px] border border-gray-500 rounded-xl text-white bg-gray-700 p-5'>
                                        <div className='genrateText w-full overflow-hidden'>
                                            {displayedText}
                                        </div>
                                    </div>
                                    <div className="w-[70%] h-[70px] mt-4 border border-[#101118] rounded-xl text-white bg-gray-700 p-5">
                                        <div className='genrateText w-full overflow-hidden'>
                                            {displayedText2}
                                        </div>
                                    </div>
                                    <div className="mt-5 button1 w-[70%] text-center">
                                        <button className={`${!changeBg ? "bg-white text-[#9612A3]" : "bg-[#9612A3] text-white"} h-[40px] lg:h-[40px] rounded-xl w-full`}>
                                            Generate
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div ref={ref}>
                                {endAni && (
                                    <div className='video-editor w-full' ref={ref}>
                                        <video
                                            key={videoIndex}
                                            className='w-[1100px] h-[100vh]'
                                            autoPlay
                                            muted
                                            onEnded={handleVideoEnd}
                                        >
                                            <source src={videos[videoIndex]} type="video/mp4" />
                                        </video>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="text-2xl text-[#9612A3] font-[500] lg:hidden">
                            AI Pipeline
                        </div>
                        <div className="text-6xl text-white font-[700] mt-10 lg:hidden">
                            Building Sites, <br /> end-to-end.
                        </div>

                    <div className='video-editor w-full lg:hidden' ref={ref}>
                        <video
                            key={videoIndex}
                            className='w-[1100px] h-[80vh]'
                            autoPlay
                            muted
                            onEnded={handleVideoEnd}
                        >
                            <source src={videos[videoIndex]} type="video/mp4" />
                        </video>
                    </div>

                    <div className="textSection h-[70vh] w-[500px]">
                        <div className="text-2xl text-[#9612A3] font-[500] lg:block hidden ">
                            AI Pipeline
                        </div>
                        <div className="text-6xl text-white font-[700] mt-10 lg:block hidden ">
                            Building Sites, <br /> end-to-end.
                        </div>

                        <TracingBeam progress={videoIndex * 0.5} >
                            <div className="albox mt-10 lg:w-[400px] " onClick={() => setVideoIndex(0)} style={{ opacity: videoIndex === 0 ? 1 : 0.5, cursor: 'pointer' }}>
                                <div className="text-4xl font-[500] text-white">
                                    Analzying Prompt...
                                </div>
                                <div className="text-lg font-[400] text-white">
                                    Dora AI helps determine the subject and style of your site.
                                </div>
                            </div>
                            <div className="albox mt-14 lg:w-[400px]" onClick={() => setVideoIndex(1)} style={{ opacity: videoIndex === 1 ? 1 : 0.5, cursor: 'pointer' }}>
                                <div className="text-4xl font-[500] text-white">
                                    Analzying Prompt...
                                </div>
                                <div className="text-lg font-[400] text-white">
                                    Dora AI helps determine the subject and style of your site.
                                </div>
                            </div>
                            <div className=" mt-10 lg:w-[400px]" onClick={() => setVideoIndex(2)} style={{ opacity: videoIndex === 2 ? 1 : 0.5, cursor: 'pointer' }}>
                                <div className="text-4xl font-[500] text-white">
                                    Analzying Prompt...
                                </div>
                                <div className="text-lg font-[400] text-white">
                                    Dora AI helps determine the subject and style of your site.
                                </div>

                            </div>

                        </TracingBeam>
                        <div className='-mt-7'>
                            <HoverBorderGradient
                                className={'w-[150px] bg-gradient-to-r from-[#9612A3] via-[#9612A3] to-sky-700'}
                            >
                                Get Started
                            </HoverBorderGradient>
                        </div>

                    </div>
                </div>
            </div>
            <div className="keyFeatures w-full flex flex-col justify-center items-center">
                <div className="text-[#9612A3] font-[700] text-4xl w-full text-center">
                    Key Features
                </div>
                <div className="text-white  text-6xl font-[800] w-[800px] text-center mt-10">
                    The first AI that trulytruly understands websites.
                </div>
                <div className="text-gray-500 text-2xl mt-2">
                    Genrating website using AI on any topic
                </div>
                <div className="mt-10 w-[800px]">
                    <PlaceholdersAndVanishInput
                        placeholders={placeholders}
                        onChange={handleChange}
                        onSubmit={onSubmit

                        }
                    />
                </div>
                <div className="">
                    <div className="flex justify-center items-center mt-20">
                        {images.map((image, idx) => (
                            <motion.div
                                key={"images" + idx}
                                style={{
                                    rotate: Math.random() * 20 - 10,
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 0,
                                    zIndex: 100,
                                }}
                                whileTap={{
                                    scale: 1.1,
                                    rotate: 0,
                                    zIndex: 100,
                                }}
                                className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                            >
                                <Image
                                    src={image}
                                    alt=""
                                    width="500"
                                    height="500"
                                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="imageSlider flex flex-col mt-24 justify-center items-center">
                <motion.div className="warper  absolute rounded-full " style={{ zIndex: 1000, backgroundColor: 'rgba(255,255,255,0.3)' }} whileHover={{ rotate: 60 }}>

                    <Image src={'https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/reload.png'} width={150} height={150} className=' p-5 image-arrow bg-[rgba(150, 18, 163, 0.5)] cursor-pointer' ref={ref} onClick={handleClick} />
                </motion.div>
                <div className='w-[90%] flex justify-between'>
                    <div className="w-[48%]">
                        <ImagesSlider className="h-[40rem] rounded-xl" images={images} ref={ref}>

                        </ImagesSlider>
                    </div>
                    <div className="w-[48%]">
                        <ImagesSlider className="h-[40rem] rounded-xl" images={images} direction='right' ref={ref}>
                        </ImagesSlider>
                    </div>
                </div>
            </div>

            <div className="flex flex-col overflow-hidden">
                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-4xl font-semibold text-black dark:text-white">
                                AI Powered designs <br />
                                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                    Usman Javed
                                </span>
                            </h1>
                        </>
                    }
                >
                    <Image
                        src={images[0]}
                        alt="hero"
                        height={720}
                        width={1400}
                        className="mx-auto rounded-2xl object-cover h-full object-left-top"
                        draggable={false}
                    />
                </ContainerScroll>
            </div>

            {/* </div> */}
            <div className="cards flex flex-wrap justify-center items-center  gap-5 mt-10 ">
                <div className='flex gap-5 w-[90%] justify-between items-center'>
                    <div className="">
                        <GlareCard>
                            <div className="text-3xl font-[700] text-white">
                                AI-Powered Designs
                            </div>
                            <div className="text-xl mt-2 flex justify-between">
                                <div>
                                    No templates or stock photos. Dora AI yields results 100% tailored to your prompt.
                                </div>
                                <Image src="/arrow.svg" width={30} height={30} alt="Arrow Icon" />
                            </div>
                            <div className='flex '>
                                <div>
                                    <Image src={images[0]} width={300} height={700} className="h-[500px] rounded-2xl mt-10" alt="Main Image" />
                                </div>
                                <div className="relative flex flex-wrap w-[300px]">
                                    <div className='absolute'>
                                        <Image src="/nike=Default.webp" width={200} height={200} className="rounded-full w-[200px] h-[200px] activeImage" alt="Overlay Image" />
                                    </div>

                                    <div className='absolute -right-20'>
                                        <Image src="/tesla=Default.webp" width={200} height={200} className="rounded-full w-[200px] h-[200px] activeImage" alt="Overlay Image" />
                                    </div>


                                    <div className='absolute right-1 top-36'>
                                        <Image src="/netflix=Default.webp" width={200} height={200} className="rounded-full w-[200px] h-[200px] activeImage" alt="Overlay Image" />
                                    </div>


                                    <div className='absolute top-[300px]'>
                                        <Image src="/mcdonalds=Default.webp" width={200} height={200} className="rounded-full w-[200px] h-[200px] activeImage" alt="Overlay Image" />
                                    </div>


                                    <div className='absolute top-[300px] -right-20'>
                                        <Image src="/nike=Default.webp" width={200} height={200} className="rounded-full w-[200px] h-[200px] activeImage" alt="Overlay Image" />
                                    </div>
                                </div>
                            </div>
                        </GlareCard>

                    </div>
                    <div className="container-wrapper p-5 w-[650px] rounded-2xl" >
                        <div className="text-3xl font-[700] text-white">
                            Prompt-relevant, always
                        </div>
                        <div className="text-xl mt-2">
                            No templates or stock photos. Dora AI yields results 100% tailored to your prompt.
                        </div>

                        <CardSlider images={images} />
                        <div className="text-xl flex justify-between">
                            <div className='border border-gray-500 px-4 py-2 rounded-full'>
                                Our more designs are available here.
                            </div>
                            <Image src={'/arrow.svg'} width={30} height={30} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="videoSection">

            </div>
        </div>
    );
};

export default Features;
