import { locations } from "@/lib/locations";
import { notFound } from "next/navigation";
import Link from "next/link";

/* 🔥 Static generation for city pages */
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
  const { city, state } = await params;
  const cityName = city.replace(/-/g, " ");
  const stateName = state.replace(/-/g, " ");

  return {
    title: `Professional Saxophone Player in ${cityName} | KKR Events`,
    description: `Hire a professional saxophone player in ${cityName}, ${stateName} for weddings, receptions, and corporate events.`,
  };
}

/* ✅ Validate location */
function isValidLocation(state: string, city: string) {
  return locations[state as keyof typeof locations]?.includes(city);
}

/* ✅ Generate dynamic FAQ for saxophone service */
function generateFAQ(cityName: string) {
  return [
    {
      question: `How do I book a saxophone player in ${cityName}?`,
      answer: `You can book a professional saxophone player in ${cityName} by contacting KKR Events at +91 7288945110 or filling out the contact form.`
    },
    {
      question: `What events do you perform saxophone music in ${cityName}?`,
      answer: `We perform at weddings, receptions, birthday parties, and corporate events in ${cityName} and surrounding areas.`
    },
    {
      question: `Can I customize the saxophone performance in ${cityName}?`,
      answer: `Yes! You can choose the duration, style, and event type to tailor the performance to your needs.`
    },
  ];
}

/* ✅ PAGE COMPONENT */
export default async function SaxophoneCityPage({
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
              { "@type": "ListItem", position: 2, name: "Saxophone Player", item: "https://kkr-events.vercel.app/saxophone-player" },
              { "@type": "ListItem", position: 3, name: `${cityName} Saxophone Player`, item: `https://kkr-events.vercel.app/${state}/${city}/saxophone-player` },
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

      {/* PAGE CONTENT */}
      <h1 className="text-3xl font-bold mb-4">
        Professional Saxophone Player in {cityName}
      </h1>

      <p className="text-gray-300 mb-6">
        Hire a professional saxophone player in {cityName} for weddings, receptions, corporate events, and special celebrations. Bring elegant music and ambiance to your event with KKR Events.
      </p>

      <a
        href="tel:+917288945110"
        className="inline-block bg-[var(--brand)] text-black px-6 py-3 rounded-md font-semibold mb-8 hover:bg-black hover:text-[var(--brand)] transition"
      >
        Call Now to Book Saxophone Player
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
        <p className="mb-2 font-medium text-gray-300">Looking for Saxophone services in other cities?</p>
        <Link href="/saxophone-player" className="text-[var(--brand)] hover:underline">
          View Saxophone Services in Andhra Pradesh & Telangana
        </Link>
      </div>
    </main>
  );
}
