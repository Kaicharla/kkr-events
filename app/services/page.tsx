import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Event Services | DJ, Chenda Melam, Sannayi Melam | KKR Events",
  description:
    "KKR Events provides DJ services, Chenda Melam, Sannayi Melam and wedding bands across Andhra Pradesh and Telangana.",
};

const services = [
  {
    title: "DJ Services",
    slug: "/dj-services",
    image: "/dj.png",
    description: "High-energy professional DJ services for weddings, receptions, birthday parties, corporate events, and celebrations across Andhra Pradesh and Telangana.",
  },
  {
    title: "Chenda Melam",
    slug: "/chenda-melam",
    image: "/chenda-melam.png",
    description: "Authentic Kerala Chenda Melam performances for weddings, temple festivals, cultural events, and grand celebrations, delivered by skilled traditional artists.",
  },
  {
    title: "Sannayi Melam",
    slug: "/sannayi-melam",
    image: "/sannayi-melam.png",
    description: "Auspicious Sannayi Melam services for weddings, engagements, poojas, and religious ceremonies, performed by experienced Sannayi artists to elevate every occasion.",
  },
  {
    title: "Saxophone Player",
    slug: "/saxophone-player",
    image: "/saxophone.png",
    description: "Elegant live saxophone performances for weddings, receptions, cocktail parties, and private events, creating a classy and soulful musical experience.",
  },
  {
    title: "Ladies Teenmaar",
    slug: "/ladies-teenmar",
    image: "/ladies-teenmar.png",
    description: "Energetic Ladies Teenmaar performances for weddings, festivals, and cultural celebrations, featuring traditional rhythms, vibrant beats, and professional female performers.",
  },
];


export default function ServicesPage() {
  return (
    <section className="py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-6">
          Our Event Services
        </h1>

        {/* Subheading */}
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-20">
          Choose a service to explore city-wise availability across Andhra Pradesh
          and Telangana.
        </p>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={service.slug}
              className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={260}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-900">
                  {service.title}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                <span className="inline-flex items-center mt-5 text-[var(--brand)] font-semibold group-hover:gap-2 transition-all">
                  View Cities
                  <span className="ml-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


