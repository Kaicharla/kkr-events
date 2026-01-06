"use client";
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Destination from './Destination/Destination'
import Hotel from './Services/Services'
import WhyChoose from './WhyChoose/WhyChoose'
import Review from './Reviews/Review'
import News from './News/News'
import Newsletter from './NewsLetter/Newsletter'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Services from './Services/Services';
import About from '../about/page';





const Home = () => {
  useEffect(() => {
    const initAOS = async()=> {
      await import('aos');
      AOS.init({
        duration:1000,
        easing:'ease',
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return (
    <div className="overflow-hidden bg-black">
        <Hero/>
        {/* <Destination /> */}
        <Services />
        <About />
        {/* <WhyChoose /> */}
        {/* <Review /> */}
        {/* <News /> */}
        {/* <Newsletter /> */}
    </div>
  );
};

export default Home;