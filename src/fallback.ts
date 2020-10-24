import * as vscode from 'vscode';

export class Fallback {
  static openLink(): boolean {
    const activeTextEditor = vscode.window.activeTextEditor;
    if (activeTextEditor) {
      const language = activeTextEditor.document.languageId;
      const selection = activeTextEditor.selection;
      if (selection && !selection.isEmpty) {
        const text = activeTextEditor.document.getText(selection).trim();
        if (vscode.workspace.getConfiguration().get('online-help.enableFallback', true)) {
          vscode.env.openExternal(vscode.Uri.parse(`https://www.google.com/search?q=${language} ${text}`));
          return true;
        } else {
          vscode.window.showErrorMessage(`Could not find any help for: ${text} (${language})`);
        }
      } else {
        switch (language) {
          case 'groovy':
            vscode.env.openExternal(vscode.Uri.parse(`http://groovy-lang.org/single-page-documentation.html`));
            return true;
          case 'typescript':
          case 'typescriptreact':
            if (activeTextEditor.document.fileName.endsWith('.spec.ts')) {
              vscode.env.openExternal(vscode.Uri.parse('https://jasmine.github.io/api/edge/global'));
            } else {
              vscode.env.openExternal(vscode.Uri.parse('https://www.typescriptlang.org/docs/handbook/'));
            }
            return true;
          case 'javascript':
            vscode.env.openExternal(vscode.Uri.parse('https://developer.mozilla.org/de/docs/Web/JavaScript'));
            return true;
          case 'cpp':
            vscode.env.openExternal(vscode.Uri.parse('https://www.tutorialspoint.com/cplusplus/cpp_references.htm'));
            return true;
          case 'csharp':
            vscode.env.openExternal(
              vscode.Uri.parse('https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/')
            );
            return true;
          case 'html':
            vscode.env.openExternal(vscode.Uri.parse('https://developer.mozilla.org/en-US/docs/Web/HTML/Element'));
            return true;
          case 'css':
            vscode.env.openExternal(vscode.Uri.parse('https://developer.mozilla.org/en-US/docs/Web/CSS/Reference'));
            return true;
          case 'c':
            vscode.env.openExternal(
              vscode.Uri.parse('https://docs.microsoft.com/en-us/cpp/c-language/c-language-reference')
            );
            return true;
          case 'bat':
            vscode.env.openExternal(vscode.Uri.parse('https://ss64.com/nt/'));
            return true;
          case 'powershell':
            vscode.env.openExternal(vscode.Uri.parse('https://docs.microsoft.com/en-us/powershell/'));
            return true;
          case 'markdown':
            vscode.env.openExternal(vscode.Uri.parse('https://www.markdownguide.org/basic-syntax/'));
            return true;
          case 'fsharp':
            vscode.env.openExternal(
              vscode.Uri.parse('https://docs.microsoft.com/en-us/dotnet/fsharp/language-reference/')
            );
            return true;
          case 'dockerfile':
            vscode.env.openExternal(vscode.Uri.parse('https://docs.docker.com/engine/reference/builder/'));
            return true;
          case 'r':
            vscode.env.openExternal(vscode.Uri.parse('https://r4ds.had.co.nz/'));
            return true;

          default:
            vscode.window.showErrorMessage(`No keyword can be extracted at the current position.`);
        }
      }
    } else {
      vscode.window.showErrorMessage(`The selection is empty.`);
    }
    return false;
  }
}
