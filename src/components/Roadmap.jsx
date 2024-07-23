import React from 'react'
import { Button } from './ui/MovingBorder'

const Roadmap = () => {
    return (
        <div className='mt-24'>
            <div className="keyFeatures w-full flex flex-col justify-center items-center">
                <div className="text-[#9612A3] font-[700] text-4xl w-full text-center">
                    AI Roadmap
                </div>
                <div className="text-white  text-6xl font-[800] w-[800px] text-center mt-10">
                    The tool that evolves and grows with you.
                </div>
                <div className="text-gray-500 text-xl mt-5 w-[800px]">
                    Dora AI is still in beta, but has immense potential for emergent behavior and self-evolution. Below are features currently in development for future versions:
                </div>
                <div className="button1 mt-20">
                    <Button
                        borderRadius="1.75rem"
                        className="border-neutral-500 dark:border-slate-800 p-3 text-xl bg-gradient-to-r from-[#9612A3] via-[#9612A3] to-sky-700"
                    >
                        Get Started
                    </Button>
                </div>
            </div>
            
        </div>
    )
}

export default Roadmap
