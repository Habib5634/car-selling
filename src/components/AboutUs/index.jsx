import React from 'react'

const AboutUs = () => {
  return (

    <div id='about' className='bg-gray py-4 sm:py-6 px-3 sm:px-6 md:px-10 w-full relative'>
      <div className='max-w-[1440px] mx-auto w-full gap-5 z-[0.1] flex items-center justify-center flex-col px-5 md:pl-10 '>
        <div className='text-center'>
          <h1 className='text-black text-[25px] md:text-[35px] lg:text-[50px] xl:text-[60px]  font-bold leading-none '> About Us</h1>
          <p className='text-gray2 text-center mt-2 text-[12px] lg:text-[16px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, impedit.</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 px-4 md:px-0'>
          <div className='md:pr-4'
          data-aos="fade-left"
          data-aos-duration="1000"
          >
            <h2 className='text-black text-left text-[12px] md:text-[14px] lg:text-[20px] xl:text-[30px]  leading-none font-bold'>Trusted Name in Auto-World</h2>

            <p className='text-gray2 text-left text-[12px] lg:text-[16px] mt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis accusantium a doloribus facilis numquam tempora sapiente recusandae expedita odio eum facere ipsum officia, quaerat illo nobis ratione. Eveniet, mollitia eos.</p>

            <p className='text-gray2 text-left text-[12px] lg:text-[16px] mt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis accusantium a doloribus facilis numquam tempora sapiente recusandae expedita odio eum facere ipsum officia, quaerat illo nobis ratione. Eveniet, mollitia eos.</p>

            <p className='text-gray2 text-left text-[12px] lg:text-[16px] mt-6 md:pr-14'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis accusantium a doloribus facilis numquam tempora sapiente recusandae expedita odio eum facere ipsum officia, quaerat illo nobis ratione. Eveniet, mollitia eos.</p>

            <p className='text-black text-left text-[12px] lg:text-[16px] mt-8 border-l-4 border-l-red pl-4  font-semibold'> We Have Largest Vehicle Stock  </p>

            <p className='text-black text-left text-[12px] lg:text-[16px] mt-8 border-l-4 border-l-red pl-4  font-semibold'> We Have Largest Vehicle Stock  </p>

            <p className='text-black text-left text-[12px] lg:text-[16px] mt-8 border-l-4 border-l-red pl-4  font-semibold'> We Have Largest Vehicle Stock  </p>

          </div>
          <div className='md:w-full relative mt-4 md:mt-0 '
          data-aos="fade-right"
          data-aos-duration="1000"
          >

            <img className=' sm:absolute border-2 border-white rounded-2xl  sm:bottom-0 sm:-left-10 md:-left-20  sm:w-[350px] sm:h-[250px]' src="/cars/car2.jpg" alt="car pic" />
            <img src="/cars/car.jpg" className='border-2 border-white rounded-2xl mt-4 sm:mt-0'  alt="car pic" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
