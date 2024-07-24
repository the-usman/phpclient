"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useSpring, motionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const TracingBeam = ({ children, className, progress }) => {
    const ref = useRef(null);
    const contentRef = useRef(null);
    const [svgHeight, setSvgHeight] = useState(0);

    useEffect(() => {
        if (contentRef.current) {
            setSvgHeight(contentRef.current.offsetHeight);
        }
    }, []);

    const progressValue = motionValue(progress);

    const y1 = useSpring(
        useTransform(progressValue, [0, 0.8], [50, svgHeight]),
        {
            stiffness: 500,
            damping: 90,
        }
    );
    const y2 = useSpring(
        useTransform(progressValue, [0, 1], [50, svgHeight - 200]),
        {
            stiffness: 500,
            damping: 90,
        }
    );

    const sliderHeight = svgHeight * progress;
    const starHeight = 29; // Height of the star image
    const lineHeight = sliderHeight - starHeight; // Ensuring the star does not go beyond the slider height

    return (
        <motion.div
            ref={ref}
            className={cn("relative w-full max-w-4xl mx-auto h-full", className)}
        >
            <div className="absolute -left-16 w-[29px]" style={{ height: `${progress * lineHeight +20}px`, transition: 'height 0.5s ease' }}>
                <div className="w-[2px] ml-[13px] bg-[#1F1F1F]" style={{ height: `${progress * lineHeight +20}px`, transition: 'height 0.5s ease' }}></div>
                <div className="absolute top-0 left-[9px] w-[10px] slider-bar" style={{
                    background: "linear-gradient(0deg, rgb(20, 123, 255) 0%, rgba(0, 0, 0, 0) 101.59%)",
                    filter: "blur(30px)",
                    height: `${progress * lineHeight +20}px`,
                    transition: 'height 0.5s ease'
                }}></div>
                <div className="absolute top-0 left-[9px] w-[10px] slider-bar" style={{
                    background: "linear-gradient(0deg, rgba(255, 127, 65, 0.8) 0.03%, rgba(0, 0, 0, 0) 100%)",
                    filter: "blur(5px)",
                    height: `${progress * lineHeight +20}px`,
                    transition: 'height 0.5s ease'
                }}></div>
                <div className="absolute top-0 left-[13px] w-[2px] slider-bar" style={{
                    background: "linear-gradient(rgb(26, 29, 32) 0%, rgb(42, 129, 238) 58.85%, rgb(219, 177, 213) 79.17%, rgb(253, 214, 119) 100%)",
                    height: `${progress * lineHeight +20}px`,
                    transition: 'height 0.5s ease'
                }}></div>
                <motion.div
                    className="absolute left-0 w-[29px] h-[29px] slider-star"
                    style={{ top: `${progress * lineHeight}px` }}
                    animate={{ top: `${progress * lineHeight}px` }}
                    transition={{ type: "spring", stiffness: 500, damping: 90 }}
                >
                    <Image
                        src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/input-star.png"
                        alt="Star"
                        width={29}
                        height={29}
                    />
                </motion.div>
            </div>
            <motion.div
                className="absolute -left-[51px] w-[1px] bg-gray-700 hidden lg:block "
                style={{ height: `${svgHeight}px`, zIndex: -1}}
                transition={{ type: "spring", stiffness: 500, damping: 90 }}
            />
            <div ref={contentRef}>{children}</div>
        </motion.div>
    );
};
