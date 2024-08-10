import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

export default function IconCloudDemo() {
    const items = [
        { heading: "AI-Powered Design", description: "Automated design recommendations to build stunning websites." },
        { heading: "Smart Customization", description: "Tailor your website with intelligent customization options." },
        { heading: "Instant Previews", description: "See real-time updates as you design your site." },
        { heading: "Seamless Integration", description: "Easily integrate with various tools and platforms." },
    ];
    const rotationAngle = [0, 12, 12, 0];

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.section1',
                start: 'top top',
                end: '+=2000px', // Adjust this to control how much scroll affects the animation duration
                scrub: true,
                pin: true,
                markers: true, // Keep this true for debugging, remove it later
            }
        });

        items.forEach((_, index) => {
            timeline.to(`#card_${index}`, {
                rotate: index % 2 === 0 ? -rotationAngle[index] * 30 : rotationAngle[index] * 30, 
                x: index % 2 === 0 ? '-1000px' : '1000px',
                duration: 1,
                ease: 'power4.inOut',
            }, index * 0.5); 
        });
    }, []);

    return (
        <div className="flex flex-col items-center h-[100vh] overflow-hidden relative bg-[#030014] pt-10 section1">
            <h1 className="text-6xl mt-20 text-white">
                Key Features
            </h1>
            <div className="cardContainer relative w-[620px] h-[510px] mt-20">
                {items.map((item, index) => {
                    const rotationAng = rotationAngle[index];

                    return (
                        <div
                            key={index}
                            className="card absolute overflow-hidden rounded-3xl flex flex-col items-center justify-center text-white p-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-white border"
                            id={`card_${index}`}
                            style={{
                                transform: `rotate(${index % 2 === 0 ? -rotationAng : rotationAng}deg)`,
                                zIndex: items.length - index,
                                top: `0px`,
                                width: '500px',
                                height: '370px',
                                background: `linear-gradient(135deg, rgba(58, 123, 213, 0.9), rgba(246, 83, 151, 0.9))`,
                            }}
                        >
                            <h2 className="text-4xl font-bold">{item.heading}</h2>
                            <p className="mt-2 text-xl">{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
