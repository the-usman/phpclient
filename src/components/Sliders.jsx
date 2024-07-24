import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ImagesSlider } from './ui/image-slider'; // Assuming ImagesSlider is a custom component

const SliderComponent = () => {
    const [animateSliders, setAnimateSliders] = useState(false);

    const images = [
        "https://images.unsplash.com/photo-1455587734955-081b22074882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1541971875076-8f970d573be6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsfGVufDB8fDB8fHww"
    ];

    const handleClick = () => {
        setAnimateSliders(true);
    };

    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
            <motion.div
                initial={{ y: 200, opacity: 0 }}
                animate={animateSliders ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: Math.random() * 0.5, ease: 'easeOut' }}
                className="slider"
            >
                <ImagesSlider images={images} />
            </motion.div>
            <motion.div
                initial={{ y: 200, opacity: 0 }}
                animate={animateSliders ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: Math.random() * 0.5, ease: 'easeOut' }}
                className="slider"
            >
                <ImagesSlider images={images} />
            </motion.div>
        </div>
    );
};

export default SliderComponent;
