import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

export default function IconCloudDemo() {
    const images = [
        "https://images.unsplash.com/photo-1455587734955-081b22074882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1541971875076-8f970d573be6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsfGVufDB8fDB8fHww",
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

        images.forEach((_, index) => {
            timeline.to(`#card_${index}`, {
                rotate: index % 2 === 0 ? -rotationAngle[index] * 30 : rotationAngle[index] * 30, 
                x: index % 2 === 0 ? '-1000px' : '1000px',
                duration: 1,
                ease: 'power4.inOut',
            }, index * 0.5); 
        });
    }, []);

    return (
        <div className="flex flex-col items-center h-[100vh] overflow-hidden relative bg-[#030014] pt-10 section1 ">
            <h1 className="text-6xl mt-20">
                Key Features
            </h1>
            <div className="cardContainer relative w-[620px] h-[510px] mt-20">
                {images.map((image, index) => {
                    const rotationAng = rotationAngle[index];

                    return (
                        <div
                            key={index}
                            className="card absolute overflow-hidden rounded-3xl"
                            id={`card_${index}`}
                            style={{
                                transform: `rotate(${index % 2 === 0 ? -rotationAng : rotationAng}deg)`,
                                zIndex: images.length - index,
                                top: `0px`,
                            }}
                        >
                            <Image src={image} width={500} height={500} />
                            
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
