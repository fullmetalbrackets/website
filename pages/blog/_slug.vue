<template>
  <main>
    <h2>{{ article.title }}</h2>
    <hr>
    <p class="art-info">
      <span>Posted on</span>
      <span class="art-date">{{ formatDate(article.date) }}</span>
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

  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },

    scrollToTop() {
      window.scrollTo(0,0);
    }
  },
    mounted() {
    Prism.highlightAll();
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.summary,
        }
      ]
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
  margin-bottom: 1em;
  padding: 0 auto;
  line-height: 1.15;
}

li::marker {
  color: var(--heading);
}

.art-info {
  margin-bottom: 3em;
}

.art-date {
  color: var(--blog-date);
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

.foot a, a:active, a:visited, a:focus, a:hover {
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
