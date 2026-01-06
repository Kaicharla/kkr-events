import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";

type Props = {
  hotel: {
    id: number;
    image: string;
    name: string;
    slug: string;
    price: string;
  };
};

const ServiceCard = ({ hotel }: Props) => {
  return (
    <Link href={hotel.slug}>
      <div className="cursor-pointer">
        <div className="relative h-[300px] w-full rounded-lg group overflow-hidden">
          {/* Favorite */}
          <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <FaHeart className="w-3 h-3" />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

          {/* Image */}
          <Image
            src={hotel.image}
            alt={hotel.name}
            width={500}
            height={500}
            className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div>
          <h1 className="mt-4 text-lg font-semibold text-white hover:text-[var(--brand)] transition-all">
            {hotel.name}
          </h1>

          {/* <p className="mt-3 text-white font-medium">
            Starting from{" "}
            <span className="text-white font-bold">₹{hotel.price}</span>
          </p> */}
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
