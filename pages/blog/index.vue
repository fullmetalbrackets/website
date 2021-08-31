<template>
    <body>
    <Header />
    <Navbar />
        <div class="main">
            <ul>
            <li v-for="article of articles" :key="article.slug">
                <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                <div class="post">
                    <h2>{{ article.title }}</h2>
                    <p class="art-desc">{{ article.description }}</p>
                </div>
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
        .only(['title', 'description', 'slug'])
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
    margin: 0 auto;
    margin-left: -1.55em;
    padding: 0 auto;
}

h2 {
    margin: 1em auto 0 auto;
    padding: 0 auto;
}

.art-desc {
    margin: 0 auto 2.5em auto;
    margin-left: 0.75em;
    padding: 0 auto;
    color: hsl(201, 100%, 85%);
}
</style>