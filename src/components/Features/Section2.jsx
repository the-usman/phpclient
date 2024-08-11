"use client";
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import HeaderLine from '../ui/HeaderLine';

const Section2 = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    // State for visibility of content divs
    const [visibleContent, setVisibleContent] = useState([false, false, false]);

    useGSAP(() => {
        const element = ref.current;

        const animateVisibility = (index, isVisible) => {
            const contentDiv = document.querySelectorAll('.contentDiv')[index];
            if (isVisible) {
                gsap.fromTo(contentDiv, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 1 });
            }
        };

        gsap.timeline({
            scrollTrigger: {
                trigger: '.imageContainer',
                start: 'top top',
                end: "+=4000",
                scrub: true,
                onUpdate: self => {
                    const progress = self.progress * 10;
                    const windowHeight = window.innerHeight;
                    const desiredOffset = 200;
                    const height = Math.round(progress * (windowHeight - desiredOffset)) + desiredOffset;

                    if (element && height <= 3100) {
                        element.style.height = `${height}px`;

                        // Update visibility based on height
                        const newVisibleContent = [
                            height >= 0,
                            height >= 1300,
                            height >= 3000
                        ];
                        const newAnimatedContent = [
                            height === 0,
                            height === 1300,
                            height === 3000
                        ]
                        newAnimatedContent.forEach((isVisible, index) => {
                            if (height && !visibleContent[index]) {
                                animateVisibility(index, isVisible);
                            }
                        });
                        setVisibleContent(newVisibleContent);
                    }
                }
            },
        });
    }, []);

    return (
        <div style={{ minHeight: '4000px' }} className='imageContainer'>
            <HeaderLine text={"Working Princ."} />
            <div className='flex flex-col items-center' style={{ padding: '20px' }}>
                <div className="">
                    {/* First Content Div */}
                    <div className="relative flex-col items-center justify-center w-[600px] contentDiv" style={{ marginLeft: "85px" }}>
                        <Image src={'/shinging.svg'} width={80} height={80} />
                        {visibleContent[0] && (
                            <div className='border border-white p-4 rounded-xl w-[600px]'>
                                <div className="flex">
                                    <h1 className='text-6xl text-white font-[600]'>1.</h1>
                                    <h1 className='text-3xl ml-10 text-white content font-extrabold'>Effortless Setup & Content Input</h1>
                                </div>
                                <p className='w-[500px] ml-20 text-xl text-white'>
                                    Define your websites goals, input your content, and let our AI web builder handle the rest with smart templates that match your vision.
                                </p>
                                <div className="videoDiv">
                                    <video loop autoPlay muted className="w-[400px] h-[400px] ml-[100px]">
                                        <source src='https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/pipeline/1.mp4' type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Second Content Div */}
                    <div className="relative flex-col items-center justify-center w-[600px] contentDiv" style={{ marginLeft: "760px", marginTop: "700px" }}>
                        <Image src={'/shinging.svg'} width={80} height={80} />
                        {visibleContent[1] && (
                            <div className='border border-white p-4 rounded-xl'>
                                <div className="flex">

                                    <h1 className='text-6xl text-white font-[600]'>2.</h1>
                                    <h1 className='text-3xl ml-10 text-white content font-extrabold'>Customization & Design Enhancement</h1>
                                </div>
                                <p className='w-[500px] ml-20 text-xl text-white mt-10'>
                                    Customize your AI-generated design with ease. Adjust layouts, colors, and fonts to fit your brand, and add features like contact forms and e-commerce with a few clicks.
                                </p>
                                <div className="videoDiv">
                                    <video loop autoPlay muted className="w-[400px] h-[400px] ml-[100px]">
                                        <source src='https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/pipeline/1.mp4' type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Third Content Div */}
                    <div className="relative flex-col items-center justify-center w-[600px] contentDiv" style={{ marginLeft: "100px", marginTop: "830px" }}>
                        <Image src={'/shinging.svg'} width={80} height={80} />
                        {visibleContent[2] && (
                            <div className='border border-white p-4 rounded-xl w-[600px]'>
                                <div className="flex">
                                    <h1 className='text-6xl text-white font-[600]'>3.</h1>
                                    <h1 className='text-3xl ml-10 text-white content font-extrabold'>Review, Test, & Launch</h1>
                                </div>
                                <p className='w-[500px] ml-20 text-xl text-white'>
                                Test and optimize your site with AI tools. Ensure flawless functionality and fast loading, then launch and monitor for any needed adjustments.
                                </p>
                                <div className="videoDiv">
                                    <video loop autoPlay muted className="w-[400px] h-[400px] ml-[100px]">
                                        <source src='https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/pipeline/1.mp4' type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="overflow-hidden mb-[200px] absolute" ref={ref} style={{ height: '0px' }}>
                    <Image src={'/vectorLine.webp'} className='w-[60%] h-[3500px]' width={200} height={1000} />
                </div>
            </div>
        </div>
    );
}

export default Section2;
