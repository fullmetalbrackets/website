<template>
  <main>
    <h1 class="index-page">Hello World</h1>
    <p>
      I'm Ariel, a self-taught web developer born and raised in rainy/sunny (depending on the time of year) South Florida, currently living in the St. Augustine area.
    </p>
    <p>
      This is my personal website, made with Nuxt.js as a way to learn the framework. Feel free to check out <a href="https://github.com/fullmetalbrackets/website" target="_blank" rel="noopener">this site's source code</a>. Eventually this site will have a portfolio of projects I've worked on, but for now feel free to read my blog -- really just a dump of documentation I've made for myself as I've learned web development, Linux, the command line, etc. Thanks for visiting!
    </p>
      <h2 class="recent">Recent Posts</h2>
      <p>
        Want to see what I've written about lately? Jump right in to my most recent posts below, or <NuxtLink to="/blog">see the full blog</NuxtLink> to read older articles.
      </p>
    <section class="recent-posts">
      <ul>
        <li v-for="article of articles" :key="article.slug">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <h2 class="art-title">{{ article.title }}</h2>
            <hr/>
            <span id="date">{{ formatDate(article.date) }}</span>
            <p id="desc">{{ article.description }}</p>
          </NuxtLink>
        </li>
      </ul>
    </section>
    <div id='contact'/>
    <h2 class="contact">Contact Me</h2>
    <section>
      <LazyContact />
    </section>
    <div class="site-update">
      <img alt="Last Updated" src="https://img.shields.io/github/last-commit/fullmetalbrackets/website/main?color=%23fe10bf&label=Last%20Updated&logo=github&logoColor=%23fe10bf&style=for-the-badge">
    </div>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const articles = await $content('articles')
      .without('body', 'tags')
      .sortBy('date', 'desc')
      .limit(2)
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
.recent {
  margin-top: 2em;
}

span {
  color: #000;
}

section {
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

section ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  height: auto;
  width: auto;
  padding: 0;
  margin: 0;
}

section li {
  margin: 1rem;
  list-style-type: none;
  height: auto;
  width: auto;
  padding: 1em;
  border-radius: 1em;
  background: var(--nav);
}

section li a,
section li a:active,
section li a:visited {
  color: var(--text);
  text-shadow: none;
}

section li:hover {
  color: var(--text);
  background: var(--accent);
}

#date {
  padding: 0 auto;
  margin: 0 auto;
  color: var(--heading);
  margin: 0;
  margin-top: 4px;
}

#desc {
  padding: 0 auto;
  margin: 0 0.5em;
  margin-top: 0.5em;
  color: var(--text);
  min-height: 150px;
  max-height: auto;
  min-width: 300px;
  max-width: auto;
}

.recent-posts {
  display: flex;
  justify-content: space-around;
  font-size: 1rem;
}

.contact {
  margin-bottom: 1em;
}

.site-update {
  display: flex;
  justify-content: center;
  margin-top: 1em;
}

@media screen and (min-width: 200px) and (max-width: 767px) {
  main {
    padding: 20px;
    margin: 0 auto;
  }

  section ul {
    display: flex;
    flex-direction: column;
    height: auto;
    width: auto;
    padding: 0;
    margin: 0;
    height: auto;
    width: auto;
  }

  section li {
    margin: 0;
    list-style-type: none;
    min-height: auto;
    max-height: 1000px;
    min-width: auto;
    max-width: auto;
    padding: 1em;
    margin-bottom: 1em;
    border-radius: 1em;
  }

  section li a,
  section li a:active,
  section li a:visited {
    color: var(--text);
    text-shadow: none;
  }

  section li:hover {
    color: var(--text);
  }

  #desc {
    min-height: auto;
    max-height: 1000px;
    min-width: auto;
    max-width: auto;
  }
}
</style>
