<template>
    <form name="contact" action="/thanks" method="post" netlify netlify-honeypot="bot-field">
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
        <button type="submit" value="Send Message">Send Message</button>
    </form>
</template>

<style scoped>
.contact-form {
    margin: 0 auto;
    padding: 0.125em auto;
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
    background: #aaa;
    height: auto;
    width: 100%;
    box-sizing: border-box;
    font-family: 'Fira Sans', 'Courier New', Courier, monospace;
}

textarea {
    line-height: 1;
    font-size: 1rem;
    border-style: none;
    margin: 0.25em auto 1em auto;
    padding: 0 auto;
    line-height: 1;
    border-radius: 0.25em;
    background: #aaa;
    height: auto;
    width: 100%;
    box-sizing: border-box;
    font-family: 'Fira Sans', 'Courier New', Courier, monospace;
    resize: vertical;
    min-height: 8vh;
}

button {
    font-size: 1.25em;
    font-family: 'Baloo 2', 'Courier New', Courier, monospace;
    font-weight: 700;
    color: var(--link-color);
    text-decoration: none;
    background: transparent;
    border-style: none;
    cursor: pointer;
    margin: -1em auto;
    padding: 0 auto;
    line-height: 1;
}

button:hover {
    color: var(--link-hover);
}

/* Change autocomplete styles in WebKit */
:-webkit-autofill,
:-webkit-autofill:hover,
:-webkit-autofill:focus {
    box-shadow: 0 0 0px 0px #aaa inset;
    -webkit-box-shadow: 0 0 0px 0px #aaa inset;
    transition: background-color 5000s ease-in-out 0s;
}
</style>
