// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/tailwind.css'],

  build: {
    transpile: ['pinia']
  },

  pinia: {
    autoImports: ['defineStore', 'storeToRefs']
  },

  imports: {
    dirs: ['stores']
  },

  vite: {
    optimizeDeps: {
      include: ['pinia']
    }
  },

  compatibilityDate: '2024-09-24'
})