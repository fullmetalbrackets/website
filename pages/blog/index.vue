<template>
  <main>
    <aside>
      <span>Search: <input v-model="query" type="search" autocomplete="off" /></span>
    </aside>
    <hr/>
    <section>
      <ul>
        <li v-for="article of articles" :key="article.slug">
            <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                <h2 class="art-title">{{ article.title }}</h2>
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
  display: flex;
  justify-content: right;
  line-height: 1.15;
  margin: 0 auto;
  padding: 0 auto;
}

.blog {
  margin: 0;
  padding: 0;
  font-size: 2em;
}

aside {
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
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
  width: 250px;
  box-sizing: border-box;
  font-family: 'Fira Sans', 'Courier New', Courier, monospace;
  outline: none;
}

hr {
  border: 0.25px solid var(--line-color);
  margin-top: 0;
  margin-bottom: 1em;
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
  padding: 10px;
  border-radius: 0.5em;
  background: var(--accent);
}

li:hover {
  background: var(--bg);
  transition-duration: 0.25s;
  transition-property: background, fill, stroke;
  transition-timing-function: linear;
}

@media screen and (min-width: 200px) and (max-width: 767px) {
  section li {
    margin: 1em 0;
  }

  section li:first-child {
    margin: 0;
  }
}
</style>
