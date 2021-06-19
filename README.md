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

Fix corruption error in WSL2:

```bash
error: object file .git/objects/79/cbddeb3c2e2e6cb41f301bdf1e10c0508066e3 is empty
error: object file .git/objects/79/cbddeb3c2e2e6cb41f301bdf1e10c0508066e3 is empty
fatal: loose object 79cbddeb3c2e2e6cb41f301bdf1e10c0508066e3 (stored in .git/objects/79/cbddeb3c2e2e6cb41f301bdf1e10c0508066e3) is corrupt
```

- Backup `.git` first.
- `find .git/objects/ -type f -empty | xargs rm`
- `git fetch -p`
- `git fsck --full`

Git pull config:

```bash
hint: Pulling without specifying how to reconcile divergent branches is
hint: discouraged. You can squelch this message by running one of the following
hint: commands sometime before your next pull:
hint:
hint:   git config pull.rebase false  # merge (the default strategy)
hint:   git config pull.rebase true   # rebase
hint:   git config pull.ff only       # fast-forward only
hint:
hint: You can replace "git config" with "git config --global" to set a default
hint: preference for all repositories. You can also pass --rebase, --no-rebase,
hint: or --ff-only on the command line to override the configured default per
hint: invocation.
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

More proper [info](https://github.com/esc/conda-zsh-completion)

## VS Code

Extensions:

- Material Icon Theme
- Material Theme (Darker High Contrast)
- Prettier - Code formatter
- Live Server
- ...for langs

Global `settings.json`:

```json
{
  "window.zoomLevel": 0.2,
  "editor.fontSize": 17,
  "editor.formatOnSave": true
}
```
