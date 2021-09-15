<template>
    <main>
        <ul>
        <li v-for="article of articles" :key="article.slug">
            <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                <h2 class="art-title">{{ article.title }}</h2>
                <p class="art-date">Posted on: {{ formatDate(article.date) }}</p>
                <p class="art-desc">{{ article.summary }}</p>
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
  methods: {
    formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<style scoped>
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
}

li:hover {
  background: var(--bg);
}

@media screen and (max-width: 600px) {
  li {
    list-style-type: none;
    padding: 0 auto;
    margin: 0 auto;
    margin-top: -2.25em;
    margin-left: -1.8em;
  }
}
</style>
