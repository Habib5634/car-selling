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
import Link from "next/link";

const CategoryCard = ({ cars }) => {
    // const [showAll, setShowAll] = useState(false);
    // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // const [cars] = useState([
    //     {
    //         _id: "1",
    //         title: "2023 Tesla Model 3",
    //         price: 55000,
    //         year: 2023,
    //         mileage: 0,
    //         fuelType: "Electric",
    //         transmission: "Automatic",
    //         color: "White",
    //         description:
    //             "Brand new Tesla Model 3 with cutting-edge technology and zero emissions.",
    //         images: [
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_2_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_3_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_4_500.jpg",
    //         ],
    //     },
    //     {
    //         _id: "2",
    //         title: "2022 BMW X5",
    //         price: 65000,
    //         year: 2022,
    //         mileage: 12000,
    //         fuelType: "Gasoline",
    //         transmission: "Automatic",
    //         color: "Black",
    //         description:
    //             "Luxury SUV with advanced safety features and a spacious interior.",
    //         images: [
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_2_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_3_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_4_500.jpg",
    //         ],
    //     },
    //     {
    //         _id: "3",
    //         title: "2021 Ford Mustang GT",
    //         price: 45000,
    //         year: 2021,
    //         mileage: 8000,
    //         fuelType: "Gasoline",
    //         transmission: "Manual",
    //         color: "Red",
    //         description: "Powerful sports car with a V8 engine and iconic design.",
    //         images: [
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_2_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_3_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_4_500.jpg",
    //         ],
    //     },
    //     {
    //         _id: "4",
    //         title: "2022 BMW X5",
    //         price: 65000,
    //         year: 2022,
    //         mileage: 12000,
    //         fuelType: "Gasoline",
    //         transmission: "Automatic",
    //         color: "Black",
    //         description:
    //             "Luxury SUV with advanced safety features and a spacious interior.",
    //         images: [
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_2_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_3_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_4_500.jpg",
    //         ],
    //     },
    //     {
    //         _id: "5",
    //         title: "2022 BMW X5",
    //         price: 65000,
    //         year: 2022,
    //         mileage: 12000,
    //         fuelType: "Gasoline",
    //         transmission: "Automatic",
    //         color: "Black",
    //         description:
    //             "Luxury SUV with advanced safety features and a spacious interior.",
    //             images: [
    //                 "https://media.ed.edmunds-media.com/ford/mustang/2021/oem/2021_ford_mustang_coupe_gt-premium_fq_oem_1_500.jpg",
    //                 "https://media.ed.edmunds-media.com/ford/mustang/2021/oem/2021_ford_mustang_coupe_gt-premium_fq_oem_2_500.jpg",
    //             ],
    //     },
    //     {
    //         _id: "6",
    //         title: "2021 Ford Mustang GT",
    //         price: 45000,
    //         year: 2021,
    //         mileage: 8000,
    //         fuelType: "Gasoline",
    //         transmission: "Manual",
    //         color: "Red",
    //         description: "Powerful sports car with a V8 engine and iconic design.",
    //         images: [
    //             "https://media.ed.edmunds-media.com/ford/mustang/2021/oem/2021_ford_mustang_coupe_gt-premium_fq_oem_1_500.jpg",
    //             "https://media.ed.edmunds-media.com/ford/mustang/2021/oem/2021_ford_mustang_coupe_gt-premium_fq_oem_2_500.jpg",
    //         ],
    //     },
    //     {
    //         _id: "7",
    //         title: "2021 Ford Mustang GT",
    //         price: 45000,
    //         year: 2021,
    //         mileage: 8000,
    //         fuelType: "Gasoline",
    //         transmission: "Manual",
    //         color: "Red",
    //         description: "Powerful sports car with a V8 engine and iconic design.",
    //         images: [
    //             "https://media.ed.edmunds-media.com/ford/mustang/2021/oem/2021_ford_mustang_coupe_gt-premium_fq_oem_1_500.jpg",
    //             "https://media.ed.edmunds-media.com/ford/mustang/2021/oem/2021_ford_mustang_coupe_gt-premium_fq_oem_2_500.jpg",
    //         ],
    //     },
    //     {
    //         _id: "8",
    //         title: "2023 Tesla Model 3",
    //         price: 55000,
    //         year: 2023,
    //         mileage: 0,
    //         fuelType: "Electric",
    //         transmission: "Automatic",
    //         color: "White",
    //         description:
    //             "Brand new Tesla Model 3 with cutting-edge technology and zero emissions.",
    //         images: [
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_2_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_3_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_4_500.jpg",
    //         ],
    //     },
    //     {
    //         _id: "9",
    //         title: "2023 Tesla Model 3",
    //         price: 55000,
    //         year: 2023,
    //         mileage: 0,
    //         fuelType: "Electric",
    //         transmission: "Automatic",
    //         color: "White",
    //         description:
    //             "Brand new Tesla Model 3 with cutting-edge technology and zero emissions.",
    //         images: [
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_2_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_3_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_4_500.jpg",
    //         ],
    //     },
    //     {
    //         _id: "9",
    //         title: "2023 Tesla Model 3",
    //         price: 55000,
    //         year: 2023,
    //         mileage: 0,
    //         fuelType: "Electric",
    //         transmission: "Automatic",
    //         color: "White",
    //         description:
    //             "Brand new Tesla Model 3 with cutting-edge technology and zero emissions.",
    //         images: [
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_2_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_3_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_4_500.jpg",
    //         ],
    //     },
    //     {
    //         _id: "9",
    //         title: "2023 Tesla Model 3",
    //         price: 55000,
    //         year: 2023,
    //         mileage: 0,
    //         fuelType: "Electric",
    //         transmission: "Automatic",
    //         color: "White",
    //         description:
    //             "Brand new Tesla Model 3 with cutting-edge technology and zero emissions.",
    //         images: [
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_2_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_3_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_4_500.jpg",
    //         ],
    //     },
    //     {
    //         _id: "9",
    //         title: "2023 Tesla Model 3",
    //         price: 55000,
    //         year: 2023,
    //         mileage: 0,
    //         fuelType: "Electric",
    //         transmission: "Automatic",
    //         color: "White",
    //         description:
    //             "Brand new Tesla Model 3 with cutting-edge technology and zero emissions.",
    //         images: [
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_2_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_3_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_4_500.jpg",
    //         ],
    //     },
    //     {
    //         _id: "9",
    //         title: "2023 Tesla Model 3",
    //         price: 55000,
    //         year: 2023,
    //         mileage: 0,
    //         fuelType: "Electric",
    //         transmission: "Automatic",
    //         color: "White",
    //         description:
    //             "Brand new Tesla Model 3 with cutting-edge technology and zero emissions.",
    //         images: [
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_2_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_3_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_4_500.jpg",
    //         ],
    //     },
    //     {
    //         _id: "9",
    //         title: "2023 Tesla Model 3",
    //         price: 55000,
    //         year: 2023,
    //         mileage: 0,
    //         fuelType: "Electric",
    //         transmission: "Automatic",
    //         color: "White",
    //         description:
    //             "Brand new Tesla Model 3 with cutting-edge technology and zero emissions.",
    //         images: [
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_2_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_3_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_4_500.jpg",
    //         ],
    //     },
    //     {
    //         _id: "9",
    //         title: "2023 Tesla Model 3",
    //         price: 55000,
    //         year: 2023,
    //         mileage: 0,
    //         fuelType: "Electric",
    //         transmission: "Automatic",
    //         color: "White",
    //         description:
    //             "Brand new Tesla Model 3 with cutting-edge technology and zero emissions.",
    //         images: [
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_2_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_3_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_4_500.jpg",
    //         ],
    //     },
    //     {
    //         _id: "9",
    //         title: "2023 Tesla Model 3",
    //         price: 55000,
    //         year: 2023,
    //         mileage: 0,
    //         fuelType: "Electric",
    //         transmission: "Automatic",
    //         color: "White",
    //         description:
    //             "Brand new Tesla Model 3 with cutting-edge technology and zero emissions.",
    //         images: [
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_2_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_3_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_4_500.jpg",
    //         ],
    //     },
    //     {
    //         _id: "9",
    //         title: "2023 Tesla Model 3",
    //         price: 55000,
    //         year: 2023,
    //         mileage: 0,
    //         fuelType: "Electric",
    //         transmission: "Automatic",
    //         color: "White",
    //         description:
    //             "Brand new Tesla Model 3 with cutting-edge technology and zero emissions.",
    //         images: [
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_2_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_3_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_4_500.jpg",
    //         ],
    //     },
    //     {
    //         _id: "9",
    //         title: "2023 Tesla Model 3",
    //         price: 55000,
    //         year: 2023,
    //         mileage: 0,
    //         fuelType: "Electric",
    //         transmission: "Automatic",
    //         color: "White",
    //         description:
    //             "Brand new Tesla Model 3 with cutting-edge technology and zero emissions.",
    //         images: [
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_2_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_3_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_4_500.jpg",
    //         ],
    //     },
    //     {
    //         _id: "9",
    //         title: "2023 Tesla Model 3",
    //         price: 55000,
    //         year: 2023,
    //         mileage: 0,
    //         fuelType: "Electric",
    //         transmission: "Automatic",
    //         color: "White",
    //         description:
    //             "Brand new Tesla Model 3 with cutting-edge technology and zero emissions.",
    //         images: [
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_2_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_3_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_4_500.jpg",
    //         ],
    //     },
    //     {
    //         _id: "9",
    //         title: "2023 Tesla Model 3",
    //         price: 55000,
    //         year: 2023,
    //         mileage: 0,
    //         fuelType: "Electric",
    //         transmission: "Automatic",
    //         color: "White",
    //         description:
    //             "Brand new Tesla Model 3 with cutting-edge technology and zero emissions.",
    //         images: [
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_2_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_3_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_4_500.jpg",
    //         ],
    //     },
    //     {
    //         _id: "9",
    //         title: "2023 Tesla Model 3",
    //         price: 55000,
    //         year: 2023,
    //         mileage: 0,
    //         fuelType: "Electric",
    //         transmission: "Automatic",
    //         color: "White",
    //         description:
    //             "Brand new Tesla Model 3 with cutting-edge technology and zero emissions.",
    //         images: [
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_2_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_3_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_4_500.jpg",
    //         ],
    //     },
    //     {
    //         _id: "9",
    //         title: "2023 Tesla Model 3",
    //         price: 55000,
    //         year: 2023,
    //         mileage: 0,
    //         fuelType: "Electric",
    //         transmission: "Automatic",
    //         color: "White",
    //         description:
    //             "Brand new Tesla Model 3 with cutting-edge technology and zero emissions.",
    //         images: [
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_2_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_3_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_4_500.jpg",
    //         ],
    //     },
    //     {
    //         _id: "9",
    //         title: "2023 Tesla Model 3",
    //         price: 55000,
    //         year: 2023,
    //         mileage: 0,
    //         fuelType: "Electric",
    //         transmission: "Automatic",
    //         color: "White",
    //         description:
    //             "Brand new Tesla Model 3 with cutting-edge technology and zero emissions.",
    //         images: [
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_2_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_3_500.jpg",
    //             "https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_4_500.jpg",
    //         ],
    //     },
    // ]);

    console.log(cars)
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



    return (
        <div className="container mx-auto p-2  md:py-12 ">

            {cars?.length > 0 ?

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {(cars?.length > 0 ? cars : [])?.map((car, i) => (
                        <div key={i} className="border  border-white bg-white p-4 rounded-lg shadow-shad">
                            {/* Carousel inside each card */}
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
                    ))}
                </div>
                : <p className="text-center w-full text-black rale">No cars found this category</p>}

        </div>
    );
};

export default CategoryCard;