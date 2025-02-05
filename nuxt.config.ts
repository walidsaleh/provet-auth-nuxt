// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-02-05',
  devtools: { enabled: true },
  css: ['@provetcloud/css', '@/assets/css/main.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg',
        },
      ],
    },
  },
  ssr: false,
  build: {
    transpile: ['@provetcloud/web-components'],
  },
  routeRules: {
    '/registration/**': { prerender: false },
    '/login': { prerender: false },
    '/signup': { prerender: false },
  },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      alwaysRedirect: true,
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    locales: [
      {
        code: 'en',
        iso: 'en-US',
      },
    ],
    vueI18n: '~/i18n.config.ts',
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('provet-'),
    },
  },
})
