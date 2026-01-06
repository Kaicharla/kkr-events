import Image from "next/image";
import Link from "next/link";
import { locations } from "@/lib/locations";
import CallbackTrigger from "@/components/Helper/CallbackTrigger";

export const metadata = {
  title:
    "Professional DJ Services in Andhra Pradesh & Telangana | KKR Events",
  description:
    "KKR Events offers professional DJ services for weddings, receptions, parties, and corporate events across Andhra Pradesh and Telangana.",
};

export default function DJServicesHubPage() {
  return (
    <main className="bg-black text-white">
      {/* ================= HERO SECTION ================= */}
      <section className="pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Professional DJ Services for Weddings & Events
            </h1>

            <p className="text-gray-300 text-lg mb-8">
              KKR Events provides high-energy professional DJ services for
              weddings, receptions, birthdays, corporate events, and celebrations
              across Andhra Pradesh & Telangana.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20want%20to%20book%20DJ%20services%20for%20my%20event"
                className="inline-flex items-center gap-2 bg-[var(--brand)] text-black px-10 py-4 rounded-xl font-semibold shadow hover:opacity-90 transition"
              >
                Book DJ Service
              </a>

              <CallbackTrigger />
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/dj.png"
              alt="Professional DJ Services"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our DJ Services Include
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              "Wedding DJ",
              "Reception DJ",
              "Birthday Parties",
              "Corporate Events",
              "Sound & Lighting",
              "Live Mixing",
              "Dance Floor Setup",
              "Customized Playlists",
            ].map((item) => (
              <div
                key={item}
                className="bg-neutral-900 border border-white/10 rounded-2xl p-6 text-center shadow hover:shadow-[0_0_20px_rgba(255,193,7,0.3)] transition"
              >
                <p className="font-semibold text-[var(--brand)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Why Choose KKR Events DJ Services?
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li>✔ Experienced professional DJs</li>
              <li>✔ High-quality sound & lighting systems</li>
              <li>✔ Crowd-engaging music selection</li>
              <li>✔ Affordable & transparent pricing</li>
              <li>✔ Available across AP & Telangana</li>
            </ul>
          </div>

          <div className="relative w-full h-80 md:h-[360px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/dj.png"
              alt="Wedding DJ Performance"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICE AREAS (SEO SECTION) ================= */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center text-[var(--brand)]">
            DJ Services Across Andhra Pradesh & Telangana
          </h2>

          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
            We provide DJ services in major cities and surrounding towns and villages.
            Select your city below to find services near you.
          </p>

          {Object.entries(locations).map(([state, cities]) => (
            <div key={state} className="mb-12">
              <h3 className="text-xl font-semibold mb-6 capitalize text-white">
                {state.replace("-", " ")}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {cities.map((city) => (
                  <Link
                    key={city}
                    href={`/${state}/${city}/dj-services`}
                    className="bg-black border border-white/10 rounded-lg px-4 py-3 text-gray-300 hover:bg-[var(--brand)] hover:text-black transition capitalize text-sm text-center shadow-sm"
                  >
                    DJ Services in {city.replace("-", " ")}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[var(--brand)]">
            Book Your DJ Service Today
          </h2>
          <p className="text-gray-300 mb-8">
            Make your event unforgettable with professional DJ performances. Reach out now and our team will assist you instantly.
          </p>

          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20want%20to%20book%20DJ%20services%20for%20my%20event"
            className="inline-block bg-[var(--brand)] text-black px-10 py-4 rounded-xl font-semibold shadow hover:opacity-90 transition"
          >
            Book DJ Service
          </a>
        </div>
      </section>
    </main>
  );
}
