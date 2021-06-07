import * as vscode from 'vscode';

const vsLanguages = [
  'typescript',
  'typescriptreact',
  'javascript',
  'html',
  'css',
  'c',
  'cpp',
  'java',
  'python',
  'ruby',
  'rust',
  'perl',
  'php',
  'closure',
  'coffeescript',
  'go',
  'dart',
  'bash',
  'bootstrap',
  'cpp',
  'markdown',
];

const dedocsLanguages = [
  'ts',
  'ts',
  'js',
  'html',
  'css',
  'c',
  'cpp',
  'java',
  'python',
  'ruby',
  'rust',
  'perl',
  'php',
  'closure',
  'coffeescript',
  'go',
  'dart',
  'bash',
  'bootstrap',
  'cpp',
  'markdown',
];

export class Devdocs {
  static openLink(): boolean {
    if (vscode.workspace.getConfiguration().get('online-help.devdocs', true)) {
      const activeTextEditor = vscode.window.activeTextEditor;
      const languageId = activeTextEditor.document.languageId;
      const index = vsLanguages.indexOf(languageId);
      const customLang = vscode.workspace.getConfiguration().get('online-help.setDevdocsLang');
      if (index > -1) {
        let selection: vscode.Range = activeTextEditor.selection;
        if (selection) {
          if (selection.isEmpty) {
            selection = activeTextEditor.document.getWordRangeAtPosition(
              vscode.window.activeTextEditor.selection.active
            );
          }
          if (selection && !selection.isEmpty) {
            const text = activeTextEditor.document.getText(selection).trim();
            const keyword = text.toLowerCase();
            if (customLang) {
              vscode.env.openExternal(vscode.Uri.parse(`http://devdocs.io/#q=${customLang} ${keyword}`));
            } else {
              vscode.env.openExternal(vscode.Uri.parse(`http://devdocs.io/#q=${dedocsLanguages[index]} ${keyword}`));
            }
            return true;
          }
        }
      }
    }
    return false;
  }
}
