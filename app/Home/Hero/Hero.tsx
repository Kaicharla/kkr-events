import Link from "next/link";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center">
      
      {/* Background Image */}
      <Image
        src="/image.png"
        alt="Wedding and Event Entertainment Services in Andhra Pradesh"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 text-center">
        
        {/* SEO H1 */}
        <h1 className="text-white font-extrabold uppercase tracking-wide
          text-3xl md:text-4xl lg:text-5xl leading-tight">
          Complete Event Entertainment Solutions
        </h1>

        {/* SEO Supporting Text */}
        <p className="mt-5 text-gray-200 text-base md:text-lg max-w-3xl mx-auto">
          Professional DJ, Chenda Melam, Sannayi Melam, Wedding Bands, 
          Ladies Teenmar performances for weddings, receptions 
          and corporate events across Andhra Pradesh.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          
          {/* Primary CTA */}
          <Link
            href="/contact"
            className="px-10 py-3 rounded-lg bg-[var(--brand)] text-black font-semibold text-lg 
              hover:bg-black hover:text-[var(--brand)] border-2 border-[var(--brand)] transition duration-300"
          >
            Book Your Event
          </Link>

          {/* Secondary CTA */}
          <Link
            href="/services"
            className="px-10 py-3 rounded-lg bg-black text-[var(--brand)] font-semibold text-lg
              hover:bg-[var(--brand)] hover:text-black border-2 border-[var(--brand)] transition duration-300"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
