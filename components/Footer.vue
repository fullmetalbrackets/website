<template>
  <footer>
    <a href="https://github.com/fullmetalbrackets" target="_blank" rel="noreferrer"><img src="/img/gh.svg" alt="GitHub"></a>
    <NuxtLink to="#contact"><img src="/img/mail.svg" alt="Contact Me"></NuxtLink>
    <a href="/feed.xml" target="_blank"><img src="/img/rss.svg" alt="RSS Feed"></a>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: space-around;
  justify-items: stretch;
  align-items: center;
  height: auto;
  width: auto;
  margin: 0.5rem auto 0.25rem auto;
  line-height: 1.25;
}

img {
  filter: invert(17%) sepia(72%) saturate(5705%) hue-rotate(308deg) brightness(112%) contrast(99%);
  height: 40px;
  width: auto;
}

img:hover {
  filter: invert(80%) sepia(17%) saturate(3619%) hue-rotate(280deg) brightness(102%) contrast(95%);
}
</style>
