let Routes = async () => {
  const { $content } = require("@nuxt/content");
  const files = await $content({ deep: true }).only(["path"]).fetch();

  return files.map((file) => (file.path === "/index" ? "/" : file.path));
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  ssr: false,

  env: {
    baseUrl: process.env.BASE_URL || 'https://arieldiaz.codes'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ariel Diaz',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Website and blog of Ariel Diaz.' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'keywords', name: 'keywords', content: 'HTML, CSS, PHP, JavaScript, Node JS, Vue JS, Nuxt JS, web development, web design, Linux, tech, blog'},
      { hid: 'author', name: 'author', content: 'Ariel Diaz'},
      { name: 'format-detection', content: 'telephone=no' },
      { property: "og:site_name", content: "Ariel Diaz" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://arieldiaz.codes",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "WAriel Diaz",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Website and blog of Ariel Diaz.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/icon.png",
      },
      { property: "og:image:width", content: "740" },
      { property: "og:image:height", content: "300" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://arieldiaz.codes",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Ariel Diaz",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "Website and blog of Ariel Diaz.",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "/icon.png",
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        hid: "canonical",
        rel: "canonical",
        href: process.env.BASE_URL,
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Ariel Diaz',
      short_name: 'Ariel Diaz',
      lang: 'en',
      theme_color: '#161f69',
      background_color: '#161f69'
    },
    icon: {
      fileName: 'icon.png',
      sizes: [64, 120, 144, 152, 192, 384, 512]
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: false,
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  sitemap: {
    hostname: 'https://arieldiaz.codes',
    path: '/sitemap.xml',
    gzip: true,
    exclude: [
      '/thanks'
    ],
    routes() {
      return Routes();
    },
  },

  generate: {
    fallback: true
  },

  server: {
    port: 3000,
    host: '0.0.0.0',
  }
}
