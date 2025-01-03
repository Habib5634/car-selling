import React, { useState } from 'react'
import { IoCarSport } from "react-icons/io5";
import Image from 'next/image';
const WhyChooseUs = () => {


  const [cardsData, setCardsData] = useState([
    {
      title: 'Best Quality Cars',
      description: 'There are many variations of passages available, but the majority have suffered alteration.',
      icon: '🚗',
    },
    {
      title: 'Certified Mechanics',
      description: 'There are many variations of passages available, but the majority have suffered alteration.',
      icon: '👨‍🔧',
    },
  ]);

  return (
    <div id='category' className='bg-black py-4 sm:py-6 px-3 sm:px-6 md:px-10 w-full  relative'>
      <div className='max-w-[1440px] mx-auto w-full gap-5 z-[0.1] grid grid-cols-1 md:grid-cols-2 py-10 px-20 '>

        <div className=''>
          <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col items-center w-full justify-center my-6">
            <div className=" text-red text-[15px] lg:text-[25px] flex justify-center items-center pb-2  font-bold  w-full">
              <IoCarSport className="mr-2" />
              <h1 className="text-red tracking-[2px]  md:tracking-[10px]">WHY CHOOSE US</h1>
            </div>
            <h1 className='text-white text-[25px] md:text-[35px] lg:text-[50px] xl:text-[60px]  leading-none font-bold '>We Are Dedicated <span className='text-red'>To Provide</span> Quality Service</h1>

            <div className="relative w-[30%] md:w-[20%] bg-red h-1 mt-4 bg-red-600">
              <div className="absolute top-0 left-0 w-4 h-[6px] md:h-[4px] bg-white animate-move"></div>
            </div>
            <p className='text-pink-200 mt-6 text-[16px]'>There are many variations of passages available but the majority have suffered alteration in some form going to use a passage by injected humour randomised words which don't look even slightly believable.</p>
          </div>
          <img
            className='-mt-12'
            data-aos="fade-right"
            data-aos-duration="1000"
            src="/images/sports.png" alt="" />


        </div>

        <div className='grid grid-cols-2 w-full'>
          {cardsData.map((card, index) => (
            <dic key={index} >
              <h1>
                {card.title}
              </h1>
              <p>
                {card.description}
              </p>
              <img src={card.icon} alt="" />

            </dic>


          ))}
        </div>

      </div>
    </div>
  )
}

export default WhyChooseUs
