import React from 'react'
import { IoCarSport } from "react-icons/io5";
import Image from 'next/image';
const WhyChooseUs = () => {
  
  return (
    <div id='category' className='bg-black py-4 sm:py-6 px-3 sm:px-6 md:px-10 w-full max-h-screen relative'>
      <div className='max-w-[1440px] mx-auto w-full gap-5 z-[0.1] grid grid-cols-1 md:grid-cols-2 py-10 '>

        <div className=''>
          <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col items-center w-full justify-center my-6">
            <div className=" text-red text-[15px] lg:text-[25px] flex justify-center items-center  font-bold  w-full">
              <IoCarSport className="mr-2" />
              <h1 className="text-red tracking-[2px]  md:tracking-[10px]">WHY CHOOSE US</h1>
            </div>
            <h1 className='text-white text-[25px] md:text-[35px] lg:text-[50px] xl:text-[60px]  font-bold '>We Are Dedicated <span className='text-red'>To Provide</span> Quality Service</h1>

            <div className="relative w-[30%] md:w-[10%] bg-red h-1 bg-red-600">
              <div className="absolute top-0 left-0 w-4 h-[6px] md:h-[5px] bg-white animate-move"></div>
            </div>
            <p className='text-pink-200 mt-2 text-[16px]'>There are many variations of passages available but the majority have suffered alteration in some form going to use a passage by injected humour randomised words which don't look even slightly believable.</p>
          </div>
          <Image
            data-aos="fade-right" data-aos-duration="1000"
            src="/images/sports.png"
            alt='Car'
            layout="intrinsic" // Maintains original aspect ratio
            width={1920}       // Actual width
            height={540}      // Actual height
            className="w-full h-64 object-cover"
          />


        </div>

        <div></div>
      </div>
    </div>
  )
}

export default WhyChooseUs
