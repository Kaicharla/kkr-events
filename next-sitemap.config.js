/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://kkr-events.vercel.app',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    changefreq: 'daily',
    priority: 0.7,
    outDir: './public',
    transform: async (config, url) => {
      const fixedUrl = url.replace(/([^:]\/)\/+/g, '$1'); // fix double slashes
      return {
        loc: fixedUrl,
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: new Date().toISOString(),
      };
    },
    robotsTxtOptions: {
      policies: [{ userAgent: '*', allow: '/' }],
    },
  };
  