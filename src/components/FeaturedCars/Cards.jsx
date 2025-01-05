import React, { useState, useEffect } from "react";
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCarAlt } from "react-icons/fa";
import { IoSpeedometerSharp } from "react-icons/io5";
import { BsFuelPumpFill } from "react-icons/bs";
import { IoColorFill } from "react-icons/io5";
import { GiGearStick } from "react-icons/gi";
import { IoCarSport } from "react-icons/io5";

const Cards = ({ slideCount, ...props }) => {
    const [showAll, setShowAll] = useState(false);

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
                "https://media.ed.edmunds-media.com/bmw/x5/2022/oem/2022_bmw_x5_4dr-suv_m50i_fq_oem_1_500.jpg",
                "https://media.ed.edmunds-media.com/bmw/x5/2022/oem/2022_bmw_x5_4dr-suv_m50i_fq_oem_2_500.jpg",
                "https://media.ed.edmunds-media.com/bmw/x5/2022/oem/2022_bmw_x5_4dr-suv_m50i_fq_oem_3_500.jpg",
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
                "https://media.ed.edmunds-media.com/ford/mustang/2021/oem/2021_ford_mustang_coupe_gt-premium_fq_oem_1_500.jpg",
                "https://media.ed.edmunds-media.com/ford/mustang/2021/oem/2021_ford_mustang_coupe_gt-premium_fq_oem_2_500.jpg",
            ],
        },
        {
            _id: "4",
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
            _id: "5",
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
        {
            _id: "9",
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
    ]);



    const outerSliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        prevArrow: <button className="slick-prev" style={{ background: 'black', color: 'red' }}>{'<'}</button>,
        nextArrow: <button className="slick-next" style={{ background: 'black', color: 'red' }}>{'>'}</button>,
        responsive: [
            {
                breakpoint: 1150,
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

    const innerSliderSettings = {
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

    const handleClick = () => {
        setShowAll(!showAll)
    }


    return (
        <div className="container mx-auto p-2 md:p-6">


            <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col items-center w-full justify-center my-6">
                <div className=" text-red text-[15px] lg:text-[25px] flex justify-center items-center  font-bold  w-full">
                    <IoCarSport className="mr-2" />
                    <h1 className="text-red tracking-[2px]  md:tracking-[10px]">NEW ARRIVALS</h1>
                </div>
                <h1 className='text-black text-[25px] text-center md:text-[35px] lg:text-[50px] xl:text-[60px]  font-bold '>Let's Check our Latest <span className='text-red'>Cars</span></h1>

                <div className="relative w-[30%] md:w-[20%] xl:w-[10%] bg-red h-1 bg-red-600">
                    <div className="absolute top-0 left-0 w-4 h-[6px] md:h-[5px] bg-white animate-move"></div>
                </div>

            </div>

            <Slider {...outerSliderSettings}>
                {cars.map((car) => (
                    <div key={car._id} className="">
                        <div className="m-2 border border-white bg-white p-4 rounded-lg shadow-lg  ">
                            <Slider {...innerSliderSettings}>
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

                            <div className="px-2">
                                <h2 className="text-lg md:text-xl font-semibold mt-4">{car.title}</h2>
                                <div className="flex items-center">
                                    <FaCarAlt className="text-red mr-2" />
                                    <p className="text-gray-600 font-semibold"> Model : <span className="font-normal">{car.year}</span></p>
                                </div>
                                <div className="flex items-center">
                                    <BsFuelPumpFill className="text-red mr-2" />
                                    <p className="text-gray-600 font-semibold"> Fuel : <span className="font-normal">{car.fuelType}</span> </p>
                                </div>
                                <div className="flex items-center">
                                    <IoSpeedometerSharp className="text-red mr-2" />
                                    <p className="text-gray-600 font-semibold ">Mileage : <span className="font-normal">{car.mileage} miles</span></p>
                                </div>
                                <div className="flex items-center">
                                    <GiGearStick className="text-red mr-2" />
                                    <p className="text-gray-600 font-semibold">Transmission : <span className="font-normal">{car.transmission}</span></p>
                                </div>
                                <div className="flex items-center">
                                    <IoColorFill className="mr-2 text-red" />
                                    <p className="text-gray-600 flex items-center font-semibold">
                                        Color :<span
                                            className="inline-block w-6 h-6 rounded-full mx-2 font-normal border border-gray2"
                                            style={{ backgroundColor: car.color }}
                                        ></span>
                                        {car.color}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-red font-bold">${car.price}</p>
                                </div>
                                {/* <p className="text-gray-600 mt-2 font-semibold">Description : <span className="font-normal">{car.description}</span> </p> */}
                                <button className="bg-red text-white mt-4 px-4 py-2 rounded-xl">
                                    Contact Seller
                                </button>
                            </div>
                        </div>
                        {/* Inner Slider for images */}

                    </div>
                ))}
            </Slider>
            {/* Show more button */}
            <div className="flex justify-center mt-6">
                <button
                    onClick={handleClick}
                    className="bg-red text-white px-6 py-2 rounded-lg hover:bg-blue"
                >
                    {showAll ? "Show Less" : "Show More"}
                </button>
            </div>
        </div>
    );
};

export default Cards;
