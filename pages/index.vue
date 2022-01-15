<template>
  <main id="main-content">
    <h1 class="index-page">Hello World</h1>
    <p>
      I'm Ariel, learning web development and living life in sunny/rainy (depending on the time of year) South Florida.
    </p>
    <p>
      This is my personal website, made with Nuxt.js as a way to learn the framework. Feel free to check out <a href="https://github.com/fullmetalbrackets/website" target="_blank" rel="noopener">this site's source code</a>. Eventually this site will have a portfolio of projects I've worked on, but for now feel free to read my blog -- really just a dump of documentation I've made for myself as I've learned web development, Linux, the command line, etc. If you want to reach out, please use the <Nuxt-Link to="#contact">contact form</Nuxt-Link>. Thanks for visiting!
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
            <p id="info">
              <span id="date">
                {{ formatDate(article.date) }}
              </span>
              <span id="tags">
                <span v-for="tag in article.tags" :key="tag" class="tag">
                  <span>{{ tag }}</span>
                </span>
              </span>
            </p>
            <p id="desc">{{ article.description }}</p>
          </NuxtLink>
        </li>
      </ul>
    </section>
    <div id='about'/>
    <h2 class="about-me">About Me</h2>
    <section>
      <LazyAbout />
    </section>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const articles = await $content('articles')
      .without('body', 'update')
      .sortBy('date', 'desc')
      .limit(3)
      .fetch()
    return {
      articles
    }
  },

  head() {
      return {
        meta: [
          { hid: 'keywords', name: 'keywords', content: 'HTML, CSS, PHP, JavaScript, Node JS, Vue JS, Nuxt JS, web development, web design, Linux, tech, blog'},
          { hid: 'description', name: 'description', content: 'Website of Ariel Diaz.' },
          { hid: 'author', name: 'author', content: 'Ariel Diaz'},
          { property: "og:site_name", content: "Ariel Diaz" },
          { hid: "og:type", property: "og:type", content: "website" },
          {
            hid: "og:url",
            property: "og:url",
            content: "https://arieldiaz.codes",
          },
          {
            hid: "og:title",
            property: "og:title",
            content: "Ariel Diaz",
          },
          {
            hid: "og:description",
            property: "og:description",
            content: "Website of Ariel Diaz.",
          },
          {
            hid: "twitter:url",
            name: "twitter:url",
            content: "https://arieldiaz.codes",
          },
          {
            hid: "twitter:title",
            name: "twitter:title",
            content: "Ariel Diaz",
          },
          {
            hid: "twitter:description",
            name: "twitter:description",
            content: "Website of Ariel Diaz.",
          },
        ],
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

section li {
  list-style-type: none;
  margin: auto;
  padding: 1em;
  border-radius: 1rem;
  background: var(--nav);
  margin-bottom: 1.5em;
  height: auto;
  max-width: 1200px;
}

section li:last-child {
  margin-bottom: 0;
}

section li:hover {
  background: var(--accent);
}

#date {
  padding: 0 auto;
  margin: 0 auto;
  color: var(--subheading);
  margin: 0;
  margin-top: 4px;
}

#desc {
  padding: 0 auto;
  margin: 0.25em 0.5em;
  color: var(--text);
  min-height: 80px;
  max-height: auto;
  min-width: 300px;
  max-width: auto;
}

#tags {
  margin: 0;
}

#info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.25em;
}

.tag {
  padding: 2px 4px;
  margin-right: 6px;
  background: var(--heading);
  color: #000;
  font-weight: bold;
  border-radius: 0.25em;
}

.recent-posts {
  display: flex;
  justify-content: space-around;
  font-size: 1rem;
}

.about-me {
  margin-bottom: 1em;
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
    border-radius: 1rem;
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
