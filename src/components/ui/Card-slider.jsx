import React from 'react'

const CardSlider = ({images = []}) => {
    return (
        <div className='lg:w-[500px] md:w-[500px] w-full'>
            <div className="carousel rounded-2xl overflow-hidden">
                {images.map((image, index) => (
                    <div className={`carousel-item ${index === 0? 'active -ml-24' : ''} my-5 ml-5 rounded-2xl`} key={index}>
                        <img src={image} alt="Burger" className='rounded-2xl w-[250px] lg:h-[400px] md:h-[400px] h-[300px]' />
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default CardSlider
