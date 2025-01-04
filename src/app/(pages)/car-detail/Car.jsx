'use client'
import { API_URL } from '@/utils/ApiUrl';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Car = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // const car = {
    //     location: {
    //         city: "San Francisco",
    //         state: "California",
    //         country: "USA"
    //     },
    //     ownerDetails: {
    //         name: "John Doe",
    //         contactNumber: "+1234567890",
    //         email: "john.doe@example.com"
    //     },
    //     _id: "677389a0aa3b5ef5a5cf6b84",
    //     title: "2023 Tesla Model 3",
    //     carCategory: {
    //         _id: "67737a6e191b6ca178ef90cd",
    //         name: "Sedan"
    //     },
    //     make: "Tesla",
    //     model: "Model 3",
    //     year: 2023,
    //     price: 55000,
    //     mileage: 0,
    //     fuelType: "Electric",
    //     transmission: "Automatic",
    //     description: "Brand new Tesla Model 3 with cutting-edge technology and zero emissions.",
    //     color: "White",
    //     horsePower: 1200,
    //     engine: "manual",
    //     gears: "10",
    //     images: [
    //         "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_4_500.jpg",
    //         "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_7_500.jpg",
    //         "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_5_500.jpg",
    //         "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_1_500.jpg",
    //         "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_2_500.jpg",
    //         "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_3_500.jpg",
    //         "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_4_500.jpg"
    //     ],
    //     sellerId: {
    //         _id: "6772b3f85c5cff5a6cd9ca08",
    //         firstName: "Raja Habib",
    //         lastName: "Ahmed",
    //         email: "habib@gmail.com"
    //     },
    //     carCondition: "new",
    //     isActive: true,
    //     status: "accepted",
    //     createdAt: "2024-12-31T06:05:20.394Z",
    //     updatedA: "2025-01-01T05:42:26.833Z",
    //     __v: 0,
    //     featured: false
    // }
