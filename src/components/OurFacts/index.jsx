import React, { useState } from 'react'
import { FaHandshake } from "react-icons/fa6";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { RiCustomerService2Line } from "react-icons/ri";
import { CiUnlock } from "react-icons/ci";
const OurFacts = () => {

  const [cards] = useState([
    {
      id: 1,
      icon: <CiUnlock size={40} className="text-red" />,
      title: 'Advanced Security',
      description: 'Equipped with the latest technology to ensure your safety.'
    },
    {
      id: 2,
      icon: <FaHandshake size={40} className="text-red" />,
      title: 'Trusted Partners',
      description: 'Collaborating with reliable dealers and partners worldwide.'
    },
    {
      id: 3,
      icon: <FaCircleDollarToSlot size={40} className="text-red" />,
      title: 'Affordable Pricing',
      description: 'Offering competitive rates to match your budget.'
    },
    {
      id: 4,
      icon: <RiCustomerService2Line size={40} className="text-red" />,
      title: '24/7 Support',
      description: 'Our team is available round the clock to assist you.'
    }
  ]);



  return (
    <div id='ourfact' className='bg-gray py-4 md:py-10 lg:py-16 sm:py-6 px-3 sm:px-6 md:px-10 w-full relative'>
      <div className='max-w-[1440px] mx-auto w-full gap-5 z-[0.1] flex items-center justify-center flex-col py-10 '>
        <h1 className='text-gray2 text-[25px] md:text-[30px] lg:text-[45px] xl:text-[45px]  font-bold '>We Are The best</h1>
        <div className="relative w-[10%] bg-red h-1 bg-red-600">
          <div className="absolute top-0 left-0 w-4 h-[5px] bg-white animate-move"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 lg:grid-cols-4  px-2 md:px-5">
          {cards.map((card) => (
            <div key={card.id} className="border-x-2 border-white bg-gray py-8 px-6  text-center">
              <div className="flex justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold mb-4 text-red">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurFacts
