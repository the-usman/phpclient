import React from 'react'
import Accordion from './ui/Accordion'
import { Button } from './ui/MovingBorder'

const FAQ = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-20'>
            <div className="keyFeatures w-full flex flex-col justify-center items-center">
                <div className="text-[#9612A3] font-[700] text-4xl w-full text-center">
                    AI Roadmap
                </div>
                <div className="text-white  text-6xl font-[800] w-[800px] text-center mt-10">
                    Got questions?
                    Join the community.
                </div>
                <div className="text-gray-500 text-xl mt-5 w-[800px]">
                    Our Discord community and staff are here to help!
                    Your feedback will help Dora AI improve in future versions.
                </div>
                <div className="button1 mt-20">
                    <button className='hoverButton rounded-full'>
                        Join Discord
                    </button>
                </div>
            </div>
            <div className='w-[800px] mt-20 text-xl'>
                <Accordion />
            </div>
        </div>
    )
}

export default FAQ
