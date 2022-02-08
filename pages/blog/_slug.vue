<template>
  <main>
    <article>
      <h1>{{ article.title }}</h1>
      <hr>
      <div class="date-tags">
        <span class="art-date">
          {{ formatDate(article.date) }}
        </span>
        <span class="art-tags">
          <span v-for="tag in article.tags" :key="tag" class="tag">
            <nuxt-link :to="`/tags/${tag}`">{{ tag }}</nuxt-link>
          </span>
        </span>
      </div>
      <p v-if="article.update === ''" class="hide"></p>
      <p v-else class="art-date">
        <b>Updated</b> {{ formatDate(article.update) }}
      </p>
      <nuxt-content :document="article" class="blog-article" />
      <h4>
        More Articles
      </h4>
      <prev-next :prev="prev" :next="next" />
      <hr class="bottom">
      <p class="foot">
        <NuxtLink to="/"><i class="return"></i> Return to Blog</NuxtLink>
        <a @click="scrollToTop()"><i class="top"></i> Back to Top</a>
      </p>
    </article>
  </main>
</template>

<script>
import Prism from "~/plugins/prism.js";

export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'description', 'slug'])
      .sortBy('date', 'desc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next
    }
  },

  head() {
    return {
      title: this.article.title,
      meta: [
        { hid: 'author', name: 'author', content: 'Ariel Diaz'},
        {
          hid: "description",
          name: "description",
          content: this.article.description,
        },
        {
          hid: "og:url",
          property: "og:url",
          content: `https://arieldiaz.codes/blog/${this.$route.params.slug}`,
        },
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        { hid: 'og:description', property: 'og:description', content: this.article.description },
        { hid: 'twitter:title', name: 'twitter:title', content: this.article.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.article.description },
        {
          property: "article:published_time",
          content: this.article.createdAt,
        },
        {
          property: "article:modified_time",
          content: this.article.updatedAt,
        },
        {
          property: "article:tag",
          content: this.article.tags ? this.article.tags.toString() : "",
        },
        { name: "twitter:label1", content: "Written by" },
        { name: "twitter:data1", content: "Ariel Diaz" },
        { name: "twitter:label2", content: "Tagged under" },
        {
          name: "twitter:data2",
          content: this.article.tags ? this.article.tags.toString() : "",
        }
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `https://arieldiaz.codes/blog/${this.$route.params.slug}`,
        }
      ]
    }
  },

  mounted() {
    Prism.highlightAll();
  },

  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },

    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
}
</script>

<style scoped>
.date-tags {
  display: flex;
  justify-content: space-between;
  justify-items: center;
}

.art-date {
  padding: 0;
  margin: 0;
  color: var(--subheading);
  text-shadow: none;
}

.art-tags {
  padding: 0;
  margin: 0;
  color: var(--subheading);
  text-align: right;
}

li {
  margin-left: 2rem;
  margin-right: 2rem;
}

li::marker {
  color: var(--heading);
}

.hide {
  display: none;
}

hr {
  margin-bottom: 2rem;
}

img {
  display: flex;
  justify-content: center;
  min-width: auto;
  max-width: 100%;
  height: auto;
}

.bottom {
  margin-top: 2em;
}

.foot {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
}

.foot a, a:active, a:visited, a:focus {
  font-weight: bold;
  cursor: pointer;
}

.return {
  border: solid;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  margin-bottom: 0.125em;
}

.top {
  border: solid;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  margin-bottom: 0.025em;
}
</style>
