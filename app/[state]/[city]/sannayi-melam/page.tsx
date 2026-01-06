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

/* 🔥 SEO metadata */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}) {
  const { state, city } = await params;

  const cityName = city.replace(/-/g, " ");
  const stateName = state.replace(/-/g, " ");

  return {
    title: `Best Sannayi Melam in ${cityName} | KKR Events`,
    description: `KKR Events provides traditional Sannayi Melam services in ${cityName}, ${stateName} for weddings, poojas and auspicious ceremonies.`,
  };
}

/* ✅ Validate location */
function isValidLocation(state: string, city: string) {
  return locations[state as keyof typeof locations]?.includes(city);
}

/* ✅ PAGE */
export default async function SannayiMelamCityPage({
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
                name: "Sannayi Melam",
                item: "https://yourdomain.com/sannayi-melam",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: `${cityName} Sannayi Melam`,
                item: `https://yourdomain.com/${state}/${city}/sannayi-melam`,
              },
            ],
          }),
        }}
      />

      <h1 className="text-3xl font-bold mb-4">
        Best Sannayi Melam Services in {cityName}
      </h1>

      <p className="text-gray-700 mb-6">
        KKR Events provides authentic Sannayi Melam services in {cityName},{" "}
        {stateName} for weddings, engagements, poojas and religious ceremonies.
      </p>

      <h2 className="text-2xl font-semibold mb-3">
        Why Choose Our Sannayi Melam in {cityName}?
      </h2>

      <ul className="list-disc pl-6 mb-6">
        <li>Experienced traditional Sannayi artists</li>
        <li>Pure auspicious wedding & pooja music</li>
        <li>Affordable pricing & flexible duration</li>
        <li>Serving {cityName} and nearby villages</li>
      </ul>

      <p className="mb-6">
        Our Sannayi Melam team is available across {cityName} including nearby
        towns and villages. Book KKR Events for a divine traditional experience.
      </p>

      <a
        href="tel:+91XXXXXXXXXX"
        className="inline-block bg-black text-white px-6 py-3 rounded-md"
      >
        Call Now to Book Sannayi Melam
      </a>

      {/* 🔥 INTERNAL LINK BACK TO HUB */}
      <div className="mt-10 border-t pt-6">
        <p className="mb-2 font-medium">
          Looking for Sannayi Melam in other cities?
        </p>

        <Link
          href="/sannayi-melam"
          className="text-blue-600 hover:underline"
        >
          View Sannayi Melam Services in Andhra Pradesh & Telangana
        </Link>
      </div>
    </main>
  );
}
