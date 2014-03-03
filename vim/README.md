# Vim configuration for web developer

[github.com/tantion/vim](//github.com/tantion/vim)

## vim inline configuration

put the code on the head of the file.

- 2 spaces tab indent

    `// vim:ts=2:sts=2:sw=2:`

- 4 spaces tab indent

    `// vim:ts=4:sts=4:sw=4:`

## tips

- switch tab
    `gt` // next tab
    `gT` // prev tab
    `:tabnew` // new tab
    `:e filename` // edit filename

- paste without auto indent in terminal.

    ```shell
    :set paste
    p
    :set nopaste
    ```

- switch split window

    `<ctrl>wh` // jump to left
    `<ctrl>wj` // jump to down
    `<ctrl>wk` // jump to up
    `<ctrl>wl` // jump to right

- replace >tab to spaces

    `:retab`

- sudo write when editing

    `!sudo tee % > /dev/null`

