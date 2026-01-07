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
    title: `Sannayi Melam in ${cityName} | KKR Events`,
    description: `KKR Events offers professional Sannayi Melam services in ${cityName}, ${stateName} for weddings, engagements, poojas, and religious ceremonies.`,
  };
}

/* ✅ Validate city/state */
function isValidLocation(state: string, city: string) {
  return locations[state as keyof typeof locations]?.includes(city);
}

/* ✅ Generate FAQ dynamically per city */
function generateFAQ(cityName: string) {
  return [
    {
      question: `How can I book Sannayi Melam in ${cityName}?`,
      answer: `You can book KKR Events Sannayi Melam services in ${cityName} by calling +91 7288945110 or filling the contact form. Our team responds instantly.`,
    },
    {
      question: `What events do you perform Sannayi Melam in ${cityName}?`,
      answer: `We perform at weddings, engagements, poojas, religious ceremonies, and cultural events in ${cityName} and nearby areas.`,
    },
    {
      question: `Can I customize the Sannayi Melam performance in ${cityName}?`,
      answer: `Yes! KKR Events offers flexible duration, group size, and performance arrangements to suit your event.`,
    },
  ];
}

/* ✅ PAGE COMPONENT */
export default async function SannayiMelamCityPage({
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
              { "@type": "ListItem", position: 2, name: "Sannayi Melam", item: "https://kkr-events.vercel.app/sannayi-melam" },
              { "@type": "ListItem", position: 3, name: `${cityName} Sannayi Melam`, item: `https://kkr-events.vercel.app/${state}/${city}/sannayi-melam` },
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
        Sannayi Melam Services in {cityName}
      </h1>

      <p className="text-gray-300 mb-6">
        KKR Events provides authentic Sannayi Melam performances in {cityName}, {stateName} for weddings, engagements, poojas, and religious ceremonies. Experience traditional auspicious music performed by expert artists.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Why Choose Our Sannayi Melam in {cityName}?</h2>
      <ul className="list-disc pl-6 mb-6 text-gray-300">
        <li>Experienced traditional Sannayi artists</li>
        <li>Pure auspicious music for weddings & poojas</li>
        <li>Flexible performance duration & group size</li>
        <li>Serving {cityName} and nearby villages</li>
      </ul>

      <p className="mb-6 text-gray-300">
        Our team ensures a vibrant, auspicious, and memorable Sannayi Melam performance across {cityName} and surrounding areas.
      </p>

      <a
        href="tel:+917288945110"
        className="inline-block bg-[var(--brand)] text-black px-6 py-3 rounded-md font-semibold mb-8 hover:bg-black hover:text-[var(--brand)] transition"
      >
        Call Now to Book Sannayi Melam
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
        <p className="mb-2 font-medium text-gray-300">Looking for Sannayi Melam in other cities?</p>
        <Link href="/sannayi-melam" className="text-[var(--brand)] hover:underline">
          View Sannayi Melam Services in Andhra Pradesh & Telangana
        </Link>
      </div>
    </main>
  );
}
