import * as vscode from 'vscode';

export class Fallback {
  static openLink(): boolean {
    const activeTextEditor = vscode.window.activeTextEditor;
    if (activeTextEditor) {
      const selection = activeTextEditor.document.getWordRangeAtPosition(
        vscode.window.activeTextEditor.selection.active
      );
      if (selection && !selection.isEmpty) {
        const text = activeTextEditor.document.getText(selection).toLowerCase().trim();
        const language = activeTextEditor.document.languageId;
        if (vscode.workspace.getConfiguration().get('online-help.enableFallback', true)) {
          vscode.env.openExternal(vscode.Uri.parse(`https://www.google.com/search?q=${language} ${text}`));
        } else {
          vscode.window.showErrorMessage(`Could not find any help for: ${text} (${language})`);
        }
      } else {
        vscode.window.showErrorMessage(`No word can be extracted at your current position.`);
      }
      return true;
    }
  }
}
