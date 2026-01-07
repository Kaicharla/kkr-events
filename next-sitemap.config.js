/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://kkr-events.vercel.app',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/admin/*'],
    outDir: './public', // ✅ ensure sitemaps are in public
    transform: async (config, url) => {
      // Remove double slashes in generated URLs
      const fixedUrl = url.replace(/\/\//g, '/').replace('https:/', 'https://');
      return {
        loc: fixedUrl,
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: new Date().toISOString(),
      };
    },
  };
  