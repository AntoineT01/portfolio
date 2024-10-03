// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

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
  app: {
    head: {
      title: 'Accueil', // Ceci sera le titre par défaut
      titleTemplate: '%s - Mon Portfolio', // Ceci permet d'ajouter un suffixe à chaque titre de page
      meta: [
        { name: 'description', content: 'Mon portfolio personnel' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon3.ico' }
      ],
      script: [
        {
          innerHTML: `
            (function() {
              const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
              document.documentElement.classList.toggle('dark', theme === 'dark');
            })();
          `,
          type: 'text/javascript',
        },
      ],
    }
  },
  components: {
    global: true,
    dirs: ['~/components']
  },

  compatibilityDate: '2024-09-24'
})