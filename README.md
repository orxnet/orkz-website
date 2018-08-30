# ORKZ website

This is the website of the Oude RKZ, on [www.orkz.net](http://www.orkz.net/).

## Grav

This website is made with [Grav](https://getgrav.org/). Grav is written in PHP and is a file-based website. It means that it uses only files on your computer, and does not need a database like MySQL. This allows us to place the full website (layout and content) in Github and track changes. It also means that when you download the files to your computer, you have an exact copy of the website, the way that it is online.

## Downloading the website to your computer

### Windows

1. Install WAMP or XAMP
2. Find the Web folder (eg. `c:\wamp64\www`)
2. Start WAMP and go to `http://localhost` to see if it's working
2. Install Git for Windows
3. Start 'Git GUI' and clone this website into the Web folder
4. Go to `http://localhost/orkz-website`. You should see 'Run bin/grav install'
5. Start Git Bash
6. Go to `c:\wamp64\www\orkz-website`
7. Run `bin/grav install` or `c:\wamp64\bin\php\php5.x\php grav install`
8. Run `bin/grav self-upgrade`
8. Run `bin/gpm install shortcode-core`
8. Run `bin/gpm install admin`

### Linux

1. Install apache: `sudo apt install apache2`
2. Find the Web folder (eg. `/var/www/html`)
2. Go to `http://localhost` to see if it's working
2. Install Git: `sudo apt install git`
3. `cd /var/www/html` and `git clone` this website
4. Go to `http://localhost/orkz-website`. You should see 'Run bin/grav install'
6. `cd /var/www/html/orkz-website`
7. Run `bin/grav install`
8. Run `bin/grav self-upgrade`
8. Run `bin/gpm install shortcode-core`
8. Run `bin/gpm install admin`

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
