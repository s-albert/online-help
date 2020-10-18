import * as vscode from 'vscode';

export class Fallback {
  static openLink(): boolean {
    const activeTextEditor = vscode.window.activeTextEditor;
    if (activeTextEditor) {
      const language = activeTextEditor.document.languageId;
      let selection: vscode.Range = activeTextEditor.selection;
      if (selection) {
        if (selection.isEmpty) {
          selection = activeTextEditor.document.getWordRangeAtPosition(vscode.window.activeTextEditor.selection.active);
        }
        if (!selection.isEmpty) {
          const text = activeTextEditor.document.getText(selection).toLowerCase().trim();
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
              vscode.env.openExternal(vscode.Uri.parse('https://www.typescriptlang.org'));
              return true;
            case 'javascript':
              vscode.env.openExternal(vscode.Uri.parse('https://developer.mozilla.org/de/docs/Web/JavaScript'));
              return true;
            case 'cpp':
              vscode.env.openExternal(vscode.Uri.parse('https://www.tutorialspoint.com/cplusplus/cpp_references.htm'));
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

            default:
              vscode.window.showErrorMessage(`No word can be extracted at your current position.`);
          }
        }
      } else {
        vscode.window.showErrorMessage(`The selection is empty.`);
      }
    }
    return false;
  }
}