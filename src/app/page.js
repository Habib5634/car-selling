'use client'
import AboutUs from "@/components/AboutUs";
import CarCategories from "@/components/CarCategories";
import ContactUs from "@/components/Contactus";
import FeaturedCars from "@/components/FeaturedCars";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import AuthComponent from "@/components/Navbar/AuthComponent";
import AuthModel from "@/components/Navbar/AuthModel";
import OurFacts from "@/components/OurFacts";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import { closeModal } from "@/Store/ReduxSlice/modalSlice";
import Aos from "aos";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
// import Image from "next/image";

export default function Home() {
  const showModal = useSelector((state) => state.modal.showModal);
  const dispatch = useDispatch();
  useEffect(() => {
    Aos.init({
      // Global settings here...
    });
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,

  };
  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  return (
    <>
      {showModal && <AuthModel onClose={handleCloseModal}>
        <AuthComponent />
      </AuthModel>}
      <div className="relative " >
        <Navbar />
        <div className="h-screen overflow-x-hidden relative -mt-[83px]">

          <div className="absolute inset-0 z-0 bg-black bg-opacity-20 "></div>
          <Slider {...settings} >

            <div className="bg-herobg bg-center bg-no-repeat bg-cover h-screen   " >
              <HeroSection />
            </div>
            <div className="bg-img2 bg-center bg-no-repeat bg-cover h-screen  " >
              <HeroSection />
            </div>
          </Slider>
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
