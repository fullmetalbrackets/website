<template>
  <main>
    <h1>Hello World</h1>
    <p>
      I'm Ariel, learning web development and living life in sunny/rainy (depending on the time of year) South Florida.
    </p>
    <p>
      This is my personal website, made with Nuxt.js as a way to learn the framework. Feel free to check out <a href="https://github.com/fullmetalbrackets/website" target="_blank" rel="noopener">this site's source code</a>. Eventually this site will have a portfolio of projects I've worked on, but for now feel free to read my blog -- really just a dump of documentation I've made for myself as I've learned web development, Linux, the command line, etc.
    </p>
      <h2 class="recent">Recent Posts</h2>
      <p>
        Want to see what I've written about lately? Jump right in to my most recent posts below, or <NuxtLink to="/blog">see the full blog</NuxtLink> to read older articles.
      </p>
      <div>
        <ul>
          <li v-for="article of articles" :key="article.slug">
            <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
              <h2>{{ article.title }}</h2>
              <p class="date">Posted on: {{ formatDate(article.date) }}</p>
              <p class="desc">{{ article.summary }}</p>
            </NuxtLink>
          </li>
        </ul>
      </div>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const articles = await $content('articles')
      .sortBy('date', 'desc')
      .limit(3)
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

<style>
div {
  font-size: 1rem;
  margin-bottom: 2.5rem;
}

ul {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  background: var(--accent);
  width: 400px;
  height: 200px;
  margin: auto 1rem;
  padding: 1em;
  border-radius: .5em;
}

li:first-child {
  margin-left: 0;
}

li:last-child {
  margin-right: 0;
}

li a,
li a:active,
li a:visited,
li a:hover {
  color: var(--text);
  text-shadow: none;
}

.recent {
  margin-top: 5rem;
}

.date {
  padding: 0 auto;
  margin: 0 auto;
  color: var(--blog-date);
}

.desc {
  padding: 0 auto;
  margin: 0 auto 2.5em 0.25em;
  color: var(--text-color);
}

@media screen and (max-width: 900px) {
  ul {
    display: flex;
    flex-direction: column;
    margin: auto;
  }

  li {
    margin-bottom: 1em;
  }
}
</style>
