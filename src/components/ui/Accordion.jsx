import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        {
            title: "What is Material Tailwind?",
            content: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams."
        },
        {
            title: "How to use Material Tailwind?",
            content: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams."
        },
        {
            title: "What can I do with Material Tailwind?",
            content: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams."
        }
    ];

    return (
        <>
            {accordionData.map((item, index) => (
                <div className="relative mb-3 text-white " key={index}>
                    <h6 className="mb-3 border border-white rounded-xl bg-gray-700 transition-all duration-300 hover:bg-gray-900">
                        <button
                            className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-white rounded-t-1 group text-dark-500"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span>{item.title}</span>
                            {/* <i className={`absolute right-0 pt-1 text-xs fa ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i> */}
                            <div className='absolute right-10 pt-1 text-xs'>
                                {activeIndex !== index ? <FaPlus />: <FaMinus />}
                                </div>
                        </button>
                    </h6>
                    <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === index ? 'h-auto' : 'h-0'}`}
                    >
                        <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
                            {item.content}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Accordion;
