import React from "react";
import Navbar from "@/components/navbar/navbar";
import HeroSection from "./_sections-landing-pages/hero/hero-section";
import ServicesSection from "./_sections-landing-pages/servicos/services";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection/>
    </div>
  );
}
