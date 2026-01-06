"use client";

import Link from "next/link";
import Image from "next/image";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-20 right-6 z-[9999] flex flex-col gap-4">
      
      {/* 📞 CALL BUTTON */}
      <Link
        href="tel:+91XXXXXXXXXX" // 🔴 change number
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-lg hover:scale-105 transition"
      >
        <Image
          src="/phone.png" // add a call icon
          alt="Call KKR Events"
          width={28}
          height={28}
        />
        <span className="absolute right-16 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          Call Now
        </span>
      </Link>

      {/* 💬 WHATSAPP BUTTON */}
      <Link
        href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20want%20to%20book%20DJ%20services"
        target="_blank"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-105 transition"
      >
        <Image
          src="/whatsapp.png" // add whatsapp icon
          alt="WhatsApp KKR Events"
          width={28}
          height={28}
        />
        <span className="absolute right-16 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
          WhatsApp
        </span>
      </Link>
    </div>
  );
}
