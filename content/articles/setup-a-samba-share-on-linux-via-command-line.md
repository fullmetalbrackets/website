---
title: Setup a Samba share on Linux via command line
summary: >-
  Linux servers make a great NAS - that is, Network Attached Storage.
    Nowadays most people consider a NAS to mean a Synology or a rack server
    running TrueNAS or OpenMediaVault. But any machine with directories accessible
    by others on the same network fulfills the functions of a NAS.
date: 2021-09-01
update: ''
tags:
  - linux
  - terminal
---

Samba is a tried and true, very basic method of sharing a directory with other machines on the network, including Windows PCs. Setting up shares with a GUI is nice, but unnecessary if you're comfortable with the command line. And why wouldn't a developer, or anyone working in tech, want to get as comfortable with the command line as possible? It can be a bit confusing to set up Samba on Linux the first time, so let's cut through the bullshit.

Samba usually comes installed with most Linux distributions. If you do need to install it, use the following commands (which will also auto-install dependencies). On Ubuntu and other Debian-based distributions:

```bash
sudo apt install -y samba
```

On Arch Linux and Manjaro distributions, you need to use the following command instead:

```bash
yes | sudo pacman -S samba
```

After installation, you should have a default Samba configuration file in /etc/samba/ directory called smb.conf -- if you do not, we can get an example file:

```bash
cd /etc/samba
wget https://git.samba.org/samba.git/?p=samba.git;a=blob_plain;f=examples/smb.conf
```

First, make a backup copy of smb.conf (just in case), then open it in a text editor:

```bash
sudo cp /etc/samba/smb.conf /etc/samba/smd.conf.backup
sudo nano /etc/samba/smb.conf
```

There's a whole lot of text in here and it may be intimidating to first time users. Feel free to delete everything (it's mostly informative/explanatory comments that you should read, but probably won't) and only keep the below, which is all you really need in smb.conf to make it work:

```yaml
[global]
workgroup = WORKGROUP
server string = Samba Server
netbios name = NETBIOS_NAME
security = user
ntlm auth = true
encrypt passwords = yes
smb passwd file = /etc/samba/smbpasswd
interface = 127.0.0.0/8 eth0

[public]
path = /path/to/share
browseable = yes
writable = yes
read only = no
public = yes
create mask = 0777
directory mask = 0777
force user = 0777
```

Let's explain these parameters briefly:

- Under `[global]` the `workgroup = parameter` is important; you'll need to specify a Workgroup to access the share from Windows. The default is most likely WORKGROUP unless you changed it on your Windows PC. Just make sure it's the same for all the machines you want accessing the share.
- Under `[public]` are parameters for the share, and this first one sets the share's name to "public."
- `writeable = yes` and `read only = no` allows the directories and files in the share to be created, modified, or deleted from other computers that access it. Changing these to `writeable = no` and `read only = yes` means you can only open/execute files, but not modify (or even add!) files/directories in the share.
- `security = user` and `ntlm auth = true` ensures that Windows PCs can login to the Linux share. In my experience, these aren't necessary on Debian/Ubuntu, but I find Samba won't work on Arch/Manjaro without ntlm auth.
- `create mask = 0777`, `directory mask = 0777` and `force user = 0777` ensures that all directories and files are created with read/write permissions. Make sure you include these parameters if you want unrestricted access to the share from other computers.

Save the file and quit the editor. Now let's check that the configuration is valid with the following command:

```bash
testparm
```

You'll get some output here that's self-explanatory, one of the lines should say "Loaded services file is OK" meaning your config is good. Next we need to add a user to Samba. First of all, make sure it's a user that already exists in the Linux machine. Create the user if necessary:

```bash
sudo adduser bob
```

Now we can add Bob to Samba. You'll be prompted for a password, make sure to choose one you'll remember, since you'll need both the username and password to access the share:

```bash
smbpasswd -a bob
```

Let's start up the services needed, smbd and winbindd, and enable them to auto-run at boot. Also, if you want to access the share from other computers via hostname instead of IP address, we also need to start & enable nmbd. The commands for Ubuntu/Debian are:

```bash
sudo systemctl start smbd nmbd winbindd
sudo systemctl enable smbd nmbd winbindd
```

For Arch/Manjaro, use these commands instead (notice the the services don't have the trailing d in their names):

```bash
sudo systemctl start smb nmb winbind
sudo systemctl enable smb nmb winbind
```

Now you should be able to connect to the shared directory from other computers on your network! On Windows, go to Start Menu > Run and type the following (replacing with your Linux machine's actual IP) and hit Enter:

[![Screenshot of Windows Run](/img/samba1.png)](https://arieldiaz.codes/img/samba1.png)

Or you can connect by hostname rather than IP, but remember the nmbd/nmb service must be running:

[![Screenshot of Windows Run](/img/samba1.png)](https://arieldiaz.codes/img/samba2.png)

Your PC should take a moment to connect and then prompt you for a login. That is the username you use on the Linux machine, and the password you chose when adding that user to Samba earlier. Check the "save my credentials" checkbox to avoid having to enter the login again in the future. You should now have the shared folder open in your Windows PC!

However, there MAY be an additional issue, as Windows 10 Home (but not Professional) apparently does not have the Local Security Policy settings (secpol.msc) that is required to interface with Samba. I can't confirm this myself since I use Windows 10 Professional, but if you have issues and Windows complains about secpol.msc, [go here for detailed instructions](https://www.majorgeeks.com/content/page/how_to_enable_local_security_policy_in_windows_10_home.html) on how to fix this issue.

<h2>References</h2>

- <a href="https://www.samba.org/samba/docs" target="_blank" rel="noopener">Samba Documentation</a>
