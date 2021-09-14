---
title: Git commands cheat sheet
summary: When I was learning Git, in order to avoid giant articles and get right
  to the commands I needed reminding of, I made myself a cheat sheet that
  plainly and succinctly explained each Git command. Here is that quick and
  dirty guide of Git commands that you will likely use often as a web developer.
date: 2021-09-08
update: ''
---

### Setting up git locally

Clone an existing remote repo to work on locally.

- `git clone https://github.com/username/repo.git`

<br>
If not cloning and starting from scratch, initialize git within the current working directory.

- `git init`

<br>
Configure your username & email in git. (Only need to do once per machine.)

- `git config --global user.name "username"`
- `git config --global user.email "email@example.com"`

<br>
Change master branch to main. (From here on out this guide will presume you use <b>main</b>.)

- `git branch -M main`

<br>
Set a remote repository (e.g. on Github, Bitbucket, etc.) as the <b>origin</b>, basically you are telling git that this remote repo is the default you will be pushing to and pulling from.

- `git remote add origin https://github.com/username/repo.git`

### Staging and committing files

<br>
Stage files modified since the last commit.

- `git add .` - Stage all modified files. (Using `git add --all` does the same thing.)
- `git add file1.html file2.html file3.js` - Stage a specific file, separate multiple files by a space.
- `git add src/file.html src/styles/file.css src/scripts/file.js` - Stage files in other directories.
- `git add folder/*` - Stage all files in a specific directory.
- `git add *.html` - Stage only specific types of files.

<br>
Editing staged files.

- `git reset` - Unstage ALL staged files. Changes to the file will be saved.
- `git restore --staged file1.html js/file2.js` - Unstage specific files, changes to files will be kept.

<br>
Commit staged files, using the -m flag to add a message without quotation marks.

- `git commit -m "changed colors, added fireworks"`

<br>
Edit the message of last commit.

- `git commit --amend` or you can use the short-hand `git commit -a`

<br>
Undo the last commit, BEFORE pushing to remote. Changes to files and directories will be kept.

- `git reset HEAD`

<br>
Totally undo all changes since the last commit, and restore deleted files. Be careful using this!

- `git reset HEAD --hard`

<br>
Using above command does not remove any newly created files since last commit. AFTER using it to undo changes and restore deleted files, delete NEW files and directories like this.  (<code>-f</code> specifies files, <code>-d</code> specifies directories)

- `git clean -fd`

<br>
Check what stage of the git workflow all tracked (modified) files are in.

- `git status`

### Pushing to and pulling from remote repos

Push to main branch on your default remote.

- `git push`

<br>
The first time you push a commit, you will need to designate an upstream branch (the branch of the remote repo that you will track) or git will bother you about it. If this is your own project, your upstream will probably be the production branch -- i.e. main or master.

- `git push --set-upstream origin main`

<br>
To pull and apply changes from remote repos.

- `git pull` - This will pull from origin's main branch if it is set as upstream, like above.
- `git pull bitbucket-repo` - If you added more remote repos, this pulls the specified remote instead of origin, in this case one we set up in a prior example named "bitbucket-repo."

### Dealing with branches

Switch to a branch, use <b>-c</b> to create if it doesn't already exist.

- `git switch -c new-branch`

<br>
Push a branch to remote repo.

- `git push new-branch` - Push to the set origin. (same as `git push origin new-branch`)
- `git push repo2 new-branch` - Push to another remote that you already set up.

<br>
Merge committed changes in a branch (let's say it's called <b>new-feature</b>) with the main branch.

- `git switch main` - Make sure to switch from the other branch to main first.
- `git merge feature-branch` - This applies the actual merge locally.

<br>
If the merge has conflicts, you can undo it.

- `git merge --abort`

<br>
Sometimes git will not undo a merge with <b>--abort</b>, usually because there were changes made after the merge. To force undoing the merge at this point use the <b>--continue</b> flag.

- `git merge --continue`

<br>
Delete a LOCAL branch. This does NOT affect remote branches!

- `git branch -d branch-name`

<br>
Sometimes git will refuse to delete a branch, like if it has commits that the main branch does not. Force deletion with <b>-D</b>

- `git branch -D branch-name` (capital D instead of lowercase d)

<br>
Delete a REMOTE branch. Here we don't use <b>git branch</b> but instead <b>git push</b> with added options.

- `git push origin --delete branch-name`

### Multiple remote repos

Above I explained how to add a remote repo as <b>origin</b>, making it the default. But what if you want to push your project to multiple remotes, even on different git hosts? For example, say your origin is on Github, but you also want copies of your project on Bitbucket and Gitlab. (Let's assume you name these <b>bitbucket-repo</b> & <b>gitlab-repo</b> locally.)

- `git remote add gitlab-repo https://gitlab.com/fullmetalbrackets/website.git`
- `git remote add bitbucket-repo https://username@bitbucket.org/username/repo.git`

<br>
Now you can push to those additional remotes by specifying the name and branch.

- `git push bitbucket-repo main`
- `git push gitlab-repo main`

<br>
To "track" a branch when adding a remote, making that branch the default for the remote.

- `git remote add -t main gitlab-repo https://gitlab.com/fullmetalbrackets/website.git`

<br>
By tracking the main branch on the remote "gitlab-repo" and can do the following.

- `git push gitlab-repo` (no need to specify main branch after the repo name)

### Dealing with forks

Let's say you've forked an existing repo on Github, your version of that repo under your account is <b>origin</b>. The pre-existing repo you forked is <b>upstream</b>. If you wanted to pull updates from the upstream repo, you do the following.

- `git switch main` - Make sure you're on the main local branch.
- `git remote add -t main upstream https://github.com/username/repo.git` - Add a remote as upstream and track it's main branch.
- `git fetch upstream` - This fetches metadata on the changes between the upstream and your local branch, but nothing changes locally yet.
- `git merge origin/upstream` - Merge fetched changes from the upstream into your local repo.

### Advanced use cases

There's way too many advanced commands, and options for these commands, that I haven't even learned yet! So here's a few additional random commands I've picked up along the way, though this is in no way a complete list.

<br>
To "detach HEAD" and explore a prior commit, you'll need the commit's hash ID from Github.

- `git checkout 6e751bc32`

<br>
If you want to create a new branch from this old commit, and switch to it.

- `git switch -c new-branch`

<br>
Or if you want to go back. (Reattach HEAD to most recent commit.)

- `git switch -`

<br>
Revert the remote ORIGIN to this old commit. (Be careful doing this!)

- `git revert 6e751bc32`

<br>
There's more advanced commands I'm not going to talk about until I use them myself -- things like <code>git rebase</code>, and I'm also not showing all the different ways to use <code>git checkout</code> because I don't know even half of them. I'll make a future blog post as I learn more of these.

### References

- [Git Documentation](https://git-scm.com/docs/git)
- [GitHub Cheat Sheet](https://training.github.com/downloads/github-git-cheat-sheet)
- Many questions and answers on [Stack Overflow](https://stackoverflow.com)...
