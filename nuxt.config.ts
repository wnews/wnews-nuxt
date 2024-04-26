// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', "@nuxt/image", '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxtjs/sitemap', 'nuxt-disqus',
    '@stefanobartoletti/nuxt-social-share'
  ],
  // content: {
  //   experimental: {
  //     search: true
  //   }
  // },
  image: {
    domains: ['media.wnews.org.au'],
    cloudflare: {
      baseURL: 'https://media.wnews.org.au'
    }
  },
  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
      Inter: '200..700',
      'Crimson Pro': {
        wght: '200..900',
        ital: '200..700',
      }
    }
  },
  site: {
    url: 'https://www.wnews.org.au'
  },
  sitemap: {
    // hostname: 'https://www.wnews.org.au',
    gzip: true,
    exclude: [
      '/advertisements',
    ],
  },
  disqus: {
    shortname: "waranganews",
  },
  socialShare: {

  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})