import React from "react";
import Navbar from "@/components/navbar/navbar";
import HeroSection from "./_sections-landing-pages/hero/hero-section";
import ServicesSection from "./_sections-landing-pages/portifolio/services";
import Testimonials from "./_sections-landing-pages/testimonials/testimonials";
import Footer from "./_sections-landing-pages/footer/footer";
import ProfileSection from "./_sections-landing-pages/profile/profile";

export default function Home() {
  return (
    <div className=" max-w-full h-screen w-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection/>
      <ProfileSection/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}
