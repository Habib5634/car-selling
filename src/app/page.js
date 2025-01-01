'use client'
import AboutUs from "@/components/AboutUs";
import CarCategories from "@/components/CarCategories";
import ContactUs from "@/components/Contactus";
import FeaturedCars from "@/components/FeaturedCars";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import OurFacts from "@/components/OurFacts";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Aos from "aos";
import { useEffect } from "react";
// import Image from "next/image";

export default function Home() {
  useEffect(() => {
    Aos.init({
      // Global settings here...
    });
  }, []);
  return (
    <>
      <div className="relative " >
        <Navbar />
        <div className="bg-herobg  relative bg-center bg-no-repeat bg-cover h-screen -mt-[83px]  " >
          <div className="absolute inset-0 z-0 bg-black bg-opacity-60 "></div>
          <HeroSection />
        </div>

        {/* other components */}
        <FeaturedCars />
        <OurFacts />
        <CarCategories />
        <AboutUs />
        <WhyChooseUs />
        <Testimonials />
        <ContactUs />
        <Footer />

      </div>
    </>
  );
}
