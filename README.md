# Online Help

"Online Help" is a Visual Studio Code extension that offers context sensitive online help. For special topis like rxjs it opens appropriate documentation pages. If no specific documentation is defined for the selected keyword in your editor,
it searches on devdocs.io with the vscode language and the keyword.
If the language is not defined for devdocs, it googles for the keyword and adds the language id of the open file to get better search results.

## Commands

### Open online help

- press `Ctrl+Shift+F1`
- or select 'Open online help' (Ctrl Shift F1)

## Extension Settings

- There are options to enable/disable specific online help in `Extension Settings`.

## Specific online help pages to keyword selection

- RxJs operators (javascript, typescript, typescriptreact)
- Typescript basic types (typescript, typescriptreact)
- Html (html)
- Devdocs (typescript, typescriptreact, javascript, html, css, c, c++, java, python, ruby, rust, perl, php, closure,
  coffeescript, go, dart, bash, bootstrap, and markdown).
  Go to https://devdocs.io/ and enable the desired help topics first.

## Online help according to the language file

- If nothing is selected, it will open reference pages related to the file type like groovy, dockerfile, C, C++, powershell,...

## Open browser help about the clipboard text

- If you copied e.g. an error message stackoverflow will open and search for the clipboard text.
