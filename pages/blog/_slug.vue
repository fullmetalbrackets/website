<template>
    <body>
        <div class="main">
                <h2>{{ article.title }}</h2>
                <hr>
                <p>
                    <span>Posted on:</span>
                    <span class="art-date">{{ formatDate(article.createdAt) }}</span>
                </p>
                <nuxt-content :document="article" />
                <hr class="bottom">
                <p class="foot">
                    <a href="/blog"><i class="return"></i> Return to Blog</a>
                    <a @click="scrollToTop()"><i class="top"></i> Back to Top</a>
                </p>
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
    color: var(--hotpink);
}

img {
    display: flex;
    justify-content: center;
    width: auto;
    max-width: 100%;
    height: auto;
}

code {
    margin: auto;
    padding: auto 1em auto 1em;
    border-radius: 0.25em;
    font-size: 0.875em;
    line-height: 1;
    max-width: 80vw;
    height: auto;
    overflow-x: scroll;
}

pre {
    border-radius: 0.5em;
    margin: auto;
    padding: auto 1em auto 1em;
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