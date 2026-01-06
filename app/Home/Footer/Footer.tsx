import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Navigation */}
        <div className="space-y-5">
          <h2 className="text-lg font-bold text-[var(--brand)]">Navigation</h2>
          <Link href="/" className="block text-gray-600 text-sm hover:text-[var(--brand)] transition">
            Home
          </Link>
          <Link href="/services" className="block text-gray-600 text-sm hover:text-[var(--brand)] transition">
            Services
          </Link>
          <Link href="/about" className="block text-gray-600 text-sm hover:text-[var(--brand)] transition">
            About
          </Link>
          <Link href="/contact" className="block text-gray-600 text-sm hover:text-[var(--brand)] transition">
            Contact
          </Link>
        </div>

        {/* Contact Info */}
        <div className="space-y-5">
          <h2 className="text-lg font-bold text-[var(--brand)]">Contact Us</h2>
          <div>
            <p className="text-gray-600 text-sm">Mobile</p>
            <p className="font-semibold text-gray-800 mt-1 hover:text-[var(--brand)] transition">+91 72889 45110</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Email</p>
            <p className="font-semibold text-gray-800 mt-1 hover:text-[var(--brand)] transition">kkrevents@gmail.com</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Location</p>
            <p className="font-semibold text-gray-800 mt-1">Andhra Pradesh & Telangana, India</p>
          </div>
        </div>

        {/* Services Quick Links */}
        <div className="space-y-5">
          <h2 className="text-lg font-bold text-[var(--brand)]">Our Services</h2>
          <Link href="/dj-services" className="block text-gray-600 text-sm hover:text-[var(--brand)] transition">
            DJ Services
          </Link>
          <Link href="/chenda-melam" className="block text-gray-600 text-sm hover:text-[var(--brand)] transition">
            Chenda Melam
          </Link>
          <Link href="/sannayi-melam" className="block text-gray-600 text-sm hover:text-[var(--brand)] transition">
            Sannayi Melam
          </Link>
          <Link href="/teenmaar" className="block text-gray-600 text-sm hover:text-[var(--brand)] transition">
            Teenmaar & Bands
          </Link>
          <Link href="/saxophone-player" className="block text-gray-600 text-sm hover:text-[var(--brand)] transition">
            Saxophone Player
          </Link>
        </div>

        {/* Social Links */}
        <div className="space-y-5">
          <h2 className="text-lg font-bold text-[var(--brand)]">Follow Us</h2>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-gray-600 hover:text-[var(--brand)] transition">
              <FaFacebook size={20} />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[var(--brand)] transition">
              <FaInstagram size={20} />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[var(--brand)] transition">
              <FaYoutube size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-12 border-t border-gray-300 pt-6 text-center text-gray-600 text-sm">
        &copy; 2026 KKR Events. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
