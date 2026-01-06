import { locations } from "@/lib/locations";

export default function sitemap() {
  const baseUrl = "https://yourdomain.com"; // 🔴 CHANGE THIS

  const urls: {
    url: string;
    lastModified: Date;
    changeFrequency: string;
    priority: number;
  }[] = [];

  Object.entries(locations).forEach(([state, cities]) => {
    cities.forEach((city) => {
      urls.push({
        url: `${baseUrl}/${state}/${city}/dj-services`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    });
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...urls,
  ];
}
