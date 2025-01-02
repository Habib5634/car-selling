'use client'
import React, { useState, useEffect } from "react";
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCarAlt, FaRoad } from "react-icons/fa";
import { IoSpeedometerSharp } from "react-icons/io5";
import { BsFuelPumpFill } from "react-icons/bs";
import { IoColorFill } from "react-icons/io5";
import { GiGearStick, GiSteeringWheel } from "react-icons/gi";
import { IoCarSport } from "react-icons/io5";

const Cards = () => {
    // const [showAll, setShowAll] = useState(false);
    // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const [cars] = useState([
        {
            _id: "1",
            title: "2023 Tesla Model 3",
            price: 55000,
            year: 2023,
            mileage: 0,
            fuelType: "Electric",
            transmission: "Automatic",
            color: "White",
            description:
                "Brand new Tesla Model 3 with cutting-edge technology and zero emissions.",
            images: [
                "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_2_500.jpg",
                "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_3_500.jpg",
                "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_4_500.jpg",
            ],
        },
        {
            _id: "2",
            title: "2022 BMW X5",
            price: 65000,
            year: 2022,
            mileage: 12000,
            fuelType: "Gasoline",
            transmission: "Automatic",
            color: "Black",
            description:
                "Luxury SUV with advanced safety features and a spacious interior.",
            images: [
                "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_2_500.jpg",
                "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_3_500.jpg",
                "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_4_500.jpg",
            ],
        },
        {
            _id: "3",
            title: "2021 Ford Mustang GT",
            price: 45000,
            year: 2021,
            mileage: 8000,
            fuelType: "Gasoline",
            transmission: "Manual",
            color: "Red",
            description: "Powerful sports car with a V8 engine and iconic design.",
            images: [
                "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_2_500.jpg",
                "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_3_500.jpg",
                "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_4_500.jpg",
            ],
        },
        {
            _id: "4",
            title: "2022 BMW X5",
            price: 65000,
            year: 2022,
            mileage: 12000,
            fuelType: "Gasoline",
            transmission: "Automatic",
            color: "Black",
            description:
                "Luxury SUV with advanced safety features and a spacious interior.",
            images: [
                "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_2_500.jpg",
                "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_3_500.jpg",
                "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_4_500.jpg",
            ],
        },
        {
            _id: "5",
            title: "2022 BMW X5",
            price: 65000,
            year: 2022,
            mileage: 12000,
            fuelType: "Gasoline",
            transmission: "Automatic",
            color: "Black",
            description:
                "Luxury SUV with advanced safety features and a spacious interior.",
                images: [
                    "https://media.ed.edmunds-media.com/ford/mustang/2021/oem/2021_ford_mustang_coupe_gt-premium_fq_oem_1_500.jpg",
                    "https://media.ed.edmunds-media.com/ford/mustang/2021/oem/2021_ford_mustang_coupe_gt-premium_fq_oem_2_500.jpg",
                ],
        },
        {
            _id: "6",
            title: "2021 Ford Mustang GT",
            price: 45000,
            year: 2021,
            mileage: 8000,
            fuelType: "Gasoline",
            transmission: "Manual",
            color: "Red",
            description: "Powerful sports car with a V8 engine and iconic design.",
            images: [
                "https://media.ed.edmunds-media.com/ford/mustang/2021/oem/2021_ford_mustang_coupe_gt-premium_fq_oem_1_500.jpg",
                "https://media.ed.edmunds-media.com/ford/mustang/2021/oem/2021_ford_mustang_coupe_gt-premium_fq_oem_2_500.jpg",
            ],
        },
        {
            _id: "7",
            title: "2021 Ford Mustang GT",
            price: 45000,
            year: 2021,
            mileage: 8000,
            fuelType: "Gasoline",
            transmission: "Manual",
            color: "Red",
            description: "Powerful sports car with a V8 engine and iconic design.",
            images: [
                "https://media.ed.edmunds-media.com/ford/mustang/2021/oem/2021_ford_mustang_coupe_gt-premium_fq_oem_1_500.jpg",
                "https://media.ed.edmunds-media.com/ford/mustang/2021/oem/2021_ford_mustang_coupe_gt-premium_fq_oem_2_500.jpg",
            ],
        },
        {
            _id: "8",
            title: "2023 Tesla Model 3",
            price: 55000,
            year: 2023,
            mileage: 0,
            fuelType: "Electric",
            transmission: "Automatic",
            color: "White",
            description:
                "Brand new Tesla Model 3 with cutting-edge technology and zero emissions.",
            images: [
                "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_2_500.jpg",
                "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_3_500.jpg",
                "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_4_500.jpg",
            ],
        },
        // {
        //     _id: "9",
        //     title: "2023 Tesla Model 3",
        //     price: 55000,
        //     year: 2023,
        //     mileage: 0,
        //     fuelType: "Electric",
        //     transmission: "Automatic",
        //     color: "White",
        //     description:
        //         "Brand new Tesla Model 3 with cutting-edge technology and zero emissions.",
        //     images: [
        //         "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_2_500.jpg",
        //         "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_3_500.jpg",
        //         "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_4_500.jpg",
        //     ],
        // },
    ]);

    // const [visibleCars, setVisibleCars] = useState(cars.slice(0, 8)); // Initial default 8 cars

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        appendDots: dots => (
            <div style={{ position: 'absolute', bottom: '-20px', width: '100%', textAlign: 'center' }}>
                <ul style={{ margin: "0px", padding: "0px" }}> {dots} </ul>
            </div>
        ),
        dotsClass: "slick-dots slick-thumb",
    };

    // Show only 8 cars initially (2 rows if 4 columns per row)
    // useEffect(() => {
    //     const handleResize = () => {
    //         setScreenWidth(window.innerWidth);
    //     };

    //     // Initial resize check
    //     handleResize();

    //     // Update visible cars on resize
    //     window.addEventListener('resize', handleResize);

    //     // Cleanup event listener on component unmount
    //     return () => window.removeEventListener('resize', handleResize);
    // }, [cars]);

    // useEffect(() => {
    //     // Update visible cars based on screen size and showAll state
    //     if (showAll) {
    //         if (screenWidth < 640) {
    //             setVisibleCars(cars.slice(0, 8)); // Show all cars on small screens
    //         } else if (screenWidth < 768) {
    //             setVisibleCars(cars.slice(0, 12)); // Show 12 cars on medium screens
    //         } else {
    //             setVisibleCars(cars.slice(0, cars.length)); // Show all cars on large screens
    //         }
    //     } else {
    //         if (screenWidth < 640) {
    //             setVisibleCars(cars.slice(0, 4)); // Show 4 cars on small screens
    //         } else if (screenWidth < 770) {
    //             setVisibleCars(cars.slice(0, 6)); // Show 6 cars on medium screens
    //         } else {
    //             setVisibleCars(cars.slice(0, 8)); // Show 8 cars on larger screens
    //         }
    //     }
    // }, [showAll, screenWidth, cars]);

    return (
        <div className="container mx-auto p-2 md:px-6 md:py-12 lg:py-20">


            <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col items-center w-full justify-center my-6">
                <div className=" text-red text-[15px] lg:text-[25px] flex justify-center items-center  font-bold  w-full">
                    <IoCarSport className="mr-2" />
                    <h1 className="text-red tracking-[2px]  md:tracking-[10px]">NEW ARRIVALS</h1>
                </div>
                <h1 className='text-black text-[25px] md:text-[35px] lg:text-[50px] xl:text-[60px]  font-bold '>Let's Check Latest <span className='text-red'>Cars</span></h1>

                <div className="relative w-[10%] bg-red h-1 bg-red-600">
                    <div className="absolute top-0 left-0 w-4 h-[5px] bg-white animate-move"></div>
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {cars.map((car) => (
                    <div key={car._id} className="border  border-white bg-white p-4 rounded-lg shadow-shad">
                        {/* Carousel inside each card */}
                        <Slider {...sliderSettings}>
                            {car.images.map((image, index) => (
                                <div key={index} className="w-full h-48 overflow-hidden rounded-xl">
                                    <img
                                        src={image}
                                        alt={`${car.title} image ${index + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-2000 ease-in-out hover:scale-110 transform origin-center"
                                    />
                                </div>
                            ))}
                        </Slider>
                        <div className="px-2 flex flex-col justify-between ">
                            <h2 className="text-lg md:text-xl font-semibold mt-6    ">{car.title}</h2>
                            <div className="grid grid-cols-2 mt-3 gap-2">

                            <div className="flex items-center">
                                < FaCarAlt className="text-red mr-2" />
                                <p className="text-gray2 font-normal">Model: {car.year}</p>
                            </div>
                            <div className="flex items-center">
                                <BsFuelPumpFill className="text-red mr-2" />
                                <p className="text-gray2 font-normal">{car.fuelType} </p>
                            </div>
                            <div className="flex items-center">
                                <FaRoad className="text-red mr-2" />
                                <p className="text-gray2 font-semibold "><span className="font-normal">{car.mileage} miles</span></p>
                            </div>
                            <div className="flex items-center">
                                <GiSteeringWheel  className="text-red mr-2" />
                                <p className="text-gray2 font-semibold"> <span className="font-normal">{car.transmission}</span></p>
                            </div>

                            <div className="flex items-center">
                                <IoColorFill className="mr-2 text-red" />
                                <p className="text-gray2 flex items-center font-semibold">
                                    <span
                                        className="inline-block w-4 h-4 rounded-full mx-2 font-normal border border-gray2"
                                        style={{ backgroundColor: car.color }}
                                        ></span>
                                    {car.color}
                                </p>
                            </div>
                                        </div>

                            

                              
                            <div className="flex justify-between items-center gap-2 mt-4">
                            <p className="text-red text-2xl  font-bold">${car.price}</p>
                          
                            <button className="bg-red text-white  px-4 py-2 rounded-xl">
                                Contact Seller
                            </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Show more button */}
            <div className="flex justify-center mt-6">
                <button
                    // onClick={() => setShowAll(!showAll)}
                    className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
                >
                    Show More
                </button>
            </div>
        </div>
    );
};

export default Cards;
