<template>
  <main>
    <h1 class="sent">Message sent!</h1>
    <p class="thank">Thanks for contacting me! <NuxtLink to="/about">Return to the about page</NuxtLink> or <NuxtLink to="/">return to the home page</NuxtLink>.</p>
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