const [car,setCar] = useState({})
const {id} = useParams()
const fetchCarDetail=async()=>{
    try {
        const {data} = await axios.get(`${API_URL}/user/get-single-car/${id}`)
        setCar(data?.car)
    } catch (error) {
        console.log(error)
    }
}
useEffect(()=>{
    fetchCarDetail()
},[])
// Handler to go to the next image
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % car?.images?.length);
    };

    // Handler to go to the previous image
    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? car?.images?.length - 1 : prevIndex - 1
        );
    };

    // Handler to set the main image when clicking on thumbnails
    const setMainImage = (index) => {
        setCurrentIndex(index);
    };
    return (
        <>
        <div className='grid grid-cols-5 gap-6 pb-10'>
            <div className='col-span-5 lg:col-span-3'>
                <div className='flex justify-between px-4  md:px-6  lg:px-10'>
                    <div className='flex flex-col mb-4 '>
                        <h1 className='text-2xl font-semibold text-black'>{car?.title}</h1>
                        <h3 className='flex items-center gap-1  text-gray2'><FaLocationDot className='text-gray2' /> {car?.location?.city}, {car?.location?.state}, {car?.location?.country}</h3>
                    </div>
                    <h1 className='rale text-3xl text-black font-semibold'>${car?.price}</h1>

                </div>
                <div className="relative flex justify-center items-center">
                    <button
                        onClick={prevImage}
                        className="absolute flex justify-center items-center left-0 w-10 h-10 text-24 leading-none bg-white text-purplelight rounded-full "
                    >
                        <FaAngleLeft />
                    </button>
                    <div className='px-4 pb-4 md:px-6 md:pb-6 lg:px-10 lg:pb-10'>

                        <img
                            src={car?.images && car?.images?.length > 0 ? car?.images[currentIndex] : '/placeholder.jpg'}
                            alt={`Slide ${currentIndex + 1}`}
                            className="w-full h-[450px] object-cover"
                            />
                    </div>
                    <button
                        onClick={nextImage}
                        className="absolute flex justify-center items-center right-0 w-10 h-10 text-24 leading-none bg-white text-purplelight rounded-full hover:bg-gray-600"
                        >
                        <FaAngleRight />
                    </button>

                </div>
                <div className="flex justify-center items-center overflow-auto scrollbar-hide gap-2 mt-4">
                    {car?.images?.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            className={` object-cover border-2 rounded-lg cursor-pointer anim3 ${index === currentIndex ? 'border-purplelight w-20 h-20' : 'border-gray w-16 h-16'
                            }`}
                            onClick={() => setMainImage(index)}
                            />
                        ))}
                </div>

              
            </div>
            <div className=' col-span-5 lg:col-span-2 shadow-shad p-5 h-fit '>
                <h1 className='text-xl font-medium robo uppercase text-black '>Specifications</h1>
                <div className='flex justify-between mt-8 rale pb-3 mb-2 border-b border-gray'>
                    <h1 className='font-semibold text-gray2'>Make</h1>
                    <h3 className='text-gray2'>{car?.make}</h3>
                </div>
                <div className='flex justify-between  rale pb-3 mb-2 border-b border-gray'>
                    <h1 className='font-semibold text-gray2'>Model</h1>
                    <h3 className='text-gray2'>{car?.model}</h3>
                </div>
                <div className='flex justify-between  rale pb-3 mb-2 border-b border-gray'>
                    <h1 className='font-semibold text-gray2'>Condition</h1>
                    <h3 className='text-gray2'>{car?.carCondition}</h3>
                </div>
                <div className='flex justify-between  rale pb-3 mb-2 border-b border-gray'>
                    <h1 className='font-semibold text-gray2'>Year</h1>
                    <h3 className='text-gray2'>{car?.year}</h3>
                </div>
                <div className='flex justify-between  rale pb-3 mb-2 border-b border-gray'>
                    <h1 className='font-semibold text-gray2'>Mileage</h1>
                    <h3 className='text-gray2'>{car?.mileage}</h3>
                </div>
                <div className='flex justify-between  rale pb-3 mb-2 border-b border-gray'>
                    <h1 className='font-semibold text-gray2'>Transmission</h1>
                    <h3 className='text-gray2'>{car?.transmission}</h3>
                </div>
                <div className='flex justify-between  rale pb-3 mb-2 border-b border-gray'>
                    <h1 className='font-semibold text-gray2'>Interior Color</h1>
                    <h3 className='text-gray2'>{car?.color}</h3>
                </div>
                <div className='flex justify-between  rale pb-3 mb-2 border-b border-gray'>
                    <h1 className='font-semibold text-gray2'>Engine</h1>
                    <h3 className='text-gray2'>{car?.engine}</h3>
                </div>
                <div className='flex justify-between  rale pb-3 mb-2 border-b border-gray'>
                    <h1 className='font-semibold text-gray2'>Fuel Type</h1>
                    <h3 className='text-gray2'>{car?.fuelType}</h3>
                </div>
                <div className='flex justify-between  rale pb-3 mb-2 border-b border-gray'>
                    <h1 className='font-semibold text-gray2'>No of Gears</h1>
                    <h3 className='text-gray2'>{car?.gears}</h3>
                </div>
                <div className='flex justify-between  rale pb-3 mb-2 border-b border-gray'>
                    <h1 className='font-semibold text-gray2'>Location</h1>
                    <h3 className='text-gray2'>{car?.location?.city}</h3>
                </div>
                <div className='flex flex-col w-full gap-3 rale pb-3 mb-2 mt-5'>
                    <button className='bg-green py-2 px-4 rounded-md text-white'>Chat With seller</button>
                    <button className='bg-red py-2 px-4 rounded-md text-white'>Seller Contact Info</button>
                </div>

            </div>
        
        <div className='mt-8 flex flex-col gap-6 rale text-gray2 col-span-5 lg:col-span-3'>
                    <h1 className='text-xl font-medium robo uppercase text-black '>Vehical Description</h1>
                    <p>This is my car, a <strong>{car?.title}</strong>. It is a stunning vehicle with a perfect combination of style and functionality. Manufactured by <strong>{car?.make}</strong>, this <strong>{car?.year}</strong> model is a true masterpiece that stands out with its <strong>{car?.color}</strong> finish.</p>

                    <p>Located in <strong>{car?.location?.city}, {car?.location?.state}, {car?.location?.country}</strong>, this car is ideal for anyone looking for a high-performance, reliable vehicle. It belongs to the <strong>{car?.carCategory?.name}</strong> category and is in <strong>{car?.carCondition}</strong> condition, ensuring an excellent experience for the owner.</p>

                    <p>This car features <strong>{car?.horsePower} horsepower</strong>, a <strong>{car?.engine}</strong> engine, and a <strong>{car?.transmission}</strong> transmission with <strong>{car?.gears} gears</strong>. It offers seamless driving with exceptional power and precision. With <strong>{car?.mileage} mileage</strong>, it is ready to hit the road without any limitations.</p>

                    <p>The vehicle comes with a detailed description: <em>"{car?.description}"</em>, highlighting its unique features and appeal. Priced at <strong>${car?.price}</strong>, it offers great value for anyone seeking quality and performance in a car.</p>

                    <p>The current owner, <strong>{car?.ownerDetails?.name}</strong>, is available for inquiries and can be contacted at <strong>{car?.ownerDetails?.contactNumber}</strong> or via email at <strong>{car?.ownerDetails?.email}</strong>. Feel free to reach out for more details or to schedule a viewing.</p>

                    <p>Whether you're looking for a car that provides comfort, performance, or both, the <strong>{car?.title}</strong> is a fantastic choice that caters to all your needs. Don't miss the chance to own this incredible vehicle!</p>

                </div>
        </div>
                        </>
    )
}

export default Car
