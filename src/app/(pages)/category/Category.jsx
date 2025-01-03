import Navbar from '@/components/Navbar'
import React from 'react'
import Filter from './Filter'
import CategoryCard from './CategoryCards'

const Category = () => {
    return (
        <div className='relative'>
            <Navbar />
            <div className="bg-catbg relative -mt-[83px]  bg-center bg-no-repeat bg-cover h-[400px]   ">
                <div className="absolute inset-0 z-0 bg-black bg-opacity-80 "></div>
                <div className='flex justify-center items-center h-full '>
                    <h1 className='text-white z-50 text-3xl font-bold mt-20'>Category Page</h1>

                </div>
            </div>
            <div className='bg-white pt-4 md:pt-10 lg:pt-16 sm:pt-6 px-3 sm:px-6  w-full relative'>
                <div className='max-w-[1440px] mx-auto w-full gap-5 z-[0.1] flex items-center justify-center flex-col '>

                    <Filter />

                    <CategoryCard/>
                </div>
            </div>
        </div>
    )
}

export default Category
