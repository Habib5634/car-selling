import React, { useState } from 'react'
import { IoCarSport } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { MdCarRepair } from "react-icons/md";
import { MdOutlinePriceChange } from "react-icons/md";
import Image from 'next/image';
const WhyChooseUs = () => {


  const [cardsData, setCardsData] = useState([
    {
      id: '01',
      title: 'Best Quality Cars',
      description: 'There are many variations of passages available, but the majority have suffered alteration.',
      icon: <IoCarSportOutline className="text-white text-9xl" />
    },
    {
      id: '02',
      title: 'Certified Mechanics',
      description: 'There are many variations of passages available, but the majority have suffered alteration.',
      icon: <GiPoliceOfficerHead className="text-white text-9xl" />
    },
    {
      id: '03',
      title: 'Best Quality Cars',
      description: 'There are many variations of passages available, but the majority have suffered alteration.',
      icon: <MdCarRepair className="text-white text-9xl" />
    },
    {
      id: '04',
      title: 'Certified Mechanics',
      description: 'There are many variations of passages available, but the majority have suffered alteration.',
      icon: <MdOutlinePriceChange className="text-white text-9xl" />
    },
  ]);

  return (
    <div id='category' className='bg-black py-4 sm:py-6 px-3 sm:px-6 md:px-10 w-full  relative'>
      <div className='max-w-[1440px] mx-auto w-full gap-5 z-[0.1] grid grid-cols-1 lg:grid-cols-2 py-10 px-4 lg:px-20 '>

        <div className='my-4 mx-1 md:mx-4'>
          <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col items-center w-full justify-center ">
            <div className=" text-red text-[15px] lg:text-[20px] xl:text-[25px] flex justify-center items-center pb-2  font-bold  w-full">
              <IoCarSport className="mr-2" />
              <h1 className="text-red tracking-[2px]  md:tracking-[10px]">WHY CHOOSE US</h1>
            </div>
            <h1 className='text-white text-center text-[14px] md:text-[18px] lg:text-[30px] xl:text-[60px]  leading-none font-bold '>We Are Dedicated <span className='text-red'>To Provide</span> Quality Service</h1>

            <div className="relative w-[30%] md:w-[20%] bg-red h-1 mt-4 bg-red-600 overflow-hidden">
              <div className="absolute top-0 left-0 w-4 h-[6px] md:h-[4px] bg-white animate-move"></div>
            </div>
            <p className='text-gray text-center mt-6 text-[12px] lg:text-[16px]'>There are many variations of passages available but the majority have suffered alteration in some form going to use a passage by injected humour randomised words which don't look even slightly believable.</p>
          </div>
          <img
            className='mt-2'
            data-aos="fade-right"
            data-aos-duration="1000"
            src="/images/about.png" alt="" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full'>
          {cardsData.map((card, index) => (
            <div
              key={index}
              className={`bg-white px-4 py-4 xl:py-10  rounded-2xl shadow-lg ${index === 0 || index === 2 ? 'md:translate-y-4' : ''}`} // Add margin-top for 
            >
              <div className='flex justify-center gap-4 mb-2 lg:mb-5 h-[30%]  xl:h-[40%]'>
                <div className='flex p-4 justify-evenly items-center w-20 h-20 xl:w-24 xl:h-24 bg-red rounded-full'>
                  {card.icon}
                </div>
                <h5 className='text-3xl xl:text-6xl font-bold text-transparent stroke-red' style={{ WebkitTextStroke: '2px red' }}>{card.id}</h5>
              </div>
              <h1 className='text-black text-[15px] xl:text-[25px] font-semibold'>
                {card.title}
              </h1>
              <p className='text-gray2 text-[12px] xl:text-[15px]'>
                {card.description}
              </p>

            </div>


          ))}
        </div>

      </div>
    </div >
  )
}

export default WhyChooseUs