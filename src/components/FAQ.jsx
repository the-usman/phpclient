import React from 'react'
import Accordion from './ui/Accordion'
import { Button } from './ui/MovingBorder'

const FAQ = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-20'>
            <div className="keyFeatures w-full flex flex-col justify-center items-center">
                <div className="text-[#9612A3] font-[700] lg:text-4xl text-2xl w-full text-center">
                    AI Roadmap
                </div>
                <div className="text-white  lg:text-6xl text-4xl font-[800] lg:w-[800px] w-[600px] text-center mt-10">
                    The tool that evolves and grows with you.
                </div>
                <div className="text-gray-500 text-xl mt-5 lg:w-[800px] w-[600px] text-center">
                    Dora AI is still in beta, but has immense potential for emergent behavior and self-evolution. Below are features currently in development for future versions:
                </div>
                <div className="button1 mt-20">
                    <button className='hoverButton rounded-full'>
                        Join Discord
                    </button>
                </div>
            </div>
            <div className='lg:w-[800px] w-[600px] mt-20 text-xl'>
                <Accordion />
            </div>
        </div>
    )
}

export default FAQ
