<template>
  <header>
    <a href="#main-content" class="skip-nav">
      Skip Navigation
    </a>
    <span id="logo" title="Go to Home page"><NuxtLink to="/">Ariel Diaz</NuxtLink></span>
    <nav>
      <div><NuxtLink to="/#about" title="Jump to About section">About</NuxtLink></div>
      <div id="edge"><NuxtLink to="/blog" title="Go to Blog page">Blog</NuxtLink></div>
    </nav>
  </header>
</template>

<style scoped>
@import url('http://fonts.cdnfonts.com/css/streamster');

header {
  display: flex;
  justify-content: space-between;
  justify-items: stretch;
  align-items: center;
  height: auto;
  width: auto;
  line-height: 1.25;
  background: var(--nav);
}

img {
  width: 36px;
  height: auto;
}

div {
  margin-left: 2rem
}

#edge {
  margin-right: -0.25em;
}

#logo {
  font-family: 'Streamster', 'Freestyle Script', 'Lucida Calligraphy', 'Handwriting', sans-serif;
  font-size: calc(2rem + 1vw);
  font-display: swap;
  width: auto;
  height: auto;
}

#logo a {
  display: block;
	position: relative;
	padding: 2px 0;
  color: var(--heading);
  text-shadow: 0px 0px 8px var(--pink-glow);
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

.skip-nav {
  background: var(--accent);
  padding: 0.5rem 1.5rem;
  border-radius: 0.25rem;
  position: absolute;
  left: 0.5rem;
  transform: translateY(-200%);
  transition: transform 300ms ease-in;
}

.skip-nav:focus {
  transform: translateY(-100%);
}

nav {
  font-family: 'Baloo 2', 'Courier New', Courier, monospace;
  font-size: calc(1rem + 1.5vw);
  text-shadow: 0px 0px 8px var(--orange-glow);
  display: flex;
  justify-content: space-between;
  justify-items: right;
}

nav a {
  position: relative;
  margin: 0;
  padding: 0;
}

nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--hover);
  text-shadow: 0px 0px 8px var(--orange-glow);
	opacity: 1;
	transform: scale(0);
	transform-origin: center;
  transition: opacity 300ms, transform 300ms;
  margin-bottom: calc(1px + 0.5vw);
}

nav a:hover::after,
nav a:focus::after {
	transform: scale(1);
}
</style>
