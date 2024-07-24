"use client";

import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footor from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Roadmap from "@/components/Roadmap";
import CardSlider from "@/components/ui/Card-slider";
import React, { useState } from "react";

export default function Home() {
  
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      {/* <CardSlider /> */}
      <Features />
      <Roadmap />
      <FAQ />
      <Footor />
    </main>
  );
}
