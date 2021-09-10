---
title: 4 ways to easily host your web site or app online for free
summary: So you're learning web development, building things locally and only
  ever seeing your site or app when you use "npm run dev" (or "yarn dev") on
  your computer. But how do you get this thing online so you can make sure it
  works on the interwebs? How do you learn headers, content-security-policy and
  CORS without having a site hosted online to work with? And how to do it FOR
  FREE? Here are the four most user-friendly and easy-to-setup hosting
  providers, in my humble opinion.
date: 2021-09-10T04:22:01.522Z
update: 2021-09-10T04:22:01.540Z
---
So you're learning web development, building things locally and only ever seeing your site or app when you use "npm run dev" (or "yarn dev") on your computer. But how do you get this thing online so you can make sure it works on the interwebs? How do you learn headers, content-security-policy and CORS without having a site hosted online to work with? And how to do it FOR FREE? Here are the four most user-friendly and easy-to-setup hosting providers, in my humble opinion.

### Netlify

A super simple and user-friendly host that automagically builds and deploys your site when you push a commit to a remote Git repository where your site or app lives. The free tier is very generous (300 build minutes and 100GB of bandwidth per month) and the only requirement is for your project to be hosted at either GitHub, GitLab or Bitbucket. The only downside to Netlify is that it doesn't host a back-end for you, it's mainly geared towards static sites and JAMstack apps made with Gatsby, Nuxt, Eleventy, etc. However, you can very easily use serverless functions, which are executed on AWS Lambda, although Netlify handles the whole things behind the scenes. Also, Netlify has some really cool plugins and features that solve problems for you -- for example, Netlify CMS, which I use for this blog!
- Create an account at **netlify.com**
- In the team overview, click on "**New site from git**"
- Under "**continuous deployment**", choose a Git provider.
- You'll be prompted to login to your Git provider to authorize Netlify. Do so.
- Next a list of your repositories should appear, choose one.
- On the next page, you'll configure the branch to deploy and the build settings, so for example if your project uses yarn instead of npm, change the build command to "yarn build." Once you're done click "**Deploy site.**"
- Netlify will begin the process of building your site, if there's no issues with the build then your site will deploy in a minute or two.
- Be aware: ANY push to the Git repo will force a build & deploy of the site on Netlify, though you can turn off auto-deploys and only deploy manually if you really want to.



### Vercel

Very similar to Netlify, but it has a major feature that Netlify does not -- server-side rendering! This means you can host your Node.js apps and stuff built with Next.js, for example. Another advantage Vercel has over Netlify is that it's free tier is very generous, with seemingly no limit on build minutes or bandwidth (at least not that I've noticed), however you cannot have collaborators on the free tier unlike Netlify. Honestly, I haven't used Vercel much as of yet, but I will be using it more in the future.
- Create an account at **vercel.com**
- On your dashboard, click "**New Project**"
- Under "**import from git repository**" choose a Git provider.
- You'll be prompted to login to your Git provider and authorize Vercel. Do so, and click "**Import**" on the repository of your project.
- On the next screen, press "**Skip**" to ignore the team setup (that's for pro accounts).
- You'll be able to configure project settings, including framework if one is being used for the project (should be auto-detected), build and install commands (the defaults should be fine if the framework is detected correctly), output directory, and environmental variables. When you're done, scroll down and click "**Deploy**."
- Vercel will begin the process of building your site, if there's no issues with the build then your site will deploy in a minute or two.



### GitHub Pages

You can skip the third-party providers and host your site right on GitHub, though like Netlify will only host static sites, nothing with a back-end like Node.js or PHP. The only limits you really have are that sites served by GitHub pages (and their source repo) may be no larger than 1GB, a soft bandwidth limit of 100GB per month, and a soft limit of 10 builds per hour. What does soft limit mean? Well, apparently your site won't automatically go offline or fail to deploy on new commits past the limits, BUT your builds may be delayed and GitHub will email you with suggestions on how to avoid hitting these limits again. The process for hosting a site is a little weird compared to others, but not difficult at all to grasp.

- Login to your GitHub account, and create a new repository.
- Name the new repository **username.github.io** where "**username**" is your GitHub username, and click "**Create Repository**."
- You'll have an empty repo now, but GitHub Pages is already set up for it. 
- Now either import another repository or push a commit from a local repo.
- If all goes well (and your site is compatible with GitHub Pages by default, no settings to configure/customize here) then your site will show up shortly at **https://username.github.io**



### Surge.sh

Possibly the simplest hosting solution to ever exist. Literally one command in the terminal, answer a few prompts, and your site is up in seconds. The free tier includes unlimited publishing -- that means infinite sites, build minutes, and custom domains under your account. However,  Here's how brain-dead simple using surge.sh is, although you do need to have access to the command line.
- `npm install -g surge` or `yarn add --global surge` - This will install surge.sh globally so you can use it from any directory without first installing/adding it locally.
- `npx surge` or `yarn surge` - If using Surge.sh for the first time (or from a new machine), it will prompt you for an email and password right in the command line, and log you in or create a new account if one does not exist matching the email address you entered. When logged in you'll be prompted to specify the full path to the directory to upload, then a sub-domain of your choice (or go with the randomly generated one), then hit **⏎Enter** and your project gets uploaded. That's it! If you go to the URL you should see your site, it will literally take only seconds to be online.
- `npx surge ./ --domain example.surge.sh` - Use this shorthand to specify the current working directory (`./`) is the project you want to upload, and pass the `--domain` flag to specify a sub-domain, this case "example."



### Other options

There's many free web hosts I haven't listed here, mostly because I haven't used them. One I intend to test out very soon is [Heroku](https://heroku.com), I'll eventually write a blog post about it. Also, it is possible to host almost anything from simple sites, to complex apps and APIs on the [Amazon Web Services](https://aws.amazon.com), [Google Cloud](https://cloud.google.com) and [Azure](https://azure.microsoft.com), but they are more complicated to set up than the options listed here. I will write a separate blog post about those in the future as well. Thanks for reading.



### References

- [Netlify](https://netlify.com) / [documentation](https://docs.netlify.com)
- [Vercel](https://vercel.com) / [documentation](https://vercel.com/docs)
- [GitHub Pages](https://pages.github.com) / [documentation](https://docs.github.com/en/pages)
- [Surge.sh](https://surge.sh) / [documentation](https://surge.sh/help)