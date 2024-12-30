'use client'
import React from 'react'
import 'aos/dist/aos.css';
const HeroSection = () => {
  return (
    <div id='home' data-aos="fade-up" data-aos-duration="1000" className={`relative w-full  h-full max-w-[1440px] mx-auto   px-5 md:px-8 lg:px-10 xl:px-20 2xl:px-10`}>
        {/* Transparent Overlay */}
       
                <div className='grid grid-cols-1 h-full md:grid-cols-2'>
                    <div className='flex flex-col h-full justify-center items-start md:items-start'>
                        <h1 data-aos="fade-up" data-aos-duration="1000" className='text-white text-[50px] md:text-[60px]  font-bold text-start leading-none text-wrap lg:text-nowrap'>Innovative Solutions for Industrial Growth</h1>
                        
                        <p data-aos="fade-up" data-aos-duration="1000" className='text-white text-start mt-5 text-20 font-semibold'>Industrial Machinery Brokerage</p>
                        <p data-aos="fade-up" data-aos-duration="1000" className='text-white text-start mt-5 text-20 font-semibold'>Software Solutions</p>
                        <p data-aos="fade-up" data-aos-duration="1000" className='text-white text-start mt-5 text-20 font-semibold'>Custom Prototypes</p>
               
                        <button data-aos="fade-up" data-aos-duration="1000" className={` mt-8 px-3 md:px-5 py-2 anim5 rounded-lg text-center text-[15px] hover:bg-blueDark anim3 text-white font-bold uppercase bg-transparent border-2 border-white`}>Contact Us</button>
                    </div>

                </div>

            </div>
  )
}

export default HeroSection