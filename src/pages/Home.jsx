import React from "react";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import WhyChooseSection from "../components/landing/WhyChooseSection";
import PMSSection from "../components/landing/PMSSection";
import CMSSection from "../components/landing/CMSSection";
import BookingSection from "../components/landing/BookingSection";
import PanoramaSection from "../components/landing/PanoramaSection";
import StatsSection from "../components/landing/StatsSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import PartnersSection from "../components/landing/PartnersSection";
import OTASlider from "../components/landing/OTASlider";
import CTABanner from "../components/landing/CTABanner";
import FAQSection from "../components/landing/FAQSection";
import FooterSection from "../components/landing/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <WhyChooseSection />
      <PMSSection />
      <CMSSection />
      <OTASlider />
      <BookingSection />
      <PanoramaSection />
      <StatsSection />
      <TestimonialsSection />
      <PartnersSection />
      <CTABanner />
      <FAQSection />
      <FooterSection />
    </div>
  );
}
