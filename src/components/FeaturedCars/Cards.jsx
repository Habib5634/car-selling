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
import { API_URL } from "@/utils/ApiUrl";
import axios from "axios";
import Link from "next/link";

const Cards = () => {
    const [cars, setCars] = useState([])
   
    const fetchLatestCars = async () => {
        try {
            const { data } = await axios.get(`${API_URL}/user/latest-cars`)
            setCars(data?.cars)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchLatestCars()
    }, [])
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



    const outerSliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        prevArrow: <button className="slick-prev" style={{ background: 'black', color: 'red' }}>{'<'}</button>,
        nextArrow: <button className="slick-next" style={{ background: 'black', color: 'red' }}>{'>'}</button>,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
   
    console.log(cars)
    return (
        <div id="latest" className="container mx-auto p-2 md:px-6 md:py-12 lg:py-20">


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

            <Slider {...outerSliderSettings}>
                {cars?.map((car) => (
                    <div key={car._id} className="h-[456px]">
                        <div className="m-2 border border-white bg-white p-4 rounded-lg shadow-shad  ">
                            {/* Check if car.images has more than one image */}
                            <Link href={`/car-detail/${car?._id}`}>
                            {car?.images?.length > 1 ? (
                                <Slider {...sliderSettings}>
                                    {car.images.map((image, index) => (
                                        <div
                                            key={index}
                                            className="w-full max-h-48 overflow-hidden rounded-xl"
                                        >
                                            <img
                                                src={image}
                                                alt={`${car.title} image ${index + 1}`}
                                                className="w-full h-full object-cover transition-transform duration-2000 ease-in-out hover:scale-110 transform origin-center"
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            ) : (
                                // If only one image, display it directly without slider
                                <div className="w-full max-h-48 overflow-hidden rounded-xl">
                                    <img
                                        src={car.images[0]} // Display the single image
                                        alt={`${car.title} image`}
                                        className="w-full h-full object-cover transition-transform duration-2000 ease-in-out hover:scale-110 transform origin-center"
                                    />
                                </div>
                            )}
                            </Link>
                            <div className="px-2 flex flex-col justify-between ">
                                <h2 className="text-lg md:text-xl font-semibold mt-6   text-nowrap text-ellipsis overflow-hidden ">{car.title}</h2>
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
                                        <GiSteeringWheel className="text-red mr-2" />
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
                    </div>
                ))}
            </Slider>

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
