import React, { useState, useEffect, useRef } from 'react';
import Filter from './Filter'

const FeaturedCars = () => {
  

  


  

 



  return (
    <div id='featured' className='bg-gray py-4 sm:py-6 px-3 sm:px-6 md:px-10 w-full relative'>
      <div className='max-w-[1440px] mx-auto w-full gap-5 z-[0.1] flex items-center justify-center flex-col '>
        <div className='bg-white px-5 sm:px-10 py-5 sm:py-10 border-white rounded-xl w-[98%] sm:w-[80%] md:w-[90%] lg:w-[90%] xl:w-[80%] min-h-[200px]'>
          <h2 className='text-black text-[15px] md:text-[25px] font-semibold text-start text-wrap lg:text-nowrap border-b-2 border-b-gray pb-[10px]'>
            Let's Find Your Dream Car
          </h2>
            <Filter />
        </div>
      </div>
    </div>
  );

};

export default FeaturedCars;
