export default function robots() {
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
      sitemap: "https://kkr-events.vercel.app/sitemap.xml", // 🔴 CHANGE THIS
    };
  }
  