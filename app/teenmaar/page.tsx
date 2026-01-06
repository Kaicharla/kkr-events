import Image from "next/image";
import Link from "next/link";
import { locations } from "@/lib/locations";
import CallbackTrigger from "@/components/Helper/CallbackTrigger";

export const metadata = {
  title:
    "Professional Teenmaar Band Services in Andhra Pradesh & Telangana | KKR Events",
  description:
    "KKR Events provides energetic Teenmaar band services for weddings, processions and celebrations across Andhra Pradesh and Telangana.",
};

export default function TeenmaarHubPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Energetic Teenmaar Band for Weddings & Celebrations
            </h1>

            <p className="text-gray-300 text-lg mb-8">
              KKR Events offers high-energy Teenmaar band performances for
              weddings, baraat processions, receptions and grand celebrations
              across Andhra Pradesh and Telangana.
            </p>

            <div className="mt-8">
              <a
                href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20want%20to%20book%20Teenmaar%20band"
                target="_blank"
                className="inline-flex bg-[var(--brand)] text-black px-10 py-4 rounded-xl font-semibold text-lg"
              >
                Book Teenmaar Band
              </a>
              <p className="text-gray-400 text-sm mt-3">
                Fast booking via WhatsApp
              </p>
            </div>

            <CallbackTrigger />
          </div>

          <div className="relative h-[420px] rounded-2xl overflow-hidden">
            <Image
              src="/teenmaar.png"
              alt="Teenmaar Band Performance"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Teenmaar Band Services Include
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              "Wedding Teenmaar",
              "Baraat Procession",
              "Festival Celebrations",
              "High-Energy Beats",
              "Traditional Drummers",
              "Modern Rhythm Mix",
              "Crowd Engagement",
              "Custom Performance Time",
            ].map((item) => (
              <div
                key={item}
                className="bg-black border border-white/10 rounded-xl p-6 text-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Teenmaar Band Available Across AP & Telangana
          </h2>

          {Object.entries(locations).map(([state, cities]) => (
            <div key={state} className="mb-12">
              <h3 className="text-xl font-semibold mb-6 capitalize">
                {state.replace("-", " ")}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {cities.map((city) => (
                  <Link
                    key={city}
                    href={`/${state}/${city}/teenmaar`}
                    className="border border-white/10 px-4 py-3 rounded-lg hover:bg-[var(--brand)] hover:text-black transition capitalize"
                  >
                    Teenmaar in {city.replace("-", " ")}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
