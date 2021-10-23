<template>
  <header>
    <span id="logo"><NuxtLink to="/">Ariel Diaz</NuxtLink></span>
    <nav>
      <div><NuxtLink to="/#about" class=".nav2">About</NuxtLink></div>
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
  line-height: 1.25;
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
  font-family: 'Streamster', sans-serif;
  font-size: calc(2rem + 1vw);
  text-shadow: 1px 1px 1px var(--shadow);
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
  font-size: calc(1rem + 1.5vw);
  text-shadow: 1px 1px 1px var(--shadow);
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
