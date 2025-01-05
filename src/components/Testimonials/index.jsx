import React, { useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Testimonials = () => {

  const [comments] = useState([
    {
      id: 1,
      image: '/images/suv.png',
      text: 'Great product and fast delivery! lorem lorem Great product and fast delivery! lorem lorem Great product and fast delivery! lorem lorem',
      name: 'John Doe',
      job: 'Software Engineer',
    },
    {
      id: 2,
      image: '/images/suv.png',
      text: 'Amazing quality and great price.',
      name: 'Jane Smith',
      job: 'Graphic Designer',
    },
    {
      id: 3,
      image: '/images/suv.png',
      text: 'Highly recommend this product!',
      name: 'Michael Johnson',
      job: 'Project Manager',
    },
    {
      id: 4,
      image: '/images/suv.png',
      text: 'Fantastic experience overall.',
      name: 'Emily Davis',
      job: 'Content Writer',
    },
    {
      id: 5,
      image: '/images/suv.png',
      text: 'Good value for the money.',
      name: 'Chris Brown',
      job: 'Marketing Specialist',
    },
  ]);

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
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

  return (
    <div id='test' className='bg-gray py-4 sm:py-6 px-3 sm:px-6 md:px-10 w-full relative'>
      <div className='max-w-[1440px] mx-auto w-full gap-5 z-[0.1] flex items-center justify-center flex-col py-10 '>
        <div data-aos="fade-up" data-aos-duration="1000" className="flex flex-col items-center w-full justify-center my-6">

          <h1 className='text-black text-center text-[25px] md:text-[35px] lg:text-[50px] xl:text-[60px]  font-bold '>What People Say <span className='text-red'>About Us</span></h1>
          <p className='text-gray2 text-center mt-2 text-[12px] lg:text-[16px] mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, impedit.</p>
          <div className="relative w-[30%] md:w-[20%] lg:w-[15%] xl:w-[10%] bg-red h-[6px] bg-red-600 overflow-hidden">
            <div className="absolute top-0 left-0 w-4 h-[6px] md:h-[7px] bg-black animate-move"></div>
          </div>

        </div>

        {/* <Slider {...sliderSettings} className='space-x-2'>
          {comments.map(comment => (
            <div key={comment.id} className="p-4 bg-gray shadow-lg rounded-lg">
              <img
                // src={comment.image}
                alt={comment.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <p className="text-black text-sm mb-2">{comment.text}</p>
              <h2 className="text-lg text-black font-semibold">{comment.name}</h2>
              <h3 className="text-sm text-black ">{comment.job}</h3>
            </div>
          ))}
        </Slider> */}
        <div className="w-full h-auto">
          <Slider {...sliderSettings}>
            {comments.map((comment) => (
              <div key={comment.id} className="h-full">
                <div className="p-4 bg-white m-4 shadow-lg  rounded-lg flex flex-col justify-center items-center h-[300px]">
                  <img
                    src={comment.image}
                    alt={comment.name}
                    className="h-[80px] w-[80px] bg-gray-300 border-2 border-gray-500 p-2 m-4 object-cover rounded-full"
                  />

                  <p className="text-black text-center text-sm mb-2 flex-grow">{comment.text}</p>
                  <h2 className="text-lg text-center text-black font-semibold">{comment.name}</h2>
                  <h3 className="text-sm text-center text-black">{comment.job}</h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>



      </div>
    </div>
  )
}

export default Testimonials
