import React from 'react'
// import Image from 'next/image';
import { IoCarSport } from "react-icons/io5";

const CarCategories = () => {

  const carCategories = [

    { name: 'SUV', image: '/images/suv.png' },
    { name: 'Sedan', image: '/images/sedan.png' },
    { name: 'Convertible', image: '/images/convertable.png' },
    { name: 'Compact', image: '/images/compact.png' },
    { name: 'Crossover', image: '/images/crossover.png' },
    { name: 'Wagon', image: '/images/wagon.png' },
    { name: 'Sports', image: '/images/sports.png' },
    { name: 'Pickup', image: '/images/pickup.png' },
    { name: 'Family MPV', image: '/images/family.png' },
    { name: 'Coupe', image: '/images/coupe.png' },
    { name: 'Electric', image: '/images/electric.png' },
    { name: 'Luxury', image: '/images/luxury.png' },

  ];

  const handleCategoryClick = (categoryName) => {
    console.log(`Category clicked: ${categoryName}`);
  };
  return (

    <div id='category' className='bg-gray py-4 sm:py-6 px-3 sm:px-6 md:px-10 w-full relative'>
      <div className='max-w-[1440px] mx-auto w-full gap-5 z-[0.1] flex items-center justify-center flex-col py-10 '>

        <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col items-center w-full justify-center my-6">
          <div className=" text-red text-[15px] lg:text-[25px] flex justify-center items-center  font-bold  w-full">
            <IoCarSport className="mr-2" />
            <h1 className="text-red tracking-[2px]  md:tracking-[10px]">NEW CATAGORY</h1>
          </div>
          <h1 className='text-black text-[25px] md:text-[35px] lg:text-[50px] xl:text-[60px]  font-bold '>Car By Body <span className='text-red'>Type</span></h1>

          <div className="relative w-[30%] md:w-[10%] bg-red h-1 bg-red-600">
            <div className="absolute top-0 left-0 w-4 h-[6px] md:h-[5px] bg-white animate-move"></div>
          </div>

        </div>
        <div data-aos="fade-up"
          data-aos-duration="3000"
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 py-2 md:py-4 md:px-[10%] ">
          {carCategories.map((category) => (
            <div
              key={category.name}
              className="group flex flex-col items-center bg-white p-4  rounded-xl shadow-2xl transform transition duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => handleCategoryClick(category.name)}
            >
              <img
                src={category.image}
                alt={category.name}
                className=" object-cover bg-transparent rounded-lg"
              />
              <p className="mt-2 text-sm font-semibold group-hover:text-red">{category.name}</p>
            </div>
          ))}
        </div>


      </div>
    </div >
  )
}

export default CarCategories
