<template>
    <body>
        <div class="main">
            <ul>
            <li v-for="article of articles" :key="article.slug">
                <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                    <h2>{{ article.title }}</h2>
                    <p class="art-desc">{{ article.summary }}</p>
                </NuxtLink>
            </li>
            </ul>
        </div>
    </body>
</template>


<script>
export default {
    async asyncData({ $content, params }) {
    const articles = await $content('articles')
        .only(['title', 'summary', 'slug'])
        .sortBy('createdAt', 'desc')
        .fetch()

    return {
        articles
    }
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0 auto;
    margin: 0 auto;
}

li {
    list-style-type: none;
    padding: 0 auto;
    margin: 0 auto;
    margin-top: -2.75em;
    margin-left: -1.75em;
}

h2 {
    padding: 0 auto;
    margin: 2em auto 0 auto;
}

.art-desc {
    padding: 0 auto;
    margin: 0 auto 5em auto;
    margin-left: 0.75em;
    color: var(--skyblue);
}

@media screen and (max-width: 600px) {
    li {
        list-style-type: none;
        padding: 0 auto;
        margin: 0 auto;
        margin-top: -2.25em;
        margin-left: -1.8em;
    }
}
</style>