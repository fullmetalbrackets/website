<template>
    <div>
        <Header />
        <Navbar />
        <div class="main">
            <h1 class="sent">Message sent!</h1>
            <p class="thank">Thanks for contacting me! <NuxtLink to="/">Return to the home page</NuxtLink>.</p>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.sent {
    font-size: 6rem;
    text-align: center;
    color: hsl(316, 99%, 53%);
}

.thank {
    text-align: center;
}

@media screen and (max-width: 768px) {
    .sent {
        font-size: 4rem;
    }
}
</style>