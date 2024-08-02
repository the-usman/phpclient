import React from 'react'

const HeaderLine = ({ text }) => {
    return (

        <div className="flex w-[100vw] justify-around items-center p-7">
            <div className='text-xl font-[600]'>{text}</div>
            <div className="w-[80vw] h-[1px]  bg-white">
            </div>
        </div>
    )
}

export default HeaderLine
