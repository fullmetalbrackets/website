<template>
  <main>
    <h1 class="typing">Hello World</h1>
    <p class="blurb">
      I'm Ariel, learning web development and living life in sunny/rainy (depending on the time of year) South Florida.
    </p>
    <p>
      This is my personal website, made with Nuxt.js as a way to learn the framework. Feel free to check out <a href="https://github.com/fullmetalbrackets/website" target="_blank" rel="noopener">this site's source code</a>. Eventually this site will have a portfolio of projects I've worked on, but for now feel free to read my blog -- really just a dump of documentation I've made for myself as I've learned web development, Linux, the command line, etc. If you want to reach out, please use the <Nuxt-Link to="/about#contact">contact form</Nuxt-Link>. Thanks for visiting!
    </p>
      <h2 class="recent">Recent Posts</h2>
      <p>
        Want to see what I've written about lately? Jump right in to my most recent posts below, or <NuxtLink to="/blog">see the full blog</NuxtLink> to read older articles.
      </p>
      <section>
        <ul>
          <li v-for="article of articles" :key="article.slug">
            <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
              <h2>{{ article.title }}</h2>
              <hr/>
              <p id="info">
                <span id="date">Posted: {{ formatDate(article.date) }}</span>
                <span id="tags">
                  <span v-for="tag in article.tags" :key="tag" class="tag">
                    <nuxt-link :to="`/tags/${tag}`">
                      <span>{{ tag }}</span>
                    </nuxt-link>
                </span>
              </span>
              </p>
              <p id="desc">{{ article.description }}</p>
            </NuxtLink>
          </li>
        </ul>
      </section>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const articles = await $content('articles')
      .without('body')
      .sortBy('date', 'desc')
      .limit(3)
      .fetch()
    return {
      articles
    }
  },

  head() {
      return {
        link: [
          {
            hid: "canonical",
            rel: "canonical",
            href: `https://arieldiaz.codes/`,
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
.blurb {
  margin-top: 3em;
}

.recent {
  margin-top: 2em;
}

section {
  box-sizing: border-box;
  font-size: 1rem;
  margin-bottom: 1em;
}

section ul {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  width: auto;
  margin: 0;
  padding: 0;
}

section li {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  background: var(--accent);
  width: 450px;
  height: 325px;
  margin: auto 1rem;
  padding: 1em;
  border-radius: 1rem;
}

section li:first-child {
  margin-left: 0;
}

section li:last-child {
  margin-right: 0;
}

section li a,
section li a:active,
section li a:visited {
  color: var(--text);
  text-shadow: none;
}

section li:hover {
  color: var(--text);
  box-sizing: border-box;
  border-radius: 1rem;
  background: var(--bg);
}

#date {
  padding: 0 auto;
  margin: 0 auto;
  color: var(--blog-date);
  margin: 0;
  margin-top: 4px;
}

#desc {
  padding: 0 auto;
  margin: 0.25em 0.5em;
  color: var(--text-color);
}

#tags {
  margin: 0;
}

#info {
  display: flex;
  justify-content: space-between;
  margin-top: 0.25em;
}

.tag {
  padding: 2px 4px;
  margin-right: 6px;
  background: var(--heading);
  font-weight: bold;
  border-radius: 0.25em;
}

.tag:hover {
  background-color: var(--blog-date);
  text-decoration: none;
}

hr {
  border: 0.25px solid;
  opacity: 0.25;
}

span {
  color: var(--accent);
}

@media screen and (max-width: 1280px) {
  section ul {
    display: flex;
    flex-direction: column;
    height: auto;
    margin: auto;
  }

  section li {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1em;
    padding-bottom: 0;
    height: auto;
    width: auto;
    background: var(--accent);
  }

  section li:last-child {
    margin-bottom: 6rem;
  }
}
</style>
