import React from "react";
import Navbar from "@/components/navbar/navbar";
import HeroSection from "./_sections-landing-pages/hero/hero-section";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <HeroSection />
    </div>
  );
}
