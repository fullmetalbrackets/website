---
title: How to use a custom PrismJS theme with Nuxt/Content
date: 2021-10-18
update: ''
tags:
  - nuxtjs
  - webdev
---

PrismJS is a great for making code blocks look pretty, it comes with a set of several themes out of the box (my favorite of those is Okaidia), and there's also many more additional themes available as a separate package on NPM and Yarn. But what if none of those matches the color scheme of your website? With Nuxt and the Content module, you can easily use a custom CSS file to make the syntax highlighting really match the overall look of your site or blog. Here's how.

<!--more-->

## Requirements

Before we begin, please note that I've so far only used this method and confirmed it works when using `target: 'static'` and `ssr: false` in **_nuxt.config.js_**. I assume this will work in SPA mode and/or using SSR, but I have not done so myself so I can't say for certain.

If you haven't already, install PrismJS in your project via `npm install prismjs` or `yarn add prismjs`, then add the following to your Nuxt config:

```js
// nuxt.config.js

content: {
  markdown: {
    prism: {
      theme: false
    }
  }
}
```

This will use let Prism and Content play nice together. The reason we are setting `theme: false` is because we don't need to use this in static mode, instead we import a theme through a custom plugin that we'll make ourselves. First, let's create the theme.

### Creating custom theme and importing to Prism

PrismJS "themes" are just CSS files that target specific classes used by Prism to style code blocks. Check out the CSS files [in Prism's themes directory](https://github.com/PrismJS/prism/tree/master/themes) or the [many additional Prism themes](https://github.com/PrismJS/prism-themes/tree/master/themes) available. Using these as a base, change the colors, sizes, and what have you to create your own theme.

Once you have a CSS file with your custom theme, place it in the same directory where you keep your global/main CSS file or Sass/SCSS files, probably `/assets`. I'll assume you named it **_prism-theme.css_** but you can name it whatever, just make sure it has a `.css` extension.

Create a file named **_Prism.js_** within the `/plugins` directory of your project, and add the following lines:

```js
// plugins/Prism.js

import Prism from 'prismjs'

import 'assets/prism-theme.css'

Prism.languages.vue = Prism.languages.markup

export default Prism
```

That's all you need to make Prism use your custom theme. You can import other PrismJS plugins and components through this file too, but that's beyond the scope of this post. If you'd like, [check out the custom theme I created for this site](https://gist.github.com/fullmetalbrackets/c4cf2b4ee2cf78c99997e6cc31ea6aa0) and use it as your own baseline. Happy theming!

### References

- [PrismJS](https://github.com/PrismJS/prism)
- [Additional Themes for PrismJS](https://github.com/PrismJS/prism-themes)
- [Nuxt/Content module](https://github.com/nuxt/content)
- [My Vaporwave PrismJS Theme](https://gist.github.com/fullmetalbrackets/c4cf2b4ee2cf78c99997e6cc31ea6aa0)
