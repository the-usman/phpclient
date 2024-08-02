"use client";

import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Roadmap from "@/components/Roadmap";
import CardSlider from "@/components/ui/Card-slider";
import React, { useState } from "react";
import SliderComponent from "@/components/Sliders";
import About from "@/components/About";
import Footor from "@/components/Footor";
import HeroSection1 from "@/components/HeroSection1";
import Features1 from "@/components/Features/Features1";

export default function Home() {
  
  return (
    <main className="">

      <Navbar />
      {/* <HeroSection /> */}
      {/* <CardSlider /> */}
      {/* <Features />
      <Roadmap />
      <FAQ />
      <About />
      <Footor /> */}
      {/* <SliderComponent /> */}
      
      <HeroSection1 />
      <Features1 />
    </main>
  );
}
