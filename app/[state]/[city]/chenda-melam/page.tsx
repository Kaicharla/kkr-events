import { locations } from "@/lib/locations";
import { notFound } from "next/navigation";
import Link from "next/link";

/* 🔥 Static generation for all city/state pages */
export async function generateStaticParams() {
  const params: { state: string; city: string }[] = [];
  Object.entries(locations).forEach(([state, cities]) => {
    cities.forEach((city) => params.push({ state, city }));
  });
  return params;
}

/* 🔥 SEO metadata per city */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}) {
  const { state, city } = await params;
  const cityName = city.replace(/-/g, " ");
  const stateName = state.replace(/-/g, " ");

  return {
    title: `Chenda Melam in ${cityName} | KKR Events`,
    description: `Experience authentic Chenda Melam in ${cityName}, ${stateName} for weddings, temple festivals, and cultural events. Book professional performers now!`,
  };
}

/* ✅ Validate city/state */
function isValidLocation(state: string, city: string) {
  return locations[state as keyof typeof locations]?.includes(city);
}

/* ✅ FAQ generator per city dynamically */
function generateFAQ(cityName: string) {
  return [
    {
      question: `How can I book Chenda Melam in ${cityName}?`,
      answer: `You can book KKR Events Chenda Melam services in ${cityName} by calling +91 7288945110 or using our contact form. Our team responds immediately.`,
    },
    {
      question: `What events do you perform Chenda Melam in ${cityName}?`,
      answer: `We perform at weddings, temple festivals, cultural events, and corporate functions in ${cityName} and nearby villages.`,
    },
    {
      question: `Can I customize the Chenda Melam group size or duration in ${cityName}?`,
      answer: `Yes! KKR Events offers flexible group sizes, performance duration, and traditional arrangements to match your event requirements.`,
    },
  ];
}

/* ✅ PAGE COMPONENT */
export default async function ChendaMelamCityPage({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}) {
  const { state, city } = await params;

  if (!isValidLocation(state, city)) notFound();

  const cityName = city.replace(/-/g, " ");
  const stateName = state.replace(/-/g, " ");
  const faqs = generateFAQ(cityName);

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 pt-40">
      {/* 🔥 Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://kkr-events.vercel.app" },
              { "@type": "ListItem", position: 2, name: "Chenda Melam", item: "https://kkr-events.vercel.app/chenda-melam" },
              { "@type": "ListItem", position: 3, name: `${cityName} Chenda Melam`, item: `https://kkr-events.vercel.app/${state}/${city}/chenda-melam` },
            ],
          }),
        }}
      />

      {/* 🔥 FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />

      {/* PAGE CONTENT */}
      <h1 className="text-3xl font-bold mb-4">
        Chenda Melam Services in {cityName}
      </h1>

      <p className="text-gray-300 mb-6">
        KKR Events provides authentic Chenda Melam performances in {cityName}, {stateName} for weddings, temple festivals, cultural events, and grand celebrations. Experience traditional Kerala percussion and rhythm like never before.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Why Choose Our Chenda Melam in {cityName}?</h2>
      <ul className="list-disc pl-6 mb-6 text-gray-300">
        <li>Experienced and professional Chenda artists</li>
        <li>Authentic traditional Kerala percussion performance</li>
        <li>Customizable group size and performance duration</li>
        <li>Serving {cityName} and surrounding towns & villages</li>
      </ul>

      <p className="mb-6 text-gray-300">
        Our Chenda Melam team ensures a vibrant, energetic, and authentic performance across {cityName} and nearby areas. Book now for a memorable cultural experience.
      </p>

      <a
        href="tel:+917288945110"
        className="inline-block bg-[var(--brand)] text-black px-6 py-3 rounded-md font-semibold mb-8 hover:bg-black hover:text-[var(--brand)] transition"
      >
        Call Now to Book Chenda Melam
      </a>

      {/* FAQ Section */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold mb-4 text-[var(--brand)]">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="bg-neutral-900 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">{faq.question}</summary>
              <p className="mt-2 text-gray-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* INTERNAL LINK BACK TO HUB */}
      <div className="mt-10 border-t pt-6">
        <p className="mb-2 font-medium text-gray-300">Looking for Chenda Melam in other cities?</p>
        <Link href="/chenda-melam" className="text-[var(--brand)] hover:underline">
          View Chenda Melam Services in Andhra Pradesh & Telangana
        </Link>
      </div>
    </main>
  );
}
