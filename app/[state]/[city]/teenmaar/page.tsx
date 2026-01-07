import { locations } from "@/lib/locations";
import { notFound } from "next/navigation";
import Link from "next/link";

/* 🔥 Static generation */
export async function generateStaticParams() {
  const params: { state: string; city: string }[] = [];
  Object.entries(locations).forEach(([state, cities]) =>
    cities.forEach((city) => params.push({ state, city }))
  );
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
    title: `Energetic Teenmaar Band in ${cityName} | KKR Events`,
    description: `Book energetic Teenmaar band services in ${cityName}, ${stateName} for weddings, baraats, and festive celebrations.`,
  };
}

/* ✅ Validate location */
function isValidLocation(state: string, city: string) {
  return locations[state as keyof typeof locations]?.includes(city);
}

/* ✅ Generate FAQ for Teenmaar */
function generateFAQ(cityName: string) {
  return [
    {
      question: `How can I book a Teenmaar band in ${cityName}?`,
      answer: `You can book KKR Events' Teenmaar band in ${cityName} by calling +91 7288945110 or submitting a contact form.`,
    },
    {
      question: `Which events does Teenmaar band perform in ${cityName}?`,
      answer: `Our Teenmaar band performs at weddings, baraats, festive events, corporate celebrations, and cultural occasions in ${cityName}.`,
    },
    {
      question: `Can I customize the Teenmaar performance in ${cityName}?`,
      answer: `Yes! You can choose the duration, number of performers, and specific songs or beats for your event.`,
    },
  ];
}

/* ✅ PAGE COMPONENT */
export default async function TeenmaarCityPage({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}) {
  const { state, city } = await params;
  if (!isValidLocation(state, city)) notFound();

  const cityName = city.replace(/-/g, " ");
  const faqs = generateFAQ(cityName);

  return (
    <main className="max-w-5xl mx-auto px-6 pt-40 pb-20">
      {/* 🔥 Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://kkr-events.vercel.app" },
              { "@type": "ListItem", position: 2, name: "Teenmaar Band", item: "https://kkr-events.vercel.app/teenmaar" },
              { "@type": "ListItem", position: 3, name: `${cityName} Teenmaar Band`, item: `https://kkr-events.vercel.app/${state}/${city}/teenmaar` },
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
            mainEntity: faqs.map(faq => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />

      <h1 className="text-3xl font-bold mb-4">
        Energetic Teenmaar Band in {cityName}
      </h1>

      <p className="text-gray-300 mb-6">
        KKR Events provides high-energy Teenmaar band performances in {cityName} for weddings, baraats, festivals, and cultural celebrations. Bring lively beats and unforgettable energy to your event.
      </p>

      <a
        href="tel:+917288945110"
        className="inline-block bg-[var(--brand)] text-black px-6 py-3 rounded-md font-semibold mb-8 hover:bg-black hover:text-[var(--brand)] transition"
      >
        Call Now to Book Teenmaar Band
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

      {/* INTERNAL HUB LINK */}
      <div className="mt-10 border-t pt-6">
        <p className="mb-2 font-medium text-gray-300">Looking for Teenmaar services in other cities?</p>
        <Link href="/teenmaar" className="text-[var(--brand)] hover:underline">
          View Teenmaar Services in Andhra Pradesh & Telangana
        </Link>
      </div>
    </main>
  );
}
