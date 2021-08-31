<template>
    <body>
        <Header />
        <Navbar />
        <div class="main">
            <article>
                <h2>{{ article.title }}</h2>
                <hr>
                <nuxt-content :document="article" />
                <hr class="bottom">
                <p class="foot">
                <a href="/blog"><i class="return"></i> Return to Blog</a>
                <a @click="scrollToTop()"><i class="top"></i> Back to Top</a>
                </p>
            </article>
        </div>
    </body>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
    },
    
    methods: {
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
        },

        scrollToTop() {
            window.scrollTo(0,0);
        }
    }
}
</script>

<style scoped>
li {
    margin: 0 auto;
    padding: 0 auto;
    line-height: 1;
}

.art-date {
    margin: 0 auto;
    padding: 0 auto;
    font-size: 0.6em;
}

img {
    display: flex;
    justify-content: center;
    width: auto;
    max-width: 100%;
    height: auto;
}

code {
    background: hsl(210, 6%, 12%);
    margin: auto;
    padding: auto;
    border-radius: 0.5em;
    color: hsl(50, 90%, 70%);
    font-size: 0.925em;
    overflow-x: scroll;
}

pre {
    border-radius: 0.5em;
    color: hsl(50, 90%, 70%);
}

.bottom {
    margin-top: 2em;
}

.foot {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
}

.foot a, a:active, a:visited, a:hover {
    font-weight: bold;
    cursor: pointer;
}

.return {
    border: solid;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    margin-bottom: 0.125em;
}

.top {
    border: solid;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    margin-bottom: 0.025em;
}

@media screen and (max-width: 600px) {
    .foot {
        font-size: 0.75em;
    }
}
</style>