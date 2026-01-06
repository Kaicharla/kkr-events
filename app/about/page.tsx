import SectionHeading from "@/components/Helper/SectionHeading";
import Image from "next/image";
import React from "react";

const servicesOverview = [
  {
    title: "DJ Services",
    description:
      "High-energy DJ services for weddings, parties, corporate events and celebrations across Andhra Pradesh & Telangana.",
  },
  {
    title: "Chenda Melam",
    description:
      "Traditional Kerala Chenda Melam performances for weddings, temple festivals, and grand events.",
  },
  {
    title: "Sannayi Melam",
    description:
      "Auspicious Sannayi Melam for weddings, engagements, and rituals by experienced artists.",
  },
  {
    title: "Teenmaar & Bands",
    description:
      "Energetic Teenmaar, Ladies Teenmaar, Festival Bands and orchestras for weddings and events.",
  },
  {
    title: "Saxophone Player",
    description:
      "Elegant live saxophone performances for weddings, receptions, and private parties.",
  },
];

const About = () => {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <SectionHeading heading="About KKR Events" />

        {/* ================= PROFILE SECTION ================= */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mt-12">
          {/* Image */}
          <div className="flex-shrink-0 w-full lg:w-1/3 relative h-80 rounded-2xl overflow-hidden mx-auto">
            <Image
              src="/saxophone.png" // Replace with your actual profile image
              alt="KKR Events Founder"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About KKR Events
            </h2>

            <p className="text-gray-300 mb-6 text-lg">
              KKR Events is a professional event management and entertainment company
              serving Andhra Pradesh and Telangana. We specialize in providing authentic
              traditional performances and modern entertainment solutions including DJ services,
              Chenda Melam, Sannayi Melam, Teenmaar Bands, Saxophone players, and more.
            </p>

            <p className="text-gray-300 mb-6 text-lg">
              Our mission is to make every event memorable with high-quality performances,
              expert artists, and seamless coordination. Whether it&apos;s a wedding, corporate
              event, festival, or private party, KKR Events ensures a perfect celebration
              for every occasion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
