<template>
    <div class="nav">
        <div class="nav-item">
            <NuxtLink to="/about">About</NuxtLink>
        </div>
        <div class="nav-item">
            <NuxtLink to="/blog">Blog</NuxtLink>
        </div>
        <div class="nav-item">
            <NuxtLink to="/projects">Projects</NuxtLink>
        </div>
        <div class="nav-item">
            <NuxtLink to="/contact">Contact</NuxtLink>
        </div>
    </div>
</template>

<style scoped>
.nav {
    display: flex;
    flex-direction: row;
    width: auto;
    padding: 0 auto;
    margin: 1em;
    flex-direction: row;
    justify-content: center;
    letter-spacing: -0.025em;
}

.nav-item {
    justify-content: space-evenly;
    text-align: center;
    font-family: 'Baloo 2', 'Segoe UI', Tahoma, 'Geneva', Verdana, sans-serif;
    font-display: swap;
    font-size: 2.5rem;
    text-shadow: 0.15rem 0.15rem 0 rgb(14, 15, 36);
    text-decoration: none;
    padding: 0 1em;
    margin: 0;
}

@media screen and (max-width: 768px) {
    .nav {
        margin-bottom: 1.4em;
    }
    .nav-item {
        font-size: 1.725em;
    }
}

@media screen and (max-width: 500px) {
    .nav-item {
        padding: 0 0.425em;
    }
}
</style>
