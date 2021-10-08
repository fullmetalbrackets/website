<template>
    <main>
    <section>
      <h1 class="blog">Blog</h1>
      <span>Search: <input v-model="query" type="search" autocomplete="off" /></span>
    </section>
    <hr/>
        <ul>
        <li v-for="article of articles" :key="article.slug">
            <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                <h2 class="art-title">{{ article.title }}</h2>
                <p class="art-date">Posted on: {{ formatDate(article.date) }}</p>
                <p class="art-desc">{{ article.summary }}</p>
                <p class="art-tags">
                  Tags:
                  <span v-for="tag in article.tags" :key="tag" class="tag">
                  <nuxt-link :to="`/tags/${tag}`">{{ tag }}</nuxt-link>
                  </span>
                </p>
            </NuxtLink>
        </li>
        </ul>
    </main>
</template>


<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('articles')
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
        .sortBy('date', 'asc')
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
  justify-content: space-between;
  line-height: 1;
  margin-bottom: 1em;
}

.blog {
  margin: 0;
  padding: 0;
  font-size: 2em;
}

span {
  text-align: right;
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
  width: 70%;
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
  margin: auto;
  padding: auto;
  width: auto;
}

li {
  list-style-type: none;
  margin: auto;
  margin-top: -0.25em;
  margin-left: -1.85em;
  margin-bottom: 2em;
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

.art-date {
  padding: 0 auto;
  margin: 0 auto 0 0.35em;
  color: var(--blog-date);
  text-shadow: none;
}

.art-desc {
  padding: 0 auto;
  margin: 0 auto 0 0.75em;
  color: var(--text);
  text-shadow: none;
}

.art-title {
  text-shadow: none;
}

.art-tags {
  padding: 0 auto;
  margin: 0.15em auto 0 0.35em;
  color: var(--blog-date);
  font-size: 0.75em;
}

.tag {
  background: var(--heading);
  font-weight: bold;
  border-radius: 0.25em;
  margin-right: 6px;
  padding: 2px 4px;
}

.tag a {
  color: var(--main);
}

.tag a:visited {
  color: var(--main);
}

.tag a:active {
  color: var(--main);
}

.tag a:hover {
  text-decoration: underline;
}


@media screen and (max-width: 600px) {
  li {
    list-style-type: none;
    padding: 0 auto;
    margin: 0 auto;
    margin-top: -0.25em;
    margin-left: -1.85em;
    margin-bottom: 2em;
  }
}
</style>
