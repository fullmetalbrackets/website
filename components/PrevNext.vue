<template>
  <div class="prev-next">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
      class="prev-post other-post"
    >
      <h2>{{ prev.title }}</h2>
      <hr>
      {{ prev.description }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      class="next-post other-post"
    >
      <h2>{{ next.title }}</h2>
      <hr>
      {{ next.description }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
  export default {
    props: {
      prev: {
        type: Object,
        default: () => null
      },
      next: {
        type: Object,
        default: () => null
      }
    }
  }
</script>

<style scoped>
.prev-next {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0;
}

.prev-post {
  margin-right: 5px;
}

.next-post {
  margin-left: 5px;
}

.other-post {
  padding: 1em;
  border-radius: 1rem;
  background: var(--nav);
  margin-bottom: 1.5em;
  height: auto;
  width: 500px;
}

.other-post:hover {
  background: var(--accent);
}

h2 {
  margin: 0;
  text-shadow: 0px 0px 2px var(--pink-glow);
}

a, a:active, a:visited, a:hover, a:focus {
  color: var(--text);
  font-size: 1rem;
}

a:hover::after,
a:focus::after {
  transform: scale(0);
}

@media screen and (min-width: 200px) and (max-width: 767px) {
  .prev-next {
    flex-direction: column;
  }

  .other-post {
    width: auto;
  }

  .prev-post, .next-post {
    margin-right: 0;
    margin-left: 0;
  }
}
</style>
