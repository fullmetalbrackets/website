<template>
  <body>
    <Header />
    <Navbar />
    <div class="main">
      <h2>Hello World</h2>
      <p>
        I'm Ariel, learning web development and living life in sunny/rainy (depending on the time of year) South Florida.
      </p>
      <p>
        This is my personal website, made with Nuxt.js as a way to learn the framework. Feel free to check out <a href="https://github.com/fullmetalbrackets/nuxtlify" target="_blank" rel="noopener">this site's source code</a>. Eventually this site will have a portfolio of projects I've worked on, but for now feel free to read my blog -- really just a dump of documentation I've made for myself as I've learned web development, Linux, the command line, etc.</p>
    </div>
  </body>
</template>

<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
};
</script>

<style scoped>

</style>