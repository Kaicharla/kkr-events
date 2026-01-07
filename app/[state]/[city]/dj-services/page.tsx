import { locations } from "@/lib/locations";
import { notFound } from "next/navigation";
import Link from "next/link";

/* 🔥 Static generation for all city/state pages */
export async function generateStaticParams() {
  const params: { state: string; city: string }[] = [];

  Object.entries(locations).forEach(([state, cities]) => {
    cities.forEach((city) => {
      params.push({ state, city });
    });
  });

  return params;
}

/* 🔥 SEO metadata (dynamic per city) */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}) {
  const { state, city } = await params;
  const cityName = city.replace(/-/g, " ");
  const stateName = state.replace(/-/g, " ");

  return {
    title: `Professional DJ Services in ${cityName} | KKR Events`,
    description: `Hire KKR Events professional DJ services in ${cityName}, ${stateName}. Wedding DJ, party DJ, and corporate events covered. Call now to book!`,
  };
}

/* ✅ Validate location */
function isValidLocation(state: string, city: string) {
  return locations[state as keyof typeof locations]?.includes(city);
}

/* ✅ PAGE COMPONENT */
export default async function DJServicePage({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}) {
  const { state, city } = await params;

  if (!isValidLocation(state, city)) {
    notFound();
  }

  const cityName = city.replace(/-/g, " ");
  const stateName = state.replace(/-/g, " ");

  /* FAQ data (dynamic per city) */
  const faqs = [
    {
      question: `How do I book DJ services in ${cityName}?`,
      answer: `You can book KKR Events DJ services in ${cityName} by calling +91 7288945110 or filling out our contact form. Our team responds instantly!`,
    },
    {
      question: `What types of events do you cover in ${cityName}?`,
      answer: `We provide DJ services for weddings, receptions, corporate events, birthday parties, and other celebrations in ${cityName} and nearby areas.`,
    },
    {
      question: `Do you provide custom playlists and lighting setups in ${cityName}?`,
      answer: `Yes! We customize the music, lighting, and sound system based on your event type, theme, and preferences.`,
    },
  ];

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
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://kkr-events.vercel.app",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "DJ Services",
                item: "https://kkr-events.vercel.app/dj-services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: `${cityName} DJ Services`,
                item: `https://kkr-events.vercel.app/${state}/${city}/dj-services`,
              },
            ],
          }),
        }}
      />

      {/* 🔥 FAQ Schema for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* PAGE CONTENT */}
      <h1 className="text-3xl font-bold mb-4">
        Professional DJ Services in {cityName}
      </h1>

      <p className="text-gray-300 mb-6">
        KKR Events provides professional DJ services in {cityName}, {stateName} for weddings, receptions, parties, and corporate events. We ensure high-quality sound, lighting, and a crowd-pleasing playlist to make your event unforgettable.
      </p>

      <h2 className="text-2xl font-semibold mb-3">
        Why Choose Our DJ Services in {cityName}?
      </h2>

      <ul className="list-disc pl-6 mb-6 text-gray-300">
        <li>Experienced wedding & party DJs</li>
        <li>High-quality sound systems & lighting</li>
        <li>Custom playlists for your event</li>
        <li>Affordable and transparent pricing</li>
        <li>Serving {cityName} and surrounding areas</li>
      </ul>

      <p className="mb-6 text-gray-300">
        We cover all areas in {cityName} and nearby towns. Our team ensures professional service and entertainment for every event type.
      </p>

      <a
        href="tel:+917288945110"
        className="inline-block bg-[var(--brand)] text-black px-6 py-3 rounded-md font-semibold mb-8 hover:bg-black hover:text-[var(--brand)] transition"
      >
        Call Now to Book DJ Services
      </a>

      {/* CITY SPECIFIC FAQ */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold mb-4 text-[var(--brand)]">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-neutral-900 p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">{faq.question}</summary>
              <p className="mt-2 text-gray-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* INTERNAL LINK BACK TO HUB */}
      <div className="mt-10 border-t pt-6">
        <p className="mb-2 font-medium text-gray-300">
          Looking for DJ services in other cities?
        </p>
        <Link
          href="/dj-services"
          className="text-[var(--brand)] hover:underline"
        >
          View DJ Services in Andhra Pradesh & Telangana
        </Link>
      </div>
    </main>
  );
}
