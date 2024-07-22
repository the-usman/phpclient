import Image from 'next/image'
import React from 'react'


const Last = () => {
    return (
        <div className=''>
            <div className="heading font-[700] text-[22px]">
                Recent Activity
            </div>
            <div className="contactforrecentlypost mt-10">
                <div className='flex h-[80px] items-center lg:w-[73vw] w-[90vw] '>
                    <Image src={'/line.png'} width={50} height={80} />
                    <div className='flex justify-between items-center h-[56px] w-full'>
                        <div className='flex h-[56px]'>
                            <Image src={'/lastSectionImage1.png'} width={56} height={56} />
                            <div className="headingpost ml-5">
                                <h3>Personal Portfolio</h3>
                                <div className="date text-[#8F4F96]">May 18, 2023</div>
                            </div>
                        </div>
                        <Image className='button ' src={'dots.svg'} width={24} height={24} />
                    </div>


                </div>
                <div className='flex h-[80px] items-center lg:w-[73vw] w-[90vw] '>
                    <Image src={'/line.png'} width={50} height={80} />
                    <div className='flex justify-between items-center h-[56px] w-full'>
                        <div className='flex h-[56px]'>
                            <Image src={'/lastSectionImage1.png'} width={56} height={56} />
                            <div className="headingpost ml-5 text-[14px]">
                                <h3>Personal Portfolio</h3>
                                <div className="date text-[#8F4F96] text-[14px]">May 18, 2023</div>
                            </div>
                        </div>
                        <Image className='button ' src={'dots.svg'} width={24} height={24} />
                    </div>


                </div>
                <div className='flex h-[80px] items-center lg:w-[73vw] w-[90vw] '>
                    <Image src={'/line.png'} width={50} height={80} />
                    <div className='flex justify-between items-center h-[56px] w-full'>
                        <div className='flex h-[56px]'>
                            <Image src={'/lastSectionImage1.png'} width={56} height={56} />
                            <div className="headingpost ml-5 text-[14px]">
                                <h3>Personal Portfolio</h3>
                                <div className="date text-[#8F4F96] text-[14px]">May 18, 2023</div>
                            </div>
                        </div>
                        <Image className='button ' src={'dots.svg'} width={24} height={24} />
                    </div>


                </div>


            </div>

        </div>
    )
}

export default Last
