import Image from 'next/image'
import React from 'react'

const Card = ({heading, image, content}) => {
    return (
        <div className=' w-[288.33px] h-[231.9px]'>
            <Image src={image} width={288.33} height={162.17} className='rounded-xl' />
            <div className="cardHeading font-[500] text-[16px]">
                {heading}
            </div>
            <div
                className='font-[500] text-[#8F4F96] text-[14px]'
            >{ content}</div>
        </div>
    )
}

export default Card
