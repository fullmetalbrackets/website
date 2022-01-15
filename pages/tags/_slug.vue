<template>
<main>
  <p class="tag-page">
    <span class="articles">
      Articles tagged:
    </span>
    <span class="article-tag">
      {{ $route.params.slug }}
    </span>
  </p>
  <p class="tag-page">
    <a href="/blog">
      <i class="return"></i> Return to Blog
    </a>
  </p>
  <ul>
    <li v-for="article of articles" :key="article.slug">
      <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
        <h2 class="art-title">{{ article.title }}</h2>
        <hr/>
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
</main>
</template>

<script>
export default {
  async asyncData({ params, $content }) {
      const articles = await $content('articles')
        .without('body')
        .sortBy('date', 'desc')
        .where({ tags: { $contains: params.slug } })
        .fetch()
      return { articles }
  },

  methods: {
    formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
    }
  }
};
</script>

<style scoped>
.tag-page {
  display: block;
  margin: 0 0 1em 0;
}
.articles {
  font-size: 2em;
}
.article-tag {
  font-size: 2em;
  color: var(--heading);
}

.blog-return {
  margin-bottom: 1em;
}

.return {
  border: solid;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  margin: 0;
  margin-bottom: 3px;
}

li {
  list-style-type: none;
  padding: 1em;
  margin: 1em auto;
  border-radius: 1rem;
  background: var(--nav);
}

li:hover {
  background: var(--accent);
}

.art-title {
  text-shadow: none;
  min-height: 70px;
}

@media screen and (min-width: 200px) and (max-width: 767px) {
  main {
    font-size: 1.25em;
  }

  section li {
    margin: 1em 0;
  }

  section li:first-child {
    margin: 0;
  }

.articles, .article-tag {
  font-size: 1.25em;
}

  .art-title {
    min-height: 120px;
  }
}
</style>
