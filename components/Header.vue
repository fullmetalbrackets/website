<template>
  <header>
    <span id="logo"><NuxtLink to="/">Ariel Diaz</NuxtLink></span>
    <nav>
      <div><NuxtLink to="/about" class=".nav2">About</NuxtLink></div>
      <div id="edge"><NuxtLink to="/blog">Blog</NuxtLink></div>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  justify-items: stretch;
  align-items: center;
  height: auto;
  width: auto;
  margin: auto calc(4em + 4vw);
  margin-bottom: 0.5em;
  padding: 0;
  line-height: 1.25;
}

img {
  width: 36px;
  height: auto;
}

div {
  margin-left: 1.5em
}

#edge {
  margin-right: -0.25em;
}

#logo {
  font-family: 'streamster';
  font-size: 5rem;
  text-shadow: 0.1rem 0.1rem 0.1rem var(--shadow);
  width: auto;
  height: auto;
}

#logo a {
  display: block;
	position: relative;
	padding: 2px 0;
  color: var(--heading);
}

#logo a::after {
  content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 1px;
	background-color: var(--heading);
	opacity: 1;
	transform: scale(0);
	transform-origin: center;
  transition: opacity 300ms, transform 300ms;
}

#logo a:hover::after,
#logo a:focus::after {
	transform: scale(1);
}

nav {
  font-family: 'Baloo 2', 'Courier New', Courier, monospace;
  font-size: calc(1rem + 2.25vw);
  text-shadow: 0.125rem 0.125rem 0.15rem var(--shadow);
  display: flex;
  justify-content: space-between;
  justify-items: right;
}

nav a {
  position: relative;
  padding: 0.25px 0;
}

nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--hover);
	opacity: 1;
	transform: scale(0);
	transform-origin: center;
  transition: opacity 300ms, transform 300ms;
}

nav a:hover::after,
nav a:focus::after {
	transform: scale(1);
}

@media screen and (prefers-color-scheme: light) {
  #logo {
    text-shadow: 0.25rem 0.25rem 0.15rem hsl(0, 0%, 40%);
  }
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

  #logo {
    font-size: 3.425rem;
  }
}

@media screen and (max-width: 768px) {
  main {
    margin: auto;
  }
}

@media screen and (max-width: 600px) {
  header {
    margin: 0.5em 1em;
  }

  main {
    margin: auto;
  }

  #logo {
    font-size: 2.5rem;
    text-shadow: 1.5px 1.5px 1.5px var(--shadow);
  }
}
</style>
