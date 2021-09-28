<template>
  <main>
    <h1 class="typing">Hello World</h1><br>
    <p>
      I'm Ariel, learning web development and living life in sunny/rainy (depending on the time of year) South Florida.
    </p>
    <p>
      This is my personal website, made with Nuxt.js as a way to learn the framework. Feel free to check out <a href="https://github.com/fullmetalbrackets/website" target="_blank" rel="noopener">this site's source code</a>. Eventually this site will have a portfolio of projects I've worked on, but for now feel free to read my blog -- really just a dump of documentation I've made for myself as I've learned web development, Linux, the command line, etc. If you want to reach out, please use the <Nuxt-Link to="/about#contact">contact form</Nuxt-Link>. Thanks for visiting!
    </p>
      <h2 class="recent">Recent Posts</h2>
      <p>
        Want to see what I've written about lately? Jump right in to my most recent posts below, or <NuxtLink to="/blog">see the full blog</NuxtLink> to read older articles.
      </p>
      <div id="recent-posts">
        <ul>
          <li v-for="article of articles" :key="article.slug">
            <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
              <h2>{{ article.title }}</h2>
              <p id="desc">{{ article.summary }}</p>
              <p id="date">Posted on: {{ formatDate(article.date) }}</p>
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

<style scoped>
.recent {
  margin-top: 2em;
}

#recent-posts {
  box-sizing: border-box;
  font-size: 1rem;
}

#recent-posts ul {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  width: auto;
  margin: 0;
  padding: 0;
}

#recent-posts li {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  background: var(--accent);
  background: linear-gradient(180deg, var(--accent) 50%, transparent 100%);
  width: 450px;
  height: 335px;
  margin: auto 1rem;
  padding: 1em;
  border-radius: 1rem;
}

#recent-posts li:first-child {
  margin-left: 0;
}

#recent-posts li:last-child {
  margin-right: 0;
}

#recent-posts li a,
#recent-posts li a:active,
#recent-posts li a:visited {
  color: var(--text);
  text-shadow: none;
}

#recent-posts li:hover {
  color: var(--text);
  box-sizing: border-box;
  border-radius: 1rem;
  background: var(--accent);
  background: linear-gradient(180deg, var(--bg) 50%, transparent 90%);
}

#date {
  padding: 0 auto;
  margin: 0 auto;
  color: var(--blog-date);
  margin: 0.25em auto;
  text-align: right;
}

#desc {
  padding: 0 auto;
  margin: 0.25em 0.5em;
  color: var(--text-color);
}

@media screen and (max-width: 1280px) {
  #recent-posts ul {
    display: flex;
    flex-direction: column;
    height: auto;
    margin: auto;
  }

  #recent-posts li {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1em;
    padding-bottom: 0;
    height: auto;
    width: auto;
    background: var(--accent);
  }

  #recent-posts li:last-child {
    margin-bottom: 6rem;
  }
}
</style>
