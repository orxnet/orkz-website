#!/bin/sh
user=$(whoami)
sudo chown -R $user:www-data .
find . -type f | xargs chmod 640
find ./bin -type f | xargs chmod 750
find . -type d | xargs chmod 750
find . -type d | xargs chmod +s
find ./user/config | xargs chmod g+w
find ./user/accounts | xargs chmod g+w
find ./cache | xargs chmod og+w
find ./tmp | xargs chmod g+w
find ./user/data | xargs chmod g+w
find ./user/pages | xargs chmod g+w
find ./assets | xargs chmod g+w
find ./backup | xargs chmod g+w
find ./images | xargs chmod g+w
find ./logs | xargs chmod g+w
chmod u+x *.sh

