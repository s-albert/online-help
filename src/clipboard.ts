import * as vscode from 'vscode';

export class Clipboard {
  static async openLink(): Promise<boolean> {
    const text = await vscode.env.clipboard.readText();
    if (text && text.length >= 3) {
      vscode.env.openExternal(vscode.Uri.parse(`https://stackoverflow.com/search?q=${text}`));
      return true;
    } else {
      return false;
    }
  }
}
