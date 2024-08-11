"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import HeaderLine from "../ui/HeaderLine";

const content = [
    {
        title: "Step 1: Enter Your Command",
        description:
            "Begin your journey by entering the specific command or detailed description of the website you envision. Whether you need a striking headline, persuasive call-to-action, or an entire page's worth of content, simply type your requirements into our platform. This input forms the foundation of your site, guiding the AI in crafting a personalized and visually compelling layout. No technical expertise is required—just express your ideas in natural language, and let our AI do the rest.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <video
                    src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/pipeline/1.mp4"
                    className="h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>
        ),
    },
    {
        title: "Step 2: AI Analysis",
        description:
            "Once you’ve entered your command, our state-of-the-art AI engine goes to work. It deeply analyzes your input, understanding the nuances and intent behind your words. By leveraging advanced natural language processing and machine learning algorithms, the AI identifies key themes, tones, and structures needed to translate your text into a fully-fledged website. This process includes generating a custom layout, selecting appropriate design elements, and even suggesting relevant content that enhances user engagement—all tailored to reflect your brand’s unique identity.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <video
                    src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/pipeline/2.mp4"
                    className="h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>
        ),
    },
    {
        title: "Step 3: Instant Preview",
        description:
            "The magic unfolds in real time as you watch your website take shape before your eyes. Our platform generates an instant preview of the website based on the AI’s analysis. This preview showcases how the layout, design elements, and content come together, providing you with a visual representation of your site. You can make adjustments on the fly—tweaking text, images, and other elements—to ensure that every detail aligns perfectly with your vision. The intuitive interface makes it easy to see changes instantly, so you always have complete control over the final product.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                <video
                    src="https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/pipeline/3.mp4"
                    className="h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>
        ),
    },
    {
        title: "Step 4: Finalize and Publish",
        description:
            "When you're satisfied with your website’s design and functionality, it’s time to finalize and launch. With a single click, our platform handles all the technical complexities—optimizing the site for performance, ensuring it’s fully responsive across devices, and preparing it for SEO. Your website is then ready to go live, fully equipped to engage visitors and drive your goals. You don’t need to worry about hosting, domain settings, or any backend processes; everything is managed seamlessly by our system. Just sit back and watch as your AI-designed website goes live, attracting and delighting users from the moment it’s published.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <video
                    src="/videos/finalize-publish.mp4"
                    className="h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>
        ),
    },
];

export default function StickyScrollRevealDemo() {
    return (
        <div className="p-10 flex flex-col justify-center items-center">
            <HeaderLine text={"Working Princ."}/>
            <h1 className="text-4xl font-bold text-center mb-6">
                Build Your Website with AI in 4 Simple Steps
            </h1>
            <p className="text-lg text-center mb-12 max-w-3xl">
                Our AI-powered platform transforms your ideas into a fully-functional, 
                visually stunning website. Follow these four easy steps to see your 
                vision come to life without any coding or design experience.
            </p>
            <StickyScroll content={content} />
        </div>
    );
}
