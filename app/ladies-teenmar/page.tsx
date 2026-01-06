import Image from "next/image";
import Link from "next/link";
import { locations } from "@/lib/locations";
import CallbackTrigger from "@/components/Helper/CallbackTrigger";

export const metadata = {
  title:
    "Professional Ladies Teenmaar Services in Andhra Pradesh & Telangana | KKR Events",
  description:
    "KKR Events offers energetic Ladies Teenmaar performances for weddings, festivals, and cultural events across Andhra Pradesh and Telangana.",
};

export default function LadiesTeenmaarHubPage() {
  return (
    <main className="bg-black text-white">
      {/* ================= HERO SECTION ================= */}
      <section className="pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Ladies Teenmaar Performances for Weddings & Festivals
            </h1>

            <p className="text-gray-300 text-lg mb-8">
              Add energy and vibrancy to your celebrations with our professional Ladies Teenmaar performances across Andhra Pradesh & Telangana.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20want%20to%20book%20Ladies%20Teenmaar%20for%20my%20event"
                className="inline-flex items-center gap-2 bg-[var(--brand)] text-black px-10 py-4 rounded-xl font-semibold shadow hover:opacity-90 transition"
              >
                Book Ladies Teenmaar
              </a>

              <CallbackTrigger />
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/ladies-teenmar.png"
              alt="Ladies Teenmaar Performance"
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
            Ladies Teenmaar Performance Types
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "Wedding Entry",
              "Ladies Teenmaar for Festivals",
              "Temple Celebrations",
              "Engagement Ceremonies",
              "Custom Performance Duration",
              "Energetic Drums & Beats",
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
              Why Choose KKR Events for Ladies Teenmaar?
            </h2>

            <ul className="space-y-4 text-gray-300">
              <li>✔ Experienced female Teenmaar performers</li>
              <li>✔ Energetic traditional beats & choreography</li>
              <li>✔ Perfect for weddings, festivals & cultural events</li>
              <li>✔ Flexible group size & performance duration</li>
              <li>✔ Available across AP & Telangana</li>
            </ul>
          </div>

          <div className="relative w-full h-80 md:h-[360px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/ladies-teenmar.png"
              alt="Ladies Teenmaar Performance"
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
            Ladies Teenmaar Services Across Andhra Pradesh & Telangana
          </h2>

          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
            We provide Ladies Teenmaar performances in major cities and surrounding towns. 
            Select your city below to book services near you.
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
                    href={`/${state}/${city}/ladies-teenmar`}
                    className="bg-black border border-white/10 rounded-lg px-4 py-3 text-gray-300 hover:bg-[var(--brand)] hover:text-black transition capitalize text-sm text-center shadow-sm"
                  >
                    Ladies Teenmaar in {city.replace("-", " ")}
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
            Book Your Ladies Teenmaar Today
          </h2>
          <p className="text-gray-300 mb-8">
            Make your wedding, festival, or cultural event unforgettable with professional Ladies Teenmaar performances. Contact us now!
          </p>

          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20want%20to%20book%20Ladies%20Teenmaar%20for%20my%20event"
            className="inline-block bg-[var(--brand)] text-black px-10 py-4 rounded-xl font-semibold shadow hover:opacity-90 transition"
          >
            Book Ladies Teenmaar
          </a>
        </div>
      </section>
    </main>
  );
}
