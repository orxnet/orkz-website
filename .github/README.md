# ORKZ website

This is the website of the Oude RKZ, on [www.orkz.net](http://www.orkz.net/).

## Grav

This website is made with [Grav](https://getgrav.org/). Grav is written in PHP and is a file-based website. It means that it uses only files on your computer, and does not need a database like MySQL. This allows us to place the full website (layout and content) in Github and track changes. It also means that when you download the files to your computer, you have an exact copy of the website, the way that it is online.

## Downloading the website to your computer

### Windows

1. Install WAMP or XAMP
1. Find the Web folder (eg. `c:\wamp64\www`)
1. Start WAMP and go to `http://localhost` to see if it's working
1. Install Git for Windows
1. Start Git Bash
1. `cd /c/wamp64/www`
1. `git clone https://github.com/orxnet/orkz-website`
1. Go to `http://localhost/orkz-website`. You should see 'Run bin/grav install'
1. Go back to Git Bash
1. `cd /c/wamp64/www/orkz-website`
1. Run `/c/wamp64/bin/php/php5.6.35/php bin/grav install`
1. Run `/c/wamp64/bin/php/php5.6.35/php bin/grav self-upgrade`

### Linux

1. Install apache: `sudo apt install apache2`
1. Find the Web folder (eg. `/var/www/html`)
1. Go to `http://localhost` to see if it's working
1. Install Git: `sudo apt install git`
1. `cd /var/www/html`
1. `git clone https://github.com/orxnet/orkz-website`
1. Go to `http://localhost/orkz-website`. You should see 'Run bin/grav install'
1. `cd /var/www/html/orkz-website`
1. Run `bin/grav install`
1. Run `bin/gpm self-upgrade`
1. Run `bin/gpm install shortcode-core`
1. Run `bin/gpm install admin`

### Pushing your work

1. `git status`: check which files you changed
1. `git diff`: check what you actually changed
1. `git stash`: undo what you changed
1. `git pull`: pull latest work from online
1. `git stash pop`: reapply your changes on latest work
1. `git commit`: commit your work (think of a nice commit message)
1. `git push` or `git push origin master`: push your work

### Pulling new work

1. `git status`: check if you dont have any stray changes
1. `git stash`: undo your stray changes if they are there
1. `git log`: check which is the most recent commit you have locally
1. Compare with [latest commits online](https://github.com/orxnet/orkz-website/commits/master).
1. If you are behind: `git pull` or `git pull origin master`
1. `git log`: check if successfully pulled
1. `bin/gpm install`: install new plugins if the `.dependencies` file was updated

## Getting Started with Grav

* [What is Grav?](https://learn.getgrav.org/basics/what-is-grav)
* [Install](https://learn.getgrav.org/basics/installation) Grav in few seconds
* Understand the [Configuration](https://learn.getgrav.org/basics/grav-configuration)
* Take a peek at our available free [Skeletons](https://getgrav.org/downloads/skeletons)
* If you have questions, jump on our [Slack Room](https://getgrav.org/slack)!
* Have fun!

## Exploring More

* Have a look at our [Basic Tutorial](https://learn.getgrav.org/basics/basic-tutorial)
* Dive into more [advanced](https://learn.getgrav.org/advanced) functions
* Learn about the [Grav CLI](https://learn.getgrav.org/cli-console/grav-cli)
* Review examples in the [Grav Cookbook](https://learn.getgrav.org/cookbook)
