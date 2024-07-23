import React from 'react'

const CardSlider = ({images = []}) => {
    return (
        <div className='w-[500px]'>
            <div className="carousel rounded-2xl overflow-hidden">
                {images.map((image, index) => (
                    <div className={`carousel-item ${index === 0? 'active -ml-24' : ''} my-5 ml-5 rounded-2xl`} key={index}>
                        <img src={image} alt="Burger" className='rounded-2xl w-[250px] h-[400px]' />
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default CardSlider
