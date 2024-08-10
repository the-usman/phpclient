import React from 'react'
import { ContainerScroll } from '../ui/scroll-animation';
import Image from 'next/image';
import CardSlider from '../ui/Card-slider';
import { GlareCard } from '../ui/glare-card';

const Section5 = () => {
    const images = ["https://images.unsplash.com/photo-1455587734955-081b22074882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D",

        "https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8fDA%3D",

        "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsfGVufDB8fDB8fHww",

        "https://images.unsplash.com/photo-1541971875076-8f970d573be6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsfGVufDB8fDB8fHww",

        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8fDA%3D",

        "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsfGVufDB8fDB8fHww",

        "https://images.unsplash.com/photo-1541971875076-8f970d573be6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsfGVufDB8fDB8fHww",

        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsfGVufDB8fDB8fHww",
    ];
    return (
        <div>
            <div className="flex flex-col overflow-hidden">
                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-3xl lg:text-4xl font-semibold text-black dark:text-white">
                                AI Powered designs <br />
                                <span className="text-4xl lg:text-6xl   font-bold mt-1 leading-none">
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




            <div className="cards flex flex-wrap lg:flex-nowrap justify-center items-center gap-5 mt-10 ">
                <div className='flex flex-wrap gap-5 w-[90%] lg:w-full lg:justify-evenly items-center justify-center p-1'>
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
                                <div className="relative hidden flex-wrap w-[300px] lg:flex md:flex">
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
                    <div className="container-wrapper p-5 lg:w-[600px] md:w-[700px] w-[90vw] rounded-2xl lg:mt-0 mt-20" >
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
        </div>
    )
}

export default Section5
