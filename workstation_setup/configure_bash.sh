#!/usr/bin/env bash

git clone https://github.com/Bash-it/bash-it.git ~/.bash_it
cp ./workstation_setup/bobby_pivotal.theme.bash ~/.bash_it/themes/bobby/bobby.theme.bash
cp ./workstation_setup/.inputrc ~/
~/.bash_it/install.sh --silent
source ~/.bash_profile
source ~/.bashrc
bash-it enable completion git
bash-it enable plugin ssh
bash-it enable completion ssh

git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
