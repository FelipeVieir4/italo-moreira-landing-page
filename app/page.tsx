import React from "react";
import Navbar from "@/components/navbar/navbar";
import HeroSection from "./_sections-landing-pages/hero/hero-section";
import ServicesSection from "./_sections-landing-pages/portifolio/services";
// import Testimonials from "./_sections-landing-pages/testimonials/testimonials";
import Footer from "./_sections-landing-pages/footer/footer";
import ProfileSection from "./_sections-landing-pages/profile/profile";
import FAQSection from "./_sections-landing-pages/FAQ/faq";
import WhatsAppFloatingButton from "@/components/btn-WhatsAppFloatingButton/WhatsAppFloatingButton";
import LocationPage from "./_sections-landing-pages/location/page";
// import GoogleRatingPage from "./_sections-landing-pages/google-rating/page";

export default function Home() {
  return (
    <div className=" max-w-full h-screen w-screen">
      <div className="mb-[10vh] ">
        <Navbar />
      </div>
      <WhatsAppFloatingButton />
      <HeroSection />
      <ServicesSection />
      <ProfileSection />
      {/* <GoogleRatingPage /> */}
      <LocationPage />
      {/* <Testimonials /> */}
      <FAQSection />
      <Footer />
    </div>
  );
}
