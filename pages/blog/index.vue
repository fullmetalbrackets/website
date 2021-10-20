<template>
  <main>
    <aside>
      <span><h1>Blog</h1></span>
      <span>Search: <input v-model="query" type="search" autocomplete="off" /></span>
    </aside>
    <section>
      <ul>
        <li v-for="article of articles" :key="article.slug">
            <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                <h2 class="title">{{ article.title }}</h2>
                <hr class="divider">
                <p class="art-date">Posted on: {{ formatDate(article.date) }}</p>
                <p class="art-desc">{{ article.description }}</p>
                <p class="art-tags">
                  <span v-for="tag in article.tags" :key="tag" class="tag">
                  <nuxt-link :to="`/tags/${tag}`">{{ tag }}</nuxt-link>
                  </span>
                </p>
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
      .without('body')
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

  head() {
      return {
        link: [
          {
            hid: "canonical",
            rel: "canonical",
            href: `https://arieldiaz.codes/blog`,
          }
        ]
      }
    },

  watch: {
    async query (query) {
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

.title {
  margin: 0 0 1rem 0;
  padding: 0;
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
  border-radius: 0.25em;
  background: var(--form-bg);
  height: auto;
  width: 350px;
  box-sizing: border-box;
  font-family: 'Fira Sans', 'Courier New', Courier, monospace;
  outline: none;
}

ul {
  list-style-type: none;
  margin: 0 auto;
  padding: 0;
  width: auto;
}

li {
  list-style-type: none;
  margin: auto;
  padding: 1em;
  border-radius: 0.5em;
  background: var(--nav);
  margin-bottom: 1.5em;
  height: auto;
  max-width: 1200px;
}

li:last-child {
  margin-bottom: 0;
}

li:hover {
  background: var(--accent);
}

@media screen and (min-width: 200px) and (max-width: 767px) {
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
