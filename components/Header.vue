<template>
  <header>
    <NuxtLink to="/" class="logo">Ariel Diaz</NuxtLink>
    <nav>
      <NuxtLink to="/blog" class="nav nav1">Blog</NuxtLink>
      <NuxtLink to="/about" class="nav nav2">About</NuxtLink>
      <NuxtLink to="/projects" class="nav nav3">Projects</NuxtLink>
      <NuxtLink to="/contact" class="nav nav4">Contact</NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
.logo {
  font-family: 'streamster';
  font-size: 5rem;
  color: var(--heading);
  text-shadow: 0.25rem 0.25rem 0.15rem var(--shadow);
  width: auto;
  height: auto;
}

.nav {
  font-family: 'Baloo 2', 'Courier New', Courier, monospace;
  font-size: calc(1em + 1.5vw);
  text-shadow: 0.125rem 0.125rem 0.15rem var(--shadow);
  margin: 0 1rem;
  padding: 0;
}

.nav:last-child {
  margin-right: 0;
}

@media screen and (max-width: 1080px) {
  header {
    margin: 1em 3em;
  }

  main {
    margin: 0.5em 1em;
    padding: 1em;
    font-size: 1.35em;
  }

  .logo {
    font-size: 3.425rem;
  }
}

@media screen and (max-width: 768px) {
  main {
    margin: auto;
  }

  nav {
    display: grid;
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 2;
    margin-right: 0;
  }

  .nav1 {
    display: grid;
    grid-row: 1;
    grid-column: 1;
    text-align: center;
  }

  .nav2 {
    display: grid;
    grid-row: 2;
    grid-column: 1;
    text-align: center;
  }

  .nav3 {
    display: grid;
    grid-row: 1;
    grid-column: 2;
    text-align: center;
  }

  .nav4 {
    display: grid;
    grid-row: 2;
    grid-column: 2;
    text-align: center;
  }
}

@media screen and (max-width: 600px) {
  header {
    margin: 0.5em 1em;
  }

  main {
    margin: auto;
  }

  nav {
    margin-right: -0.5em;
  }

  .logo {
    font-size: 2.5rem;
  }

  .nav {
    justify-content: center;
    font-size: 1.425rem;
  }

  .nav1,
  .nav2 {
    margin: 0 0.5em 0 0;
  }

  .nav3,
  .nav4 {
    margin: 0 0 0 0.5em;
  }

  .nav1, .nav3 {
    margin-top: 0.125em;
    margin-bottom: 0.5em;
  }
}
</style>
