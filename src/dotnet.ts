import * as vscode from 'vscode';

export class Dotnet {
  static openLink(): boolean {
    if (vscode.workspace.getConfiguration().get('online-help.enableDotnet', true)) {
      const activeTextEditor = vscode.window.activeTextEditor;
      if (
        (activeTextEditor && activeTextEditor.document.languageId === 'csharp') ||
        activeTextEditor.document.languageId === 'vb'
      ) {
        const selection = activeTextEditor.document.getWordRangeAtPosition(
          vscode.window.activeTextEditor.selection.active
        );
        if (selection && !selection.isEmpty) {
          const text = activeTextEditor.document.getText(selection).toLowerCase().trim();
          vscode.env.openExternal(
            vscode.Uri.parse(`https://docs.microsoft.com/en-us/search/?terms=${text}&scope=.NET`)
          );
          return true;
        }
      }
    }
    return false;
  }
}
