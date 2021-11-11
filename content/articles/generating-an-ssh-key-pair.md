---
title: Generating an SSH key pair
description: Secure Shell, a protocol for securely connecting from one computer to another. As a web developer, you will probably end up using SSH a lot, and even if you don't it's a handy skill to have. Let's make SSH even more secure by using encrypted key pairs.
date: 2021-09-11
update: ''
tags:
  - ssh
  - terminal
---

Secure Shell, a protocol for securely connecting from one computer to another. As a web developer, you will probably end up using SSH a lot, and even if you don't it's a handy skill to have. Let's make SSH even more secure by using encrypted key pairs.

Usually when to a computer or server via SSH, you are prompted for a username and password, but you can skip this and make your SSH sessions even more secure by using key pairs. Basically you will generate two encrypted keys that are associated with each other -- a private key and a public key. These are used to verify your identity.

The **.ssh** directory is where SSH configurations live and where your public/private key pairs are located by default. First, it's important to know where that directory is located your computer and the server you will connect to:

On Windows:

```powershell
C:\Users\{{username}}\.ssh
```

On Linux:

```bash
~/.ssh
```

### Generate an SSH key pair

Generating SSH keys is fast and simple on Windows, Linux and Mac, just use the command `ssh-keygen` and follow the prompts. If it's your first time using SSH, just hitting Enter↵ at all the prompts to choose the default should be fine. The defaults will do the following:

- A public and private key pair will be generated using RSA encryption. (There are other, technically more secure algorithms you can use for SSH, like ECDSA, but that's beyond the scope here. RSA is fine for personal use within your home network.)
- The default name of the private key will be `id_rsa`. (Or if you chose a different encryption, it'll be for example `id_ecdsa`.) Note that lack of a file extension.
- The default name of the public key will be `id_rsa.pub`. (Or `id_ecdsa.pub` etc.) This one has the **.pub** file extension.
- Both keys are placed in the user's `.ssh` directory.

It should go without saying, the private key should NEVER be given out to anyone, for any reason. In fact, there is no reason to do so. The public key is the one to give to servers and services, like GitHub or AWS, in order to connect to them. So let's give it to them.

### Copying SSH public key from Linux to a remote server

Copying SSH keys between Linux machines is easy with the command `ssh-copy-id` by specifying the IP or hostname of the server, and the user, like so.

```bash
ssh-copy-id user@192.168.1.100
```

Or if you prefer to use the hostname:

```bash
ssh-copy-id user@hostname
```

That's it, easy peasy. Now when you SSH into the server, it should skip asking for a login. But Windows is special and does not have the **ssh-copy-id** command.

### Copying SSH public key from Windows to a remote server

Since Powershell does not recognize the ssh-copy-id command, we'll do the following to copy the SSH public key to a Linux server.

```shell
cat ~/.ssh/id_rsa.pub | ssh bob@hostname 'cat >> .ssh/authorized_keys && echo "Key copied"'
```

If it's your first time using SSH to connect to the server, you'll be prompted for a username and password -- but it will be the last time, once the key is copied over. All done!

### References

- [SSH Man Page](https://linux.die.net/man/1/ssh)
- [SSH-Copy-ID Man Page](https://linux.die.net/man/1/ssh-copy-id)
