"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

const Section2 = () => {
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;

        gsap.timeline({
            scrollTrigger: {
                trigger: '.imageContainer',
                start: 'top top',
                end: "+=3500",
                // markers: true,
                scrub: true,
                onUpdate: self => {
                    const progress = self.progress * 7;
                    console.log('Progress:', self.progress, 'Calculated height:', progress);
                    const windowHeight = window.innerHeight;
                    const desiredOffset = 200;
                    const height = Math.round(progress * (windowHeight - desiredOffset)) + desiredOffset;
                    console.log('Calculated height:', height);
                    if (element && height <= 3500) {
                        element.style.height = `${height}px`;
                    }
                }
            },
        });
    }, []);

    return (
        <div style={{ minHeight: '2400px' }} className='imageContainer'>
            <div className='flex flex-col items-center' style={{ padding: '20px' }}>
                <div className="">
                <div className="relative  flex-col items-center justify-center" style={{ marginLeft: "50px" }}>
                        <Image src={'/shinging.svg'} width={80} height={80} />
                        <div >
                            <div className=" flex">
                                <h1 className='text-8xl text-black font-[600]'>
                                    3
                                </h1>
                                <h1 className='text-5xl ml-10 text-black content '>
                                    Converting to Code
                                </h1>
                            </div>
                            <p className='w-[500px] ml-20 text-xl text-black '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sint quis accusamus consequuntur aut laudantium nihil architecto ea sunt vitae.</p>
                            <div className="videoDiv ">
                                <video loop autoPlay muted className="w-[400px] h-[400px] ml-[100px]">
                                    <source src='https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/pipeline/1.mp4' type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                    <div className="relative  flex-col items-center justify-center" style={{ marginLeft: "730px", marginTop: "700px" }}>
                        <Image src={'/shinging.svg'} width={80} height={80} />
                        <div >
                            <div className=" flex">
                                <h1 className='text-8xl text-black font-[600]'>
                                    3
                                </h1>
                                <h1 className='text-5xl ml-10 text-black content '>
                                    Converting to Code
                                </h1>
                            </div>
                            <p className='w-[500px] ml-20 text-xl text-black '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sint quis accusamus consequuntur aut laudantium nihil architecto ea sunt vitae.</p>
                            <div className="videoDiv ">
                                <video loop autoPlay muted className="w-[400px] h-[400px] ml-[100px]">
                                    <source src='https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/pipeline/1.mp4' type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex-col items-center justify-center" style={{ marginLeft: "40px", marginTop: "830px" }}>
                        <Image src={'/shinging.svg'} width={80} height={80} />
                        <div >
                            <div className=" flex">
                                <h1 className='text-8xl text-black font-[600]'>
                                    3
                                </h1>
                                <h1 className='text-5xl ml-10 text-black content '>
                                    Converting to Code
                                </h1>
                            </div>
                            <p className='w-[500px] ml-20 text-xl text-black '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sint quis accusamus consequuntur aut laudantium nihil architecto ea sunt vitae.</p>
                            <div className="videoDiv ">
                                <video loop autoPlay muted className="w-[400px] h-[400px] ml-[100px]">
                                    <source src='https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/pipeline/1.mp4' type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden mb-[200px] absolute" ref={ref} style={{ height: '200px' }}>
                    <Image src={'/vectorLine.webp'} className='w-[60%] h-[3500px]' width={200} height={1000} />
                </div>
            </div>
        </div>
    );
}

export default Section2;
