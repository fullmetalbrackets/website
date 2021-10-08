<template>
  <main>
    <h1>Who Dis?</h1>
    <p>
      My name is Ariel. Self-taught web developer that enjoys coding and web design. Born and raised in South Florida, currently living in the St. Augustine area. Feel free to check out my (somewhat bare at the moment) <a href="https://github.com/fullmetalbrackets" target="_blank" rel="noopener">GitHub profile</a> if you'd like to see what I'm working on.
    </p>
    <h2>Stuff I Know</h2>
    <p>
      <a href="https://devdocs.io/javascript" target="_blank" rel="noopener"><img src="/img/js.png"></a>
      <a href="https://sass-lang.com/documentation" target="_blank" rel="noopener"><img src="/img/sass.png"></a>
      <a href="https://v3.vuejs.org/guide/introduction.html" target="_blank" rel="noopener"><img src="/img/vuejs.png"></a>
      <a href="https://nuxtjs.org/docs/2.x/get-started/installation" target="_blank" rel="noopener"><img src="/img/nuxtjs.png"></a>
      <a href="https://nodejs.org/en/docs/" target="_blank" rel="noopener"><img src="/img/nodejs.png"></a>
      <a href="https://docs.netlify.com/" target="_blank" rel="noopener"><img src="/img/netlify.png"></a>
      <a href="https://docs.docker.com/" target="_blank" rel="noopener"><img src="/img/docker.png"></a>
      <a href="https://tldp.org/" target="_blank" rel="noopener"><img src="/img/linux.png"></a>
    </p>
    <h2>Stuff I've Made</h2>
    <p>
      Such empty. My ongoing and completed projects will be listed here eventually.
    </p>
    <div id='contact'/>
    <h2>Contact Me, Maybe?</h2>
    <p class="disclaimer">
      Disclaimer: I will <u><strong>never</strong></u> sign you up for a newsletter or mailing list.
    </p>
    <section>
      <form name="contact" action="/thanks" method="POST" netlify-data="true" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <p class="contact-form">
          <label for="name">Name:</label>
        </p>
        <input type="text" name="name" required/>
        <p class="contact-form">
          <label for="email">Email:</label>
        </p>
        <input type="email" name="email" required/>
        <p class="contact-form">
          <label for="message">Message:</label>
        </p>
        <textarea name="message" required></textarea>
        <button class="button" type="submit" value="Send Message">Send Message</button>
    </form>
    </section>
  </main>
</template>

<script>
export default {
  head() {
      return {
        link: [
          {
            hid: "canonical",
            rel: "canonical",
            href: `https://arieldiaz.codes/about`,
          }
        ]
      }
    },
}
</script>

<style scoped>
p {
  margin-bottom: 4em;
}

img {
  width: 80px;
  height: auto;
  margin-right: 1em;
}

section {
  margin: 0 auto;
  margin-bottom: 2em;
  padding: 0 auto;
  width: 70vw;
}

.contact-form {
  margin: 0 auto;
  padding: 0.125em auto;
}

.disclaimer {
  margin-bottom: 2.5em;
}

label {
  margin: 0 auto;
  padding: 0 auto;
  font-family: 'Baloo 2', 'Courier New', Courier, monospace;
  font-size: 1.5rem;
  color: var(--heading);
}

input {
  line-height: 1;
  font-size: 1rem;
  border-style: none;
  margin: 0.25em auto 1em auto;
  padding: 0 auto;
  line-height: 1;
  border-radius: 0.25em;
  background: var(--form-bg);
  height: auto;
  width: 100%;
  box-sizing: border-box;
  font-family: 'Fira Sans', 'Courier New', Courier, monospace;
  outline: none;
}

textarea {
  line-height: 1;
  font-size: 1rem;
  border-style: none;
  margin: 0.25em auto 1em auto;
  padding: 0 auto;
  line-height: 1;
  border-radius: 0.25em;
  background: var(--form-bg);
  height: auto;
  width: 100%;
  box-sizing: border-box;
  font-family: 'Fira Sans', 'Courier New', Courier, monospace;
  resize: vertical;
  min-height: 8vh;
  outline: none;
}

button {
  font-size: 1.25em;
  font-family: 'Baloo 2', 'Courier New', Courier, monospace;
  font-weight: 700;
  background: transparent;
  border-style: none;
  cursor: pointer;
  margin: -1em auto;
  padding: 0 auto;
  line-height: 1;
  color: hsl(30, 100%, 56%);
}

button:hover {
  color: hsl(59, 100%, 50%);
  text-decoration: none;
  transition-duration: 0.25s;
  transition-property: color, fill, stroke;
  transition-timing-function: linear;
}

/* Change autocomplete styles in WebKit */
:-webkit-autofill,
:-webkit-autofill:hover,
:-webkit-autofill:focus {
  box-shadow: 0 0 0px 0px var(--form-bg) inset;
  -webkit-box-shadow: 0 0 0px 0px var(--form-bg) inset;
  transition: background-color 5000s ease-in-out 0s;
}

@media screen and (max-width: 600px) {
  img {
    width: 50px;
    height: auto;
  }
}
</style>
