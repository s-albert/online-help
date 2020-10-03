# Copy Text
"Copy text" is a Visual Studio Code extension that offers more copy options: Copies text without colors, optionally adds metainfo like document name and date.

## Commands
### Copy text without syntax highlighting
* press `Ctrl+Shift+C`
* or select 'Copy Without Syntax Highlighting' from your context menu
* or select 'Copy Without Syntax Highlighting' from command palette (F1)

### Copy text with metainfo
* select 'Copy Text With Metainfo' from command palette (F1)
* press `Ctrl+Shift+M`

It will look like this:
```
    const selection = editor.selection;
    const caret = selection.start;
(c:\Git-Repos\comment-ts\src\documenter.ts - line 107 - 26.5.2018 06:22:50)
```

### Append text to clipboard (without syntax highlighting)
(If you like to copy more parts and paste them at once.)
* select 'Copy and Append Text Without Syntax Highlighting' from command palette (F1)
* press `Ctrl+Shift+A Ctrl+Shift+C`

### Append text to clipboard with metainfo
(If you like to copy more parts including metainfo and paste them at once.)
* select 'Copy and Append Text With Metainfo' from command palette (F1)
* press `Ctrl+Shift+A Ctrl+Shift+M`

### Copy code for markdown
* select 'Copy Code for Markdown' from command palette (F1)

## Configuration
There are several options how to compose the metainfo (see contributions).


