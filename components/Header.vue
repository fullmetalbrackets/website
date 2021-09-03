<template>
  <header>
    <NuxtLink to="/">Ariel Diaz</NuxtLink>
  </header>
</template>

<style scoped>
@font-face {
  font-family: "streamster";
  src: url(~/assets/streamster.ttf) format("truetype");
}

header {
  width: auto;
  height: auto;
  margin: 0.35em 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  font-size: 6rem;
  font-family: 'streamster', 'Segoe Script Bold', 'Segoe Script';
  font-weight: 700;
  font-display: swap;
  color: var(--heading);
  text-shadow: 0.5rem 0.5rem 0.15rem var(--shadow);
  text-transform: none;
  text-align: center;
}

a,
a:active,
a:visited {
  color: var(--heading);
  text-decoration: none;
}

a:hover {
  color: var(--heading-hover);
  text-decoration: none;
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 4.25rem;
    margin-bottom: 0.1em;
  }
}
</style>
