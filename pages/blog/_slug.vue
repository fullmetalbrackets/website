<template>
  <main>
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
      Tags:
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
          content: this.article.summary,
        },
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        { hid: 'og:description', property: 'og:description', content: this.article.summary },
        { hid: 'twitter:title', name: 'twitter:title', content: this.article.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.article.summary },
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
hr {
  border: 0.25px solid var(--line-color);
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

.art-date {
  color: var(--blog-date);
  margin: 0.25em auto;
  font-size: 0.85em;
}

.art-tags {
  padding: 0 auto;
  margin-top: 1em;
  margin-bottom: 3em;
  color: var(--blog-date);
  font-size: 0.85em;
}

.tag {
  background: var(--heading);
  font-weight: bold;
  border-radius: 0.25em;
  margin-right: 6px;
  padding: 2px 4px;
  font-size: inherit;
}

.tag a, a:active, a:focus {
  color: var(--main);
}

.tag:hover {
  background-color: var(--blog-date);
  text-decoration: none;
}

img {
  display: flex;
  justify-content: center;
  width: auto;
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

@media screen and (max-width: 600px) {
  .foot {
    font-size: 0.75em;
  }
}
</style>
