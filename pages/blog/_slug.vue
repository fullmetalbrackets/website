<template>
  <main>
    <article>
      <h2>{{ article.title }}</h2>
      <hr>
      <p class="art-date">
        Posted on {{ formatDate(article.date) }}
      </p>
      <p v-if="article.update === ''" class="hide"></p>
      <p v-else class="art-date">
        Updated on {{ formatDate(article.update) }}
      </p>
      <p class="art-tags">
        <span v-for="tag in article.tags" :key="tag" class="tag">
        <nuxt-link :to="`/tags/${tag}`">{{ tag }}</nuxt-link>
        </span>
      </p>
      <nuxt-content :document="article" class="blog-article" />
      <hr class="bottom">
      <p class="foot">
        <a href="/blog"><i class="return"></i> Return to Blog</a>
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

  return { article }
  },

  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description,
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
article {
  margin: 0 auto;
  padding: 0 auto;
}

hr {
  border: 0.25px solid var(--line-color);
}

.art-date {
  padding: 0 auto;
  margin: 0 auto;
  color: var(--blog-date);
  text-shadow: none;
}

.art-tags {
  padding: 0 auto;
  margin: 0.5em auto 0 auto;
  color: var(--blog-date);
}

li {
  margin: 0 auto;
  margin-bottom: 0.25em;
  padding: 0 auto;
  line-height: 1.15;
}

li:last-child {
  margin-bottom: 1em;
}

li::marker {
  color: var(--heading);
}

.hide {
  display: none;
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
