// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', "@nuxt/image", '@nuxtjs/tailwindcss'],
  image: {
    domains: ['media.wnews.org.au'],
    cloudflare: {
      baseURL: 'https://media.wnews.org.au'
    }
  }
})