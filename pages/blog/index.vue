<template>
  <main>
    <aside>
      <span class="blog-page"><h1>Blog</h1></span>
      <span>Search: <input v-model="query" type="search" autocomplete="off" placeholder="" /></span>
    </aside>
    <section>
      <ul class="post-list">
        <li v-for="article of articles" :key="article.slug" class="posts">
            <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                <h2 class="title">{{ article.title }}</h2>
                <hr class="divider">
                <p id="info">
                  <span id="date">
                    {{ formatDate(article.date) }}
                  </span>
                  <span id="tags">
                    <span v-for="tag in article.tags" :key="tag" class="tag">
                      <nuxt-link :to="`/tags/${tag}`">{{ tag }}</nuxt-link>
                    </span>
                  </span>
                </p>
                <p class="art-desc">{{ article.description }}</p>
            </NuxtLink>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .without('body', 'update')
      .sortBy('date', 'desc')
      .fetch()
    return {
      articles
    }
  },

  data () {
    return {
      query: '',
      articles: []
    }
  },

  watch: {
    async query (query) {
      console.log(this.articles)
      if (!query) {
        this.articles = []
        return
      }
      this.articles = await this.$content('articles')
        .sortBy('date', 'desc')
        .search(query)
        .fetch()
    }
  },

  head() {
    return {
      meta: [
        { hid: 'keywords', name: 'keywords', content: 'HTML, CSS, PHP, JavaScript, Node JS, Vue JS, Nuxt JS, web development, web design, Linux, tech, blog'},
        { hid: 'description', name: 'description', content: 'Blog of Ariel Diaz.' },
        { hid: 'author', name: 'author', content: 'Ariel Diaz'},
        { property: "og:site_name", content: "Ariel Diaz" },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://arieldiaz.codes/blog",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Ariel Diaz",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Blog of Ariel Diaz.",
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: "https://arieldiaz.codes/blog",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Ariel Diaz",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "Blog of Ariel Diaz.",
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `https://arieldiaz.codes/blog`,
        }
      ]
    }
  },

    methods: {
    formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<style scoped>
section {
  line-height: 1.15;
  margin: 0 auto;
  padding: 0 auto;
}

.blog-page {
  font-size: 1.2rem;
}

.title {
  margin: 0 0 1rem 0;
  padding: 0;
  text-shadow: 0px 0px 4px var(--pink-glow);
}

#date {
  padding: 0 auto;
  margin: 0 auto;
  color: var(--subheading);
  margin: 0;
  margin-top: 4px;
}

#desc {
  padding: 0 auto;
  margin: 0.25em 0.5em;
  color: var(--text);
  min-height: 80px;
  max-height: auto;
  min-width: 300px;
  max-width: auto;
}

#tags {
  margin: 0;
}

#info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.25em;
}

.tag {
  padding: 2px 4px;
  margin-right: 6px;
  background: var(--heading);
  color: #000;
  font-weight: bold;
  border-radius: 0.25em;
}

aside {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 2.5em;
}

input {
  line-height: 1;
  font-size: 1rem;
  border-style: none;
  margin: auto;
  padding: 5px;
  line-height: 1;
  border-radius: 1rem;
  background: var(--form-bg);
  height: auto;
  width: 350px;
  box-sizing: border-box;
  font-family: 'Fira Sans', 'Courier New', Courier, monospace;
  outline: none;
}

.post-list {
  list-style-type: none;
  margin: 0 auto;
  padding: 0;
  width: auto;
}

.posts {
  list-style-type: none;
  margin: auto;
  padding: 1em;
  border-radius: 1rem;
  background: var(--nav);
  margin-bottom: 1.5em;
  height: auto;
  max-width: 1200px;
}

.posts:last-child {
  margin-bottom: 0;
}

.posts:hover {
  background: var(--accent);
}

.tag a, .tag a:active, .tag a:visited, .tag a:hover, .tag a:focus {
  color: #000;
}

.tag:hover {
  background: var(--subheading);
}

a:hover::after,
a:focus::after {
  transform: scale(0);
}

@media screen and (min-width: 200px) and (max-width: 767px) {
  aside {
    margin: 0.5em 0;
  }
  input {
    width: 125px;
    margin: 0;
  }

  span {
    margin: 0;
  }

  h1 {
    font-size: 1.75em;
    margin: 0;
  }
}
</style>
