import React from 'react';
import WordStrip from './ui/WordStrip';
import { BackgroundGradientAnimation } from './ui/gradient-animation';

const Footor = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-24">
            <BackgroundGradientAnimation className="flex flex-col justify-center items-center">
                <div className="text-6xl font-[600] text-white w-[700px] text-center">
                    DoraAi Footer page is following
                </div>
                <div className="w-[800px]">
                    <WordStrip words={['usman   ', 'javed   ', 'ali    ', 'shahg   ', 'usman   ', 'javed   ', 'shahg    ', 'ali', 'ahmad    ', 'Explore    ', 'Innovate     ', 'Create    ', 'Inspire    ', 'Achieve    ']} />
                </div>
                <div className="button1 mt-20">
                    <button
                        className="border-neutral-500 dark:border-slate-800    bg-gradient-to-r from-[#9612A3] via-[#9612A3] to-sky-700 hover:from-sky-700 hover:via-[#9612A3] hover:to-[#9612A3] p-10 text-4xl rounded-full w-[500px]"
                    >
                        Get Started
                    </button>
                </div>
            </BackgroundGradientAnimation>
        </div>
    );
};

export default Footor;
