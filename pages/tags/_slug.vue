<template>
<main>
  <h1 class="articles">Articles tagged: <span class="art-tag">{{ $route.params.slug }}</span></h1>
  <p class="blog-return">
  <a href="/blog"><i class="return"></i> Return to Blog</a>
  </p>
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
  async asyncData({ params, $content }) {
      const articles = await $content('articles')
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
hr {
  border: 0.25px solid var(--line-color);
  margin-top: 1em;
  margin-bottom: 1em;
}

.blog-return {
  margin: 0;
  padding: 0;
}

.blog-return a:hover {
  color: var(--hover);
}

.return {
  border: solid;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  margin: 0;
}

.articles {
  font-size: 2em;
  margin-bottom: 0.5em;
}

.art-tag {
  color: var(--text);
}

.art-tags {
  padding: 0 auto;
  margin: 0.25em auto 0 0.35em;
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

.tag a, a:active, a:focus {
  color: var(--main);
}

.tag:hover {
  background-color: var(--blog-date);
  text-decoration: none;
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
