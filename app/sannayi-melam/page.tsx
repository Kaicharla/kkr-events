import Image from "next/image";
import Link from "next/link";
import { locations } from "@/lib/locations";
import CallbackTrigger from "@/components/Helper/CallbackTrigger";

export const metadata = {
  title:
    "Professional Sannayi Melam Services in Andhra Pradesh & Telangana | KKR Events",
  description:
    "KKR Events provides traditional Sannayi Melam services for weddings, engagements, poojas and auspicious ceremonies across Andhra Pradesh and Telangana.",
};

export default function SannayiMelamHubPage() {
  return (
    <main className="bg-black text-white">
      {/* ================= HERO SECTION ================= */}
      <section className="pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Traditional Sannayi Melam for Auspicious Occasions
            </h1>

            <p className="text-gray-300 text-lg mb-8">
              KKR Events offers professional Sannayi Melam performances for weddings,
              engagements, poojas, grihapravesams and religious ceremonies across
              Andhra Pradesh & Telangana.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20want%20to%20book%20Sannayi%20Melam%20for%20my%20event"
                className="inline-flex items-center gap-2 bg-[var(--brand)] text-black px-10 py-4 rounded-xl font-semibold shadow hover:opacity-90 transition"
              >
                Book Sannayi Melam
              </a>

              <CallbackTrigger />
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/sannayi-melam.png"
              alt="Traditional Sannayi Melam Performance"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= PERFORMANCE TYPES ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Sannayi Melam Performance Types
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "Wedding Sannayi Melam",
              "Engagement Ceremonies",
              "Grihapravesam",
              "Temple Poojas",
              "Experienced Sannayi Artists",
              "Traditional Instruments",
              "Auspicious Entry Music",
              "Custom Performance Duration",
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
              Why Choose KKR Events for Sannayi Melam?
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li>✔ Experienced professional Sannayi artists</li>
              <li>✔ Authentic traditional melodies</li>
              <li>✔ Perfect for weddings & poojas</li>
              <li>✔ Affordable & flexible pricing</li>
              <li>✔ Available across AP & Telangana</li>
            </ul>
          </div>

          <div className="relative w-full h-80 md:h-[360px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/sannayi-melam.png"
              alt="Sannayi Melam Wedding Performance"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICE AREAS ================= */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center text-[var(--brand)]">
            Sannayi Melam Services Across Andhra Pradesh & Telangana
          </h2>

          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
            We provide Sannayi Melam services in cities, towns, and nearby villages.
            Choose your city below to explore availability.
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
                    href={`/${state}/${city}/sannayi-melam`}
                    className="bg-black border border-white/10 rounded-lg px-4 py-3 text-gray-300 hover:bg-[var(--brand)] hover:text-black transition capitalize text-sm text-center shadow-sm"
                  >
                    Sannayi Melam in {city.replace("-", " ")}
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
            Book Your Sannayi Melam Today
          </h2>
          <p className="text-gray-300 mb-8">
            Make your events auspicious and memorable with professional Sannayi Melam performances.
            Reach out now and our team will assist you instantly.
          </p>

          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20want%20to%20book%20Sannayi%20Melam%20for%20my%20event"
            className="inline-block bg-[var(--brand)] text-black px-10 py-4 rounded-xl font-semibold shadow hover:opacity-90 transition"
          >
            Book Sannayi Melam
          </a>
        </div>
      </section>
    </main>
  );
}
