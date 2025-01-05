import React, { useState } from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    number: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Log the form data to the console
    // You can add logic here to send the data to a server
  };

  return (
    <div id='featured' className='bg-white pt-4 md:pt-10 lg:pt-16 sm:pt-6 px-3 sm:px-6  w-full relative'>
      <div className='max-w-[1440px] mx-auto w-full gap-5 z-[0.1] flex items-center justify-center flex-col '>
        <h1 className='text-black capitalize text-[25px] md:text-[30px] leading-none lg:text-[45px] xl:text-[45px]  font-bold '>Contact Us</h1>
        <div className="relative w-[30%] md:w-[20%] bg-red h-1 mt-2 bg-red-600 overflow-hidden">
          <div className="absolute top-0 left-0 w-4 h-[6px] md:h-[4px] bg-white animate-move"></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border bg-gray   border-gray2 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border bg-gray border-gray2 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border bg-gray border-gray2 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <label htmlFor="number" className="block text-gray2">
                    Number
                  </label>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    required
                    value={formData.number}
                    onChange={handleChange}
                    className="w-full border bg-gray border-gray2 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray2">
                    Write Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border bg-gray border-gray2 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
              </div>
            </form>
            <div className="flex justify-center mt-2">
              <button
                type="submit"
                className="bg-red text-white px-6 py-2 rounded-lg hover:bg-blue"
                onClick={handleSubmit}
              >
                Send Message
              </button>
            </div>
          </div>
          <div className='bg-gray p-8 border-gray rounded-2xl gap-4 flex flex-col justify-center'>
            
            <div className='flex items-center gap-4'>
              <FaMapMarkerAlt className='text-red h-full ' />
              <div>
                <h3 className='text-black text-left font-semibold text-[12px] xl:text-[16px]'>Office Address</h3>
                <p className='text-gray2 text-left text-[10px] lg:text-[12px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, fugit.</p>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <FaPhoneVolume className='text-red h-full' />
              <div>
                <h3 className='text-black text-left font-semibold text-[12px] xl:text-[16px]'>OFFICE NUMBER</h3>
                <p className='text-gray2 text-left text-[10px] lg:text-[12px]'>Office : 09920345628</p>
                <p className='text-gray2 text-left text-[10px] lg:text-[12px]'>Mobile : +923089341063</p>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <MdEmail className='text-red h-full' />
              <div>
                <h3 className='text-black text-left font-semibold text-[12px] xl:text-[16px]'>EMAIL ADDRESS</h3>
                <p className='text-gray2 text-left text-[10px] lg:text-[12px]'>uk203607@gmail.com</p>
                <p className='text-gray2 text-left text-[10px] lg:text-[12px]'>www.motex.com</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default ContactUs




