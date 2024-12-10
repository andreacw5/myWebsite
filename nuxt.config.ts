import vuetify from 'vite-plugin-vuetify';

// PWA Config
const title = "Andrea Tombolato";
const shortTitle = "Andrea Tombolato";
const description = "Andrea Tombolato, Web Developer con base a Milano e questo è il mio sito personale!";
const image = "https://file-harbor.com/api/v1/files/59eede5fb0b097a63e0eb276add71e83";
const url = "https://andreatombolato.dev/";
const themeColor = "#212122";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  alias: {
    assets: '/<rootDir>/assets',
    composables: '/<rootDir>/composables'
  },

  app: {
    head: {
      titleTemplate: '%s - Andrea Tombolato',
      title: 'Home',
      htmlAttrs: {
        lang: 'it'
      },
      link: [
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: url },
      ],
      meta: [
        { key: "description", name: "description", content: description, },
        { property: "og:site_name", content: title },
        { key: "og:type", property: "og:type", content: "website" },
        { key: "og:url", property: "og:url", content: url },
        { key: "og:image:secure_url", property: "og:image:secure_url", content: image },
        { key: "og:title", property: "og:title", content: title },
        { key: "og:description", property: "og:description", content: description },
        { key: "og:image", property: "og:image", content: image },
        //Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { key: "twitter:url", name: "twitter:url", content: url },
        { key: "twitter:title", name: "twitter:title", content: title },
        { key: "twitter:description", name: "twitter:description", content: description },
        { key: "twitter:image", name: "twitter:image", content: image },
      ],
    },
  },

  css: ['vuetify/styles', "@/assets/main.scss"],

  devtools: { enabled: true },

  typescript: {
    typeCheck: true
  },

  build: { transpile: ["vuetify"] },

  plugins: ['~/plugins/vuetify.ts'],

  modules: [
    "@vite-pwa/nuxt",
    "@sidebase/nuxt-auth",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    '@nuxt/image',
    '@nuxt/icon',
    /* Treeshaking: https://vuetifyjs.com/en/features/treeshaking/#automatic-treeshaking */
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config?.plugins?.push(vuetify());
      });
    }
  ],

  icon: {
    clientBundle: {
      icons: [
        'line-md:arrow-small-up',
        'line-md:github',
        'line-md:login',
        'line-md:downloading-loop',
        'line-md:file-download',
        'line-md:gauge-full',
        'line-md:arrow-close-up',
        'line-md:external-link',
        'line-md:coffee-loop',
        'line-md:home',
        'line-md:briefcase',
        'line-md:folder-check',
        'line-md:arrow-right',
        'line-md:download',
        'line-md:map-marker-filled',
        'line-md:menu-to-close-transition',
        'line-md:menu-fold-right',
        'line-md:chat',
        'line-md:compass-loop',
        'line-md:logout',
        'line-md:list-indented',
        'line-md:question-circle',
        'line-md:email-arrow-right',
        'line-md:text-box-multiple',
      ],
      scan: true,
      includeCustomCollections: true,
    },
  },

  // I18N Configuration
  i18n: {
    /* module options */
    lazy: true,
    langDir: "locales",
    strategy: 'no_prefix',
    locales: [
      {
        code: "en-US",
        language: "en-US",
        icon: 'flagpack:gb-ukm',
        name: "English",
        file: "en-US.json",
      },{
        code: "it-IT",
        language: "it-IT",
        icon: 'flagpack:it',
        name: "Italiano",
        file: "it-IT.json",
      },
    ],
    detectBrowserLanguage: {
      useCookie: false
    },
    defaultLocale: "it-IT",
  },

  pwa: {
    includeAssets: ["favicon.ico", "robots.txt"],
    manifest: {
      name: shortTitle,
      short_name: shortTitle,
      description: description,
      theme_color: themeColor,
      lang: "en",
      background_color: "#ffffff",
      icons: [
        {
          src: "/icons/pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/icons/pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any",
        },
      ],
    },
  },

  auth: {
    // https://github.com/geraldmuvengei06/nuxt-3-auth-credentials/blob/main/nuxt.config.ts
    isEnabled: true,
    baseURL: 'https://andreatombolato.dev/api/v1',
    provider: {
      type: 'local',
      pages: {
        login: '/auth/login'
      },
      endpoints: {
        signIn: { path: 'users/login', method: 'post' },
        signOut: { path: 'users/logout', method: 'post' },
        getSession: { path: 'users/me', method: 'get' }
      },
    }
  },

  // Nuxt compatibility date
  compatibilityDate: '2024-12-03',
});
