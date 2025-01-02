import React from 'react'
import { IoCarSport } from "react-icons/io5";
const CarCategories = () => {

  const carCategories = [
    // { name: 'Sedan', image: '/images/sedan.jpg' },
    // { name: 'Coupe', image: '/images/coupe.jpg' },
    // { name: 'Luxury', image: '/images/luxury.jpg' },
    { name: 'SUV', image: './images/suv.png' },
    { name: 'Compact', image: './images/sport.webp' },
  ];

  const handleCategoryClick = (categoryName) => {
    console.log(`Category clicked: ${categoryName}`);
  };
  return (

    <div id='category' className='bg-white py-4 sm:py-6 px-3 sm:px-6 md:px-10 w-full relative'>
      <div className='max-w-[1440px] mx-auto w-full gap-5 z-[0.1] flex items-center justify-center flex-col py-10 '>

        <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col items-center w-full justify-center my-6">
          <div className=" text-red text-[15px] lg:text-[25px] flex justify-center items-center  font-bold  w-full">
            <IoCarSport className="mr-2" />
            <h1 className="text-red tracking-[2px]  md:tracking-[10px]">NEW CATAGORY</h1>
          </div>
          <h1 className='text-black text-[25px] md:text-[35px] lg:text-[50px] xl:text-[60px]  font-bold '>Car By Body <span className='text-red'>Type</span></h1>

          <div className="relative w-[10%] bg-red h-1 bg-red-600">
            <div className="absolute top-0 left-0 w-4 h-[5px] bg-white animate-move"></div>
          </div>

        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
          {carCategories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => handleCategoryClick(category.name)}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-40 h-40 object-cover rounded-lg"
              />
              <p className="mt-2 text-lg font-semibold">{category.name}</p>
            </div>
          ))}
        </div>


      </div>
    </div >
  )
}

export default CarCategories
