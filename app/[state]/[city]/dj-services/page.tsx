import { locations } from "@/lib/locations";
import { notFound } from "next/navigation";
import Link from "next/link";

/* 🔥 Static generation */
export async function generateStaticParams() {
  const params: { state: string; city: string }[] = [];

  Object.entries(locations).forEach(([state, cities]) => {
    cities.forEach((city) => {
      params.push({ state, city });
    });
  });

  return params;
}

/* 🔥 SEO metadata (async params) */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}) {
  const { state, city } = await params;

  const cityName = city.replace(/-/g, " ");
  const stateName = state.replace(/-/g, " ");

  return {
    title: `Best DJ Services in ${cityName} | KKR Events`,
    description: `KKR Events provides professional DJ services in ${cityName}, ${stateName}. Wedding DJ, party DJ, and event DJ services available.`,
  };
}

/* ✅ Validate location */
function isValidLocation(state: string, city: string) {
  return locations[state as keyof typeof locations]?.includes(city);
}

/* ✅ PAGE */
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

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 pt-40">
      {/* 🔥 BREADCRUMB SCHEMA */}
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
                item: "https://yourdomain.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "DJ Services",
                item: "https://yourdomain.com/dj-services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: `${cityName} DJ Services`,
                item: `https://yourdomain.com/${state}/${city}/dj-services`,
              },
            ],
          }),
        }}
      />

      <h1 className="text-3xl font-bold mb-4">
        Best DJ Services in {cityName}
      </h1>

      <p className="text-gray-700 mb-6">
        KKR Events offers professional DJ services in {cityName}, {stateName}
        for weddings, receptions, birthdays, corporate events, and parties.
      </p>

      <h2 className="text-2xl font-semibold mb-3">
        Why Choose Our DJ Services in {cityName}?
      </h2>

      <ul className="list-disc pl-6 mb-6">
        <li>Experienced wedding & party DJs</li>
        <li>Latest sound systems & lighting</li>
        <li>Affordable pricing</li>
        <li>Serving {cityName} and nearby villages</li>
      </ul>

      <p className="mb-6">
        We provide DJ services across {cityName} including surrounding areas and
        nearby villages.
      </p>

      <a
        href="tel:+91XXXXXXXXXX"
        className="inline-block bg-black text-white px-6 py-3 rounded-md"
      >
        Call Now to Book DJ Services
      </a>

      {/* 🔥 INTERNAL LINK BACK TO HUB */}
      <div className="mt-10 border-t pt-6">
        <p className="mb-2 font-medium">
          Looking for DJ services in other cities?
        </p>

        <Link
          href="/dj-services"
          className="text-blue-600 hover:underline"
        >
          View DJ Services in Andhra Pradesh & Telangana
        </Link>
      </div>
    </main>
  );
}
