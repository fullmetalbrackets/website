<template>
    <main>
        <h1 v-if="error.statusCode === 404" class="err1">Page not found</h1>
        <h1 v-else class="err1">An error occurred</h1>
        <p class="err2">Something went wrong. Maybe it's your fault or maybe not. It's all good. <NuxtLink to="/">Return to the home page</NuxtLink>.</p>
    </main>
</template>

<script>
    export default {
        props: ['error']
    }
</script>

<style scoped>
.err1 {
    font-size: 6rem;
    text-align: center;
    color: var(--heading);
}

.err2 {
    text-align: center;
}

@media screen and (max-width: 768px) {
    .err1 {
        font-size: 4rem;
    }
}
</style>