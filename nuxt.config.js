const fs = require('fs').promises;
const path = require('path');

let posts = [];

const constructFeedItem = async (post, dir, hostname) => {
  const filePath = path.join(__dirname, `content/articles/${post.slug}.md`);
  const content = await fs.readFile(filePath, 'utf8');
  const url = `${hostname}/${dir}/${post.slug}`;
  return {
    title: post.title,
    id: url,
    link: url,
    date: new Date(post.createdAt),
    description: post.description,
    content: post.bodyText
  }
}

const create = async (feed, filePath) => {
  const hostname = 'https://arieldiaz.codes';
  feed.options = {
    title: "My Blog",
    description: "I write about tech stuff",
    link: `${hostname}/feed.xml`
  }
  const { $content } = require('@nuxt/content')
  if (posts === null || posts.length === 0)
    posts = await $content('articles').fetch();

  for (const post of posts) {
    const feedItem = await constructFeedItem(post, filePath, hostname);
    feed.addItem(feedItem);
  }
  return feed;
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
        content: "Ariel Diaz",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Website and blog of Ariel Diaz.",
      },
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
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://arieldiaz.codes",
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
      sizes: [64, 120, 144, 152, 192, 384, 512]
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: false,
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
      path: '/feed.xml',
      async create(feed) {
        feed.options = {
          title: 'Ariel Diaz Blog',
          description: 'I stuff about tech stuff',
          link: 'https://arieldiaz.codes/feed.xml',
        };
        const { $content } = require('@nuxt/content');
        const posts = await $content('articles').fetch();
        posts.forEach((post) => {
          const url = `https://arieldiaz.codes/blog/${post.slug}`;
          feed.addItem({
            title: post.title,
            id: url,
            link: url,
            date: new Date(post.createdAt),
            description: post.description,
            content: post.bodyText,
          });
        });
      },

      cacheTime: 1000 * 60 * 15,
      type: 'rss2',
    },
  ],

  hooks: {
    'content:file:beforeInsert': (document) => {
      const md = require('markdown-it')();
      if (document.extension === '.md') {
        const { text } = require('reading-time')(document.text);

        document.readingTime = text;
        const mdToHtml = md.render(document.text);
        document.bodyText = mdToHtml;
      }
    },
  },

  markdownit: {
      preset: 'default',
      linkify: true,
      breaks: true,
      use: ['markdown-it-div', 'markdown-it-attrs'],
    },

  generate: {
    fallback: true
  },

  server: {
    port: 3000,
    host: '0.0.0.0',
  }
}
