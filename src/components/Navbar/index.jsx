'use client'
import useScrollTrigger from '@/hooks/useScrollTrigger';
import Link from 'next/link';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { FaBars} from "react-icons/fa";
import { IoCloseCircleSharp} from "react-icons/io5";
import { useRouter } from 'next/navigation';
const Navbar = () => {
    const { scrollTrigger, scrollDirection } = useSelector((state) => state.scroll);
    const [showSidebar, setShowSidebar] = useState(false)
const router =useRouter()
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
        <div className={`flex z-30 sticky  top-0 justify-center w-full anim5  ${scrollTrigger < 10 ? ' bg-transparent' : " bg-red"} `}>
            <div className='flex justify-center w-full max-w-[1440px] mx-auto '>
                <div className={`flex justify-between items-center px-5 md:px-8 lg:px-14 py-4  top-0 w-full `}>
                    <Link href={'/'}>
                        <div className='flex items-center'>
                            <span className='text-3xl md:text-4xl leading-none font-bold text-white'>Logo</span>
                          
                        </div>
                    </Link>
                    <div className={`hidden lg:flex items-center ${scrollTrigger > 1 ? 'gap-9' : 'xl:gap-10 lg:gap-8'} anim5`}>
                            <Link href={'/'}>
                            <button onClick={() => scrollToSection('home')} className='xl:text-18 lg:text-16 font-bold text-white header-link'>Home</button>
                            </Link>
                            <button onClick={() => scrollToSection('services')} className='xl:text-18 capitalize lg:text-16 font-bold text-white header-link'>Services</button>
                            <button onClick={() => scrollToSection('about')} className='xl:text-18 lg:text-16 font-bold text-white header-link'>About Us</button>
                            {/* <button onClick={() => scrollToSection('contact')} className='xl:text-18 lg:text-16 font-bold text-white header-link'>Contact</button> */}
                            <button onClick={() => scrollToSection('career')} className='xl:text-18 lg:text-16 font-bold text-white header-link'>Career</button>
                            
                            <button onClick={() => scrollToSection('contact')} className={`${scrollTrigger > 1 ? 'px-3 md:px-5 py-2 ' : 'px-3 md:px-8 py-4 lg:py-3 lg:px-7 border-blueDark'} anim5 rounded-lg text-center text-[15px] hover:bg-blueDark anim3 text-white font-bold uppercase bg-transparent border-2 border-white`}>Contact Us</button>
                        </div>
                        <div className='flex lg:hidden items-center gap-4 '>



                            <button className={`${scrollTrigger > 1 ? 'px-3 md:px-5 py-2 border-white' : 'py-2 px-3 xl:px-8 xl:py-4 lg:py-3 lg:px-7'} anim5 rounded-lg text-center text-12 md:text-[15px] hover:bg-purple anim3 text-white uppercase bg-transparent border `}>Contact Us</button>
                           
                            <FaBars className='text-white' size={25} onClick={handelShowSidebar} />
                        </div>
                </div>
            </div>
        </div>
        
        {showSidebar &&
                <div className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center z-10">


                </div>
            }
            <div className={`fixed top-0 right-0 flex flex-col anim5 z-40 min-h-screen    p-16 ease-in-out  ${showSidebar ? "-translate-x-0 " : "translate-x-full"} w-full max-w-sm bg-blueDark  `}>
                <span><IoCloseCircleSharp className='text-24 text-white absolute right-10 top-6' onClick={handelShowSidebar} /></span>
                <div className='flex flex-col items-start mt-10 gap-10 '>
                    <button onClick={() => scrollToSection('home')} className='text-16 text-white header-link w-full text-start '>Home</button>
                    <button onClick={() => scrollToSection('services')} className='text-16 capitalize text-white header-link w-full text-start'>Services</button>
                    <button onClick={() => scrollToSection('about')} className='text-16 text-white header-link w-full text-start'>About Us</button>
                    <button onClick={() => scrollToSection('career')} className='text-16 capitalize text-white header-link w-full text-start'>Career</button>
                    <button onClick={() => scrollToSection('contact')} className='text-16 capitalize text-white header-link w-full text-start'>Contact</button>
                    {/* <button onClick={() => scrollToSection('contact')} className='text-16 text-white header-link w-full text-start'>Contact Us</button> */}
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