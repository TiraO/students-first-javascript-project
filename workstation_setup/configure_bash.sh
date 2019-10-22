#!/usr/bin/env bash

git clone https://github.com/Bash-it/bash-it.git ~/.bash_it
cp ./bobby_pivotal.theme.bash ~/.bash_it/themes/bobby/bobby.theme.bash
cp ./.inputrc ~/
~/.bash_it/install.sh --silent
source ~/.bash_profile
bash-it enable completion git
bash-it enable plugin ssh
bash-it enable completion ssh

git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
