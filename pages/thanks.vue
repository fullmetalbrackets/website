<template>
  <main>
    <h1 class="sent">Message sent!</h1>
    <p class="thank">Thanks for contacting me! <NuxtLink to="/">Return to the home page</NuxtLink>.</p>
  </main>
</template>

<style scoped>
.sent {
  font-size: 6rem;
  text-align: center;
  color: var(--heading);
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
