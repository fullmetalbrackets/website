---
title: Using Prism.js in a Nuxt static site
summary: I was having some issue getting this to work on a static (not SSR) site made with Nuxt, and although I read through a bunch of blog articles, most of them seemed to be missing some piece of information or other that made it not work for me. After mixing and matching some of the instructions, and combining the useful info with the official Nuxt documentation, I finally did all the necessary steps and got it to work. So here's a clear, succinct guide to using Prism.js in a Nuxt static site.
date: 2021-09-17
update: ''
---

These instructions assume you are using the [Nuxt/Content](https://github.com/nuxt/content) module. First things first, let's add Prism.js as a dependency.

Install via Yarn:

```shell
yarn add prism
```

Install via NPM:

```shell
npm install -D prism
```

### Edit nuxt config file

You need to add this line to your `nuxt.config.js` file:

```javascript
content: {
  markdown: {
    prism: {
      theme: false
    }
  }
}
```

I know setting `theme: false` seems counter-intuitive, but it's necessary for Prism to work on static sites for some reason. Also, for this to work on static, you DO NOT need to add Prism to your plugins in the nuxt config, it doesn't hurt anything to add it, but seems to only be necessary for SSR. Instead for static we need to make our own plugin for Nuxt to use.

### Create plugin for Prism

If it doesn't already exist, create a directory in your project root named **/plugins**, and within it create a file named **prism.js**. We want to import all the things we need in **/plugins/prism.js**:

```javascript
import Prism from 'prismjs'

// Include a theme:
import 'prismjs/themes/prism-okaidia.css'

// Include some plugins:
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'
import 'prismjs/plugins/highlight-keywords/prism-highlight-keywords'
import 'prismjs/plugins/show-language/prism-show-language'
import 'prismjs/plugins/autoloader/prism-autoloader'

// Include additional languages:
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-powershell'
import 'prismjs/components/prism-yaml'
import 'prismjs/components/prism-toml'

// Set vue SFC to markdown
Prism.languages.vue = Prism.languages.markup

export default Prism
```

This particular file will import Prism, import the Okaidia theme (which comes included in Prism), and also import what I consider some essential plugins for it. Add or remove any to your liking.

### Import Prism to \_slug.vue

Now we need to edit the **\_slug.vue** file in the **/pages** directory that is used to generate your individual blog posts/articles/whatever. It may be located in another sub-directory like **/pages/blog/\_slug.vue**. Edit the file and add this to the script section:

```javascript
import Prism from '~/plugins/prism'

export default {
  // the rest of your code
  mounted() {
    Prism.highlightAll()
  },
  // the rest of your code
}
```

That's it!

### But wait, what about inline code?!

Prism.js only works on code _blocks_ and not inline code snippets `like this one`. So if you use a theme, get the base colors for it (either look at the theme's CSS file or just inspect a Prism code block element in Dev Tools to get them) and include in your style, so that it all matches! You want to target inline code within paragraph elements.

```css
/* make inline code match Okaidia theme base colors  */
p code {
  background: #272822;
  color: #f8f8f2;
}
```

### References

- [Relevant section in the Nuxt docs](https://content.nuxtjs.org/writing#codeblocks)
- [Google search with articles & blog posts that got me part of the way](https://www.google.com/search?q=prism+js+static+mode&oq=prism+js+static+mode)