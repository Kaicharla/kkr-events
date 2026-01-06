import { locations } from "@/lib/locations";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  const params: { state: string; city: string }[] = [];
  Object.entries(locations).forEach(([state, cities]) =>
    cities.forEach((city) => params.push({ state, city }))
  );
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}) {
  const { state, city } = await params;
  const cityName = city.replace(/-/g, " ");
  return {
    title: `Best Teenmaar Band in ${cityName} | KKR Events`,
    description: `Book energetic Teenmaar band services in ${cityName} for weddings and celebrations.`,
  };
}

function isValidLocation(state: string, city: string) {
  return locations[state as keyof typeof locations]?.includes(city);
}

export default async function TeenmaarCityPage({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}) {
  const { state, city } = await params;
  if (!isValidLocation(state, city)) notFound();

  const cityName = city.replace(/-/g, " ");

  return (
    <main className="max-w-5xl mx-auto px-6 pt-40 pb-20">
      <h1 className="text-3xl font-bold mb-4">
        Best Teenmaar Band in {cityName}
      </h1>

      <p className="mb-6 text-gray-700">
        KKR Events provides energetic Teenmaar band services in {cityName} for
        weddings, baraat and festive occasions.
      </p>

      <a
        href="tel:+91XXXXXXXXXX"
        className="inline-block bg-black text-white px-6 py-3 rounded-md"
      >
        Call Now to Book Teenmaar
      </a>

      <div className="mt-10 border-t pt-6">
        <Link href="/teenmaar" className="text-blue-600 hover:underline">
          View Teenmaar Services in Other Cities
        </Link>
      </div>
    </main>
  );
}
