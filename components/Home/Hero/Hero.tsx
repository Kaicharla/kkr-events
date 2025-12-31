import SearchBox from '@/components/Helper/SearchBox'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import CabSearchBox from '@/components/Helper/CabSearchBox';

const Hero = () => {
  return (
  <div className='relative w-full h-[120vh] sm:h-[100vh]'>
    {/* Overlay */}
    <div className='absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70'></div>
    {/* <video src="./images/hero1.mp4" autoPlay muted loop preload='metadata' className='w-full h-full object-cover' /> */}
    <Image src="/images/hero.png" alt="Hero background" fill priority className="object-cover"/>
    <div className='absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <div className='flex items-center justify-center flex-col w-full h-full'>
            <div data-aos="fade-up">
                <h1 className='text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] tracking-[0.7rem] text-white font-bold uppercase'>Lets Enjoy the Nature</h1>
                <p className='md:text-base text-center text-lg text-white font-normal [word-spacing:5px]'>Get the best prices on 200+ areas in Andhra Pradesh</p>
            </div>
            {/* Search Box */}
            <CabSearchBox />
            <Link href="#" 
            className='rounded px-14 md:px-28 -mt-4 py-2.5 overflow-hidden group bg-[var(--brand)] relative text-white hover:ring-2 hover:ring-offset-2
            hover:ring-red-400 transition-all ease-out duration-300'
            >
              <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease'></span>
              <span className='relative font-bold'>Search</span>
            </Link>
        </div>
    </div>
  </div>
  )
}

export default Hero