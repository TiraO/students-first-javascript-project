# students-first-javascript-project

- install git
- install nodejs
- install webstorm
- install yarn


```bash
# in directory where you want the project to live, download this via git:
git clone https://github.com/TiraO/students-first-javascript-project.git

# go to your project directory
cd students-first-javascript-project/

# in your project directory:
yarn install
```

## WebStorm setup on Linux

From inside WebStorm run **Tools > Create commandline launcher...**

#### Use macOS shortcuts on Linux

- Copy [`storm` from here](../workstation_setup/storm) to your `/usr/local/bin`
- Use e.g. `storm .` to launch WebStorm
- Download [`intellij_keymap_settings.zip` from here](../workstation_setup/intellij_keymap_settings.zip) and import it with **File > Import Settings...**
- This will set up shortcuts based on the Mac OS X 10.5 keymap, but supporting Ctrl:
    - `Ctrl+N` for Scratch File
    - `Ctrl+Shift+T` for Reopen Closed Tab
    - Copy / Paste / Cut / Undo / Redo / Save / Select All / Find / Find in Path... / Preferences... / Close Others / Close Active Editor / Comment with Line Comment / Navigate Back/Forward / Move Caret to Next Word / etc.
    - Mouse shortcut for Navigate > Declaration

#### Disable special `Super` key shortcuts for Unity launcher:
(no need for Mac)

```bash
sudo apt-get install compizconfig-settings-manager -y

# launch the settings manager
ccsm
```
- Click 'Ubuntu Unity Plugin'
- Search through the tabs to remove shortcuts that use `Super`:
  
  - `Key to show the Dash, Launcher and Help Overlay` (interferes with toggling IDEA sidebar, Run tab, etc.)
  - `Key to show the menubar while pressed`
  - `Key to lock the screen`
  
  
## Bash setup Mac / Linux 

## How to get Heroku to switch to other MUSC games

Go to package.json file 
Go to the start line (currently line 15)
Change the name of the file it shows.
Make a commit and push. 
Boom.