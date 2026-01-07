/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://kkr-events.vercel.app',
    generateRobotsTxt: true, // (true by default)
    sitemapSize: 5000,
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/admin/*'], // exclude private pages if any
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
      ],
      additionalSitemaps: [
        'https://kkr-events.vercel.app/sitemap.xml',
      ],
    },
  };
  