const webpack = require('webpack')
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   config.plugins.push(
  //     new webpack.ProvidePlugin({
  //       $: "jquery",
  //       jQuery: "jquery",
  //       "window.jQuery": "jquery"
  //     })
  //   )
  //   return config
  // }


  i18n: {
    defaultLocale: 'vi',
    // These are all the locales you want to support in
    // your application
    locales: ['vi', 'en'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`

    // localeDetection: false,

    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    // domains: [
    //   {
    //     domain: 'example.com',
    //     defaultLocale: 'vi-VN',
    //   },
    //   {
    //     domain: 'example.en',
    //     defaultLocale: 'nl-NL',
    //   },
    //   {
    //     domain: 'example.fr',
    //     defaultLocale: 'fr',
    //     // an optional http field can also be used to test
    //     // locale domains locally with http instead of https
    //     http: true,
    //   },
    // ],
    localeDetection: false,
  },
  // trailingSlash: true,
  plugins: [
    // other plugins,
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
  ],
}
