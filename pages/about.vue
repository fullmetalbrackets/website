<template>
  <main>
    <h1>Hello World</h1>
    <p>
      I'm Ariel, learning web development and living life in sunny/rainy (depending on the time of year) South Florida.
    </p>
    <p>
      This is my personal website, made with Nuxt.js as a way to learn the framework. Feel free to check out <a href="https://github.com/fullmetalbrackets/website" target="_blank" rel="noopener">this site's source code</a>. Eventually this site will have a portfolio of projects I've worked on, but for now feel free to read my blog -- really just a dump of documentation I've made for myself as I've learned web development, Linux, the command line, etc. Thanks for visiting!
    </p>
    <div id='contact'/>
    <p>
      If you'd like to get in touch, please use the contact form below.
    </p>
      <form name="contact" action="/thanks" method="POST" data-netlify="true" netlify-honeypot="bot-field">
        <input value="contact" name="form-name" type="hidden" />
        <label for="name">Name:</label>
        <input id="text" type="text" name="name" required/>
        <label for="email">Email:</label>
        <input id="email" type="email" name="email" required/>
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button class="button" type="submit" value="Submit">Submit</button>
      </form>
    <p>
      This will <u><strong>not</strong></u> sign you up for a newsletter or mailing list, I don't like those!
    </p>
  </main>
</template>

<style scoped>
* {
  margin: 0 auto;
  padding: 0 auto;
}

div {
  margin-bottom: 2em;
}

.about {
  margin: 2em auto;
}

h1 {
  margin: 1em auto;
}

p {
  margin-bottom: 1em;
}

label {
  text-align: left;
  font-family: 'Baloo 2', 'Courier New', Courier, monospace;
  font-size: 2rem;
  color: var(--heading);
  text-shadow: 0px 0px 6px var(--pink-glow);
}

form {
  margin-top: 2em;
  margin-left: calc(4em + 2vw);
  margin-right: calc(4em + 2vw);
  margin-bottom: 2em;
}

input {
  line-height: 1;
  font-size: 2rem;
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
  font-size: 2rem;
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
  font-size: 2rem;
  font-family: 'Baloo 2', 'Courier New', Courier, monospace;
  font-weight: 700;
  background: var(--heading);
  border-style: none;
  border-radius: 0.25em;
  cursor: pointer;
  margin: 0 auto;
  padding: 5px 15px 3px 15px;
}

button:hover {
  background: var(--subheading);
  transition-duration: 0.25s;
  transition-property: color, fill, stroke;
  transition-timing-function: linear;
  box-shadow: 0px 0px 8px var(--pink-glow);
}

/* Change autocomplete styles in WebKit */
:-webkit-autofill,
:-webkit-autofill:hover,
:-webkit-autofill:focus {
  box-shadow: 0 0 0px 0px var(--form-bg) inset;
  -webkit-box-shadow: 0 0 0px 0px var(--form-bg) inset;
  transition: background-color 5000s ease-in-out 0s;
}

@media screen and (min-width: 200px) and (max-width: 767px) {
  .about {
    font-size: 1.25rem;
  }

  h2 {
    font-size: 0.85em;
  }

  label, button {
    font-size: 1.5rem;
  }

  form {
  margin-left: 1em;
  margin-right: 1em;
}
}
</style>
