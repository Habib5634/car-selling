import { fetchCategories } from '@/Store/Actions/userActions';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react'
// import Image from 'next/image';
import { IoCarSport } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';

const CarCategories = () => {
  const { categories } = useSelector((state) => state.categories)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])
  console.log(categories)
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

  const handleCategoryClick = (category) => {
    redirect(`/category/${category?._id}`)
  };
  const getCategoryImage = (name) => {
    switch (name.toLowerCase()) {
      case 'SUV':
        return <img src="/images/suv.png" alt='cat img' className=" object-cover bg-transparent rounded-lg h-[136px] w-[136px]" />
      case 'sedan':
        return <img src="/images/sedan.png" alt='cat img' className=" object-cover bg-transparent rounded-lg h-[136px] w-[136px]" />
      case 'convertible':
        return <img src="/images/convertable.png" alt='cat img' className=" object-cover bg-transparent rounded-lg h-[136px] w-[136px]" />
      case 'compact':
        return <img src="/images/compact.png" alt='cat img' className=" object-cover bg-transparent rounded-lg h-[136px] w-[136px]" />
      case 'crossover':
        return <img src="/images/crossover.png" alt='cat img' className=" object-cover bg-transparent rounded-lg h-[136px] w-[136px]" />
      case 'wagon':
        return <img src="/images/wagon.png" alt='cat img' className=" object-cover bg-transparent rounded-lg h-[136px] w-[136px]" />
      case 'sports car':
        return <img src="/images/sports.png" alt='cat img' className=" object-cover bg-transparent rounded-lg h-[136px] w-[136px]" />
      case 'pickup truck':
        return <img src="/images/pickup.png" alt='cat img' className=" object-cover bg-transparent rounded-lg h-[136px] w-[136px]" />
      case 'coupe':
        return <img src="/images/coupe.png" alt='cat img' className=" object-cover bg-transparent rounded-lg h-[136px] w-[136px]" />
      case 'electric':
        return <img src="/images/electric.png" alt='cat img' className=" object-cover bg-transparent rounded-lg h-[136px] w-[136px]" />
      case 'luxury suv':
        return <img src="/images/luxury.png" alt='cat img' className=" object-cover bg-transparent rounded-lg h-[136px] w-[136px]" />
      default:
        return <img src="/images/luxury.png" alt='cat img' className=" object-cover bg-transparent rounded-lg h-[136px] w-[136px]" />;
    }
  }
  return (

    <div id='category' className='bg-white py-4 sm:py-6 px-3 sm:px-6 md:px-10 w-full relative'>
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
          data-aos-duration="1000"
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 py-2 md:py-4 md:px-[10%] ">
          {categories.map((category, i) => (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              key={category?._id}
              className="group flex flex-col items-center bg-white p-4  rounded-xl shadow-shad transform transition duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => handleCategoryClick(category)}
            >
              {getCategoryImage(category?.name)}
              <p className="mt-2 text-sm font-semibold group-hover:text-red">{category?.name}</p>
            </div>
          ))}
        </div>


      </div>
    </div >
  )
}

export default CarCategories