'use client'
import useScrollTrigger from '@/hooks/useScrollTrigger';
import Link from 'next/link';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaBars, FaFacebookSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { IoCloseCircleSharp, IoLogoWhatsapp } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import { MdEmail } from "react-icons/md";

import { openModal } from '@/Store/ReduxSlice/modalSlice';
const Navbar = () => {
    const { scrollTrigger, scrollDirection } = useSelector((state) => state.scroll);
    const [showSidebar, setShowSidebar] = useState(false)
    const dispatch = useDispatch    ();

    const handleShowModal = () => {
      dispatch(openModal());
    };
  
   
    const router = useRouter()
    const handelShowSidebar = () => {
        setShowSidebar(!showSidebar)
    }

    useScrollTrigger()
    // Scroll to a specific section
    // Store scroll position in state
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // Scroll to the section if it exists
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Redirect the user to the "Home" page
            router.push('/');

        }
        // Close the sidebar after scrolling
        setShowSidebar(false);
    };
    return (
        <>
            <div className='w-full shadow-shad'>
                <div className='w-full shadow-shad absolute top-0 z-30'>

                    <div className='bg-transparent w-full mx-auto  py-4 z-30 max-w-[1440px] px-5 md:px-8 lg:px-14 flex justify-between flex-wrap gap-4 items-center'>
                        <div className='flex items-center gap-4 text-white '>
                            <div className='flex items-center text-nowrap gap-2'>
                                <FaPhoneAlt size={14} />
                                +92347673673
                            </div>
                            <div className='flex items-center text-nowrap gap-2'>
                                <MdEmail size={20} />
                                email@example.com
                            </div>

                        </div>
                        <div className='text-white flex  items-center gap-4 text- text-purple'>
                            <IoLogoWhatsapp className=' hover:text-red anim3 cursor-pointer' />
                            <FaLinkedin className=' hover:text-red anim3 cursor-pointer' />
                            <FaFacebookSquare className=' hover:text-red anim3 cursor-pointer' />

                            <h1 onClick={handleShowModal} className='text-white hover:text-red anim3 cursor-pointer'>Register</h1>
                        </div>


                    </div>
                </div>

            </div>
            <div className={`flex z-30 sticky ${scrollTrigger > 56 ? "top-0 anim3" : "top-[96px] md:top-[56px] anim3"}   justify-center w-full anim1   ${scrollTrigger < 10 ? ' bg-transparent' : " bg-white shadow-shad"} `}>

                <div className='flex justify-center w-full max-w-[1440px] mx-auto '>
                    <div className={`flex justify-between items-center   px-5 md:px-8 lg:px-14 py-4   w-full `}>
                        <Link href={'/'}>
                            <div className='flex items-center'>
                                <span className={`${scrollTrigger > 1 ? ' text-black' : 'text-white'} text-3xl md:text-4xl leading-none font-bold anim1 `}>Logo</span>

                            </div>
                        </Link>
                        <div className={`hidden lg:flex items-center ${scrollTrigger > 1 ? ' text-black' : ' text-white '} lg:gap-8 xl:gap-10 anim1`}>
                            <Link href={'/'}>
                                <button onClick={() => scrollToSection('home')} className={` xl:text-18 lg:text-16 font-semibold  ${scrollTrigger > 1 ? 'header-link2' : "header-link"}`}>Home</button>
                            </Link>
                            <button onClick={() => scrollToSection('latest')} className={` xl:text-18 lg:text-16 font-semibold  ${scrollTrigger > 1 ? 'header-link2' : "header-link"}`}>Vehical Listing</button>
                            <button onClick={() => scrollToSection('service')} className={` xl:text-18 lg:text-16 font-semibold  ${scrollTrigger > 1 ? 'header-link2' : "header-link"}`}>Services</button>
                            <button onClick={() => scrollToSection('category')} className={` xl:text-18 lg:text-16 font-semibold  ${scrollTrigger > 1 ? 'header-link2' : "header-link"}`}>Categories</button>
                            <button onClick={() => scrollToSection('about')} className={` xl:text-18 lg:text-16 font-semibold  ${scrollTrigger > 1 ? 'header-link2' : "header-link"}`}>About</button>
                            <button onClick={() => scrollToSection('contact')} className={` xl:text-18 lg:text-16 font-semibold  ${scrollTrigger > 1 ? 'header-link2' : "header-link"}`}>Contact Us</button>

                            {/* <button onClick={() => scrollToSection('contact')} className={`${scrollTrigger > 1 ? ' border-black hover:border-red hover:text-red ' : ' border-white hover:bg-red'} anim1 rounded-lg text-center text-[15px]  px-3 md:px-8 py-4 lg:py-3 lg:px-7   font-semibold uppercase bg-transparent border-2  `}>Contact Us</button> */}
                        </div>
                        <div className='flex lg:hidden items-center gap-4 '>


{/* 
                            <button onClick={() => scrollToSection('contact')} className={`${scrollTrigger > 1 ? ' border-black hover:border-red hover:text-red ' : 'text-white   border-white hover:bg-red'} anim1 rounded-lg text-center text-[12px]  py-1.5 px-5   font-semibold uppercase bg-transparent border-2  `}>Contact Us</button> */}

                            <FaBars className={`${scrollTrigger > 1 ? "text-black" : "text-white"} anim1`} size={25} onClick={handelShowSidebar} />
                        </div>
                    </div>
                </div>
            </div>

            {showSidebar &&
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10" onClick={handelShowSidebar}>


                </div>
            }
            <div className={`fixed top-0 right-0 flex flex-col anim5 z-40 min-h-screen    p-16 ease-in-out  ${showSidebar ? "-translate-x-0 " : "translate-x-full"} w-full max-w-sm bg-white  `}>
                <span><IoCloseCircleSharp className='text-24 text-black absolute right-10 top-6' onClick={handelShowSidebar} /></span>
                <div className='flex flex-col items-start mt-10 gap-10 '>
                    <button onClick={() => scrollToSection('home')} className='text-16 text-black header-link2 w-full text-start '>Home</button>
                    <button onClick={() => scrollToSection('latest')} className='text-16 capitalize text-black header-link2 w-full text-start'>Vehical Listing</button>
                    <button onClick={() => scrollToSection('Service')} className='text-16 text-black header-link2 w-full text-start'>Services</button>
                    <button onClick={() => scrollToSection('category')} className='text-16 capitalize text-black header-link2 w-full text-start'>Category</button>
                    <button onClick={() => scrollToSection('about')} className='text-16 capitalize text-black header-link2 w-full text-start'>About</button>
                    <button onClick={() => scrollToSection('contact')} className='text-16 capitalize text-black header-link2 w-full text-start'>Contact</button>

                </div>

                {/* <div className='mt-10'>
                    <h1 className='text-20 font-bold text-white'>Get In Touch</h1>

                    <div className='mt-6 flex items-center gap-4 text-24 text-purple'>
                        <IoLogoWhatsapp />
                        <FaLinkedin />
                        <FaFacebookSquare />

                    </div>

                </div> */}
            </div>

           
        </>
    )
}

export default Navbar