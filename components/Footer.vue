<template>
  <footer>
    <a href="https://github.com/fullmetalbrackets" target="_blank" rel="noreferrer"><img src="/img/gh.svg" alt="GitHub"></a>
    <NuxtLink to="#contact"><img src="/img/mail.svg" alt="Contact Me"></NuxtLink>
    <a href="/rss.xml" target="_blank"><img src="/img/rss.svg" alt="RSS Feed"></a>
    <a href="/feed.json" target="_blank"><img id="json" src="/img/json.svg" alt="JSON Feed"></a>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: auto;
  width: auto;
  margin: 0 auto;
  line-height: 1.25;
}

img {
  filter: invert(17%) sepia(72%) saturate(5705%) hue-rotate(308deg) brightness(112%) contrast(99%);
  height: auto;
  width: 50px;
  margin-top: 0.5em;
}

img:hover {
  filter: invert(80%) sepia(17%) saturate(3619%) hue-rotate(280deg) brightness(102%) contrast(95%);
}

#json {
  height: auto;
  width: 70px;
}
</style>
