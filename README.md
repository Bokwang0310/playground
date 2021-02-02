# playground

## Git and Github

Config account:
```bash
$ git config --global user.name "Myname"
$ git config --global user.email "myemail@mail.com"
```

Change Git editor to Vim:
```bash
$ git config --global core.editor "vim"
```

Store Github username and password in `~/.git-credentials`:
```bash
$ git config --global credential.helper store
```

Remove cache:
```bash
$ git rm -r --cached <fileName>
```

## Terminal Customizing

Show only current folder in `~/.p10k.zsh`: `truncate_to_last`
```bash
typeset -g POWERLEVEL9K_SHORTEN_STRATEGY=truncate_to_last
```

### Aliases

```bash
alias open="cmd.exe /C start"
```

### Windows Terminal

scheme:
```json
{
    "name": "VScode",
    "background": "#232323",
    "black": "#232323",
    "blue": "#579BD5",
    "brightBlack": "#797979",
    "brightBlue": "#9BDBFE",
    "brightCyan": "#2BC4E2",
    "brightGreen": "#1AD69C",
    "brightPurple": "#DF89DD",
    "brightRed": "#F6645D",
    "brightWhite": "#EAEAEA",
    "brightYellow": "#F6F353",
    "cyan": "#00B6D6",
    "foreground": "#D3D3D3",
    "green": "#3FC48A",
    "purple": "#CA5BC8",
    "red": "#D8473F",
    "white": "#EAEAEA",
    "yellow": "#D7BA7D"
}
```

## Anaconda

Create environment:
```bash
$ conda create -n "<name>" python=<version>
```

Disable auto activation base env:
```bash
$ conda config --set auto_activate_base false
```

Show env list:
```bash
$ conda env list
```

### Get Autocomplete in Zsh

Install Project:
```bash
$ git clone https://github.com/esc/conda-zsh-completion
```

Add command before calling oh-my-zsh:
```bash
fpath+=/home/bokwang/conda-zsh-completion
```

Add command after conda initialize:
```bash
compinit conda
```

More proper [info](https://github.com/esc/conda-zsh-completion)

## VS Code

Extensions:
* Material Icon Theme
* Material Theme (Darker High Contrast)
* Prettier - Code formatter
* Live Server
* ...for langs

Global `settings.json`:
```json
{
    "window.zoomLevel": 0.2,
    "editor.fontSize": 17,
    "editor.formatOnSave": true,
}
```
