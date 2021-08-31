<template>
    <header>
        <h1><NuxtLink to="/">Ariel Diaz</NuxtLink></h1>
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
    margin: 1em;
    padding: 1em;
    display: flex;
    flex-direction: column;
}

h1 {
    font-size: 6rem;
    font-family: 'streamster', 'Segoe Script Bold', 'Segoe Script';
    font-weight: 700;
    font-display: swap;
    text-shadow: 0.5rem 0.5rem 0.15rem hsl(237, 44%, 10%);
    text-transform: none;
    text-align: center;
    width: auto;
    height: auto;
    margin: 0 auto;
    padding: 0 auto;
}

a,
a:active,
a:visited {
    color: hsl(316, 99%, 53%);
    text-decoration: none;
}

a:hover {
    color: hsl(321, 100%, 67%);
    text-decoration: none;
}

@media screen and (max-width: 768px) {
    h1 {
    font-size: 4.25rem;
    margin-bottom: 0.1em;
    }
}
</style>