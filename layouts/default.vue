<template>
  <div>
    <Header />
    <Nuxt />
    <LazyFooter />
  <client-only>
    <div v-show="isVisible" class="scrollup-button" @click="scrollToTop">
      <img src="/chevron-up.svg" alt="Back to top" title="Back to top" id="top-btn" />
    </div>
  </client-only>
  </div>
</template>

<script>
import { debounce } from 'vue-debounce'
export default {
  data() {
    return {
      scrollTop: null,
      isVisible: false,
      visibleDistance: 200,
    }
  },
  mounted() {
    window.addEventListener('scroll', debounce(this.scrollListener, 100), true)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollListener)
  },
  methods: {
    scrollListener() {
      if (window.pageYOffset) {
        this.scrollTop = window.pageYOffset
      } else {
        this.scrollTop = 0
      }
      if (this.scrollTop > this.visibleDistance) {
        this.isVisible = true
      } else {
        this.isVisible = false
      }
    },
    scrollToTop() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 200)
      }, 10)
    },
  },
}
</script>
<style scoped>
.scrollup-button {
  position: fixed;
  bottom: 5rem;
  right: 2rem;
  cursor: pointer;
  background-color: var(--nav);
  border-radius: 0.25rem;
  padding: 0.5rem;
}

.scrollup-button:hover {
  background-color: var(--accent);
}

#top-btn {
  width: 2rem;
  height: 2rem;
  filter: brightness(0) saturate(100%) invert(17%) sepia(91%) saturate(5169%) hue-rotate(310deg) brightness(116%) contrast(99%);
}

@media screen and (min-width: 200px) and (max-width: 767px) {
  .scrollup-button {
  position: fixed;
  bottom: 3.25rem;
  right: 0.5rem;
  }

  #top-btn {
    width: 0.75rem;
    height: 0.75rem;
  }
}
</style>
