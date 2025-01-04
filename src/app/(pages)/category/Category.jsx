'use client'
import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import Filter from './Filter'
import CategoryCard from './CategoryCards'
import { useParams } from 'next/navigation'
import axios from 'axios'
import { API_URL } from '@/utils/ApiUrl'

const Category = () => {
    const {id} = useParams()

    const [category,setCategory]= useState({})
    const [catCars,setCatCars] = useState([])
    const fetchCatDetail = async()=>{
        try {
            const {data} = await axios.get(`${API_URL}/user/category/${id}`)
            setCategory(data?.category)
        } catch (error) {
            console.log(error)
        }
    }
    const fetchCatCars = async()=>{
        try {
            const {data} = await axios.get(`${API_URL}/user/category-products/${id}`)
            setCatCars(data?.cars)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchCatDetail()
        fetchCatCars()
    },[])
    return (
        <div className='relative'>
            <Navbar />
            <div className="bg-catbg relative -mt-[83px]  bg-center bg-no-repeat bg-cover h-[400px]   ">
                <div className="absolute inset-0 z-0 bg-black bg-opacity-80 "></div>
                <div className='flex justify-center items-center h-full flex-col '>
                    <h1 className='text-white z-50 text-3xl font-bold mt-20 rale'>{category?.name}</h1>
                    <h1 className='text-white z-50 text-xl font-bold mt-4 robo'>{category?.description}</h1>

                </div>
            </div>
            <div className='bg-white pt-4 md:pt-10 lg:pt-16 sm:pt-6 px-3 sm:px-6  w-full relative'>
                <div className='max-w-[1440px] mx-auto w-full gap-5 z-[0.1] flex items-center justify-center flex-col '>

                    <Filter />

                    <CategoryCard cars={catCars}/>
                </div>
            </div>
        </div>
    )
}

export default Category
