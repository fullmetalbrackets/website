export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ariel Diaz',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.cdnfonts.com/css/streamster' }
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
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/feed',
    '@nuxtjs/markdownit'
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
      purpose: ['any'],
      sizes: [64, 120, 144, 152, 192, 384, 512]
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: false
      }
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  sitemap: {
    hostname: 'https://arieldiaz.codes',
    path: '/sitemap.xml',
    gzip: true,
    exclude: [
      '/thanks',
      '/404',
      '/form.html'
    ],
    routes: async () => {
      const { $content } = require('@nuxt/content')
      const data = await $content('articles').only(['slug']).fetch()
      return data.map((post) => `/blog/${post.slug}`)
    }
  },

  feed: [
    {
      path: '/rss.xml',
      async create(feed) {
        feed.options = {
          title: 'Ariel Diaz - Blog',
          description: 'I write about tech stuff',
          favicon: "https://arieldiaz.codes/favicon.ico",
          copyright: "All rights reserved 2021, Ariel Diaz",
          language: "en",
          image: "https://arieldiaz.codes/img/tr-icon.png"
        }
        const { $content } = require('@nuxt/content');
        const posts = await $content('articles').fetch();
        posts.forEach((post) => {
          const url = `https://arieldiaz.codes/blog/${post.slug}`;
          feed.addItem({
            title: post.title,
            id: url,
            link: url,
            published: new Date(post.date),
            description: post.description,
            content: post.bodyText,
            author: [
              {
                name: 'Ariel Diaz',
                email: 'fullmetalbrackets@gmail.com',
              }
            ]
          });
        });
      },
      cacheTime: 1000 * 60 * 15,
      type: 'rss2'
    },
    {
      path: '/feed.json',
      async create(feed) {
        feed.options = {
          title: 'Ariel Diaz - Blog',
          description: 'I write about tech stuff',
          favicon: "https://arieldiaz.codes/favicon.ico",
          copyright: "All rights reserved 2021, Ariel Diaz",
          image: "https://arieldiaz.codes/img/tr-icon.png"
        }
        const { $content } = require('@nuxt/content');
        const posts = await $content('articles').fetch();
        posts.forEach((post) => {
          const url = `https://arieldiaz.codes/blog/${post.slug}`;
          feed.addItem({
            title: post.title,
            id: url,
            link: url,
            published: new Date(post.date),
            description: post.description,
            content: post.bodyText,
            author: [
              {
                name: 'Ariel Diaz',
                email: 'fullmetalbrackets@gmail.com',
              }
            ]
          });
        });
      },
      cacheTime: 1000 * 60 * 15,
      type: 'json1'
    }
  ],

  hooks: {
    'content:file:beforeInsert': (document) => {
      const md = require('markdown-it')();
      if (document.extension === '.md') {
        const mdToHtml = md.render(document.text);
        document.bodyText = mdToHtml;
      }
    },
  },

  markdownit: {
      preset: 'default',
      linkify: true,
      breaks: true,
    },

  generate: {
    fallback: true
  },

  server: {
    port: 3000,
    host: '0.0.0.0',
  }
}
