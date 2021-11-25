// const { configureSitemap } = require('@sergeymyssak/nextjs-sitemap');
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://daoduytung.herokuapp.com',
    generateRobotsTxt: true, // (optional)
    sitemapSize: 7000,
    // exclude: ['/server-sitemap.xml'], // <= exclude here
    // robotsTxtOptions: {
    //     additionalSitemaps: [
    //         'https://daoduytung.herokuapp.com/server-sitemap.xml', // <==== Add here
    //     ],
    // }
}