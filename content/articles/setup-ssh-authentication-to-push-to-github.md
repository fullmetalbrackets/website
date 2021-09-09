---
title: Setup SSH authentication to push to Github
summary: Setting up SSH keys and pushing to GitHub without needing to enter a
  username and password has always been a good practice, but now that GitHub is
  deprecating basic username and password authentication, it's past time to get
  this set up if you haven't already. It's pretty simple and only takes a few
  minutes, here's the quick and dirty instructions.
date: 2021-09-09T04:23:06.251Z
update: 2021-09-09T04:23:06.267Z
---
First we need to add our computer's SSH public key to GitHub. Login to your GitHub account, click on your profile icon in the top-right corner, then click on **Settings**.

<a href="https://arieldiaz.codes/img/gh1.png" target="_blank"><img src="/img/gh1.png" alt="Screenshot of GitHub with Settings selected from dropdown menu"></a>

Next click on **SSH and GPG keys** in the menu on the left:

<a href="https://arieldiaz.codes/img/gh2.png" target="_blank"><img src="/img/gh2.png" alt="Screenshot of GitHub settings with SSH and GPG keys selected"></a>

Now click the green **New SSH key** button near the top-right side of the screen:

<a href="https://arieldiaz.codes/img/gh3.png" target="_blank"><img src="/img/gh3.png" alt="Screenshot showing the button to click on GitHub"></a>

Now use your favorite text editor to open your computer's SSH public key, located in your `~/.ssh` directory ([read this](ssh.html) if you have no idea what I'm talking about) and most likely named `id_rsa.pub`, if you used the default options when you generated the key. In the key file you'll see a jumble of text that looks something like this:

<a href="https://arieldiaz.codes/img/ssh-rsa.png" target="_blank"><img src="/img/ssh-rsa.png" alt="Screenshot of an SSH key"></a>

Copy all this text to clipboard. Now go back to GitHub, paste the SSH key text in, add a title (I usually put the hostname of the computer this key belongs to) and finally click **Add SSH key**.

<a href="https://arieldiaz.codes/img/gh4.png" target="_blank"><img src="/img/gh4.png" alt="Screenshot of GitHub screen to add new SSH key"></a>

That's it! You should now be able to push to GitHub via SSH and without password prompt. Now, go into the directory of the project you want to push to GitHub. On Windows, we can go into the project folder then right-click > Open Powershell. Note that if you don't have Powershell in your right-click menu, [you'll have to add it](https://www.howtogeek.com/165268/how-to-add-open-powershell-here-to-the-context-menu-in-windows/). (Alternately, you can [install Windows Terminal and add that to the right-click menu](https://www.tenforums.com/tutorials/179549-add-open-windows-terminal-expandable-context-menu-windows-10-a.html), which is my personal preference for doing anything on the command line in Windows.)

From inside the project directory, you can initialize the git repo with `git init` command. This creates the **.git** hidden directory that contains stuff you'll never really need to look at. Pretend this directory does not exist, but take note that if you ever need to re-initialize the repo in a directory for any reason, the quickest way is to simply delete the .git directory. Now we'll use a series of commands to prepare our project files to be pushed to GitHub.

First, we have to "stage" files that we want to add to a commit. This is done with the `git add` command followed by the file name, but usually you'll want to stage all modified files without having to list them all out. This is done by using a period instead of a file name: `git add .`

Next we have to "commit" the staged files, including a short message describing what we changed. Always include a commit message as best practice, but for your first commit on a personal project you should simply add the message "first commit." A message is added to a commit with the `-m` option. Here is the full command: `git commit -m "first commit"`

If you get an error and Git asks who you are, then it's probably your first time doing a commit on the computer you're using. Use the following commands to register your username and email address on this computer with Git:

- `git config --global user.name "username"`
- `git config --global user.email "email@example.com`

Now we can re-try the commit and it should work. The next and final step is to push to GitHub. First, you will need to have created a new repository on GitHub and copied the URL for it. I will assume you know how to do that and skip it. If the new repo has a README.MD and/or .gitignore, your first command will need to be `git pull` followed by the URL to get those files on your computer. Otherwise, if the new repo is empty, we can go straight to `git push`. However, for the first push to a new remote repo, we'll want to set the remote repo we are pushing to as the upstream master branch. Do so with this command:

- `git push --set-upstream git@github.com:username/repo.git master`

Note that if you'd rather use **main** as the primary branch instead of **master**, use the following commands instead of the above, to set both the local branch and the remote one to **main**:

- `git push --set-upstream git@github.com:username/repo.git main`
- `git branch -M main`

And we're done! Git will automatically keep track of any modified files in the project directory, as well as changes in the remote repository, and you can easily push changes to GitHub or pull from it if you (or a friend?) make changes there. You can use Git and GitHub for all sorts of stuff, not just your coding project. I use it for this website to quickly deploy to Netlify, and also to backup certain configuration files from Windows and Linux. (In private repos, of course.) The best way to learn anything is by using it, so feel free to use Git for as many things as possible, GitHub barely has limits for free users and you can always delete any trash repos you no longer care about.

### References

- [GitHub blog post about deprecating password auth](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/)
- [GitHub documentation](https://docs.github.com/en)
- [Git documentation](https://git-scm.com/docs/git)