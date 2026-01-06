"use client";
import React, { useState } from 'react'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'

const ResponsiveNavbar = () => {
    const [showNav, setShowNav] = useState(false);
    const handNavShow = () =>setShowNav(true);
    const handleNavClose = () => setShowNav(false);
  return (
    <div>
        <Navbar openNav={handNavShow}/>
        <MobileNavbar showNav={showNav} closeNav={handleNavClose}/>
    </div>
  );
};

export default ResponsiveNavbar;