import * as vscode from 'vscode';

const basicTsTypes: string[] = [
  'boolean',
  'number',
  'string',
  'array',
  'tuple',
  'enum',
  'unknown',
  'any',
  'void',
  'never',
  'object',
];

const nullAndUndefinedTsTypes: string[] = ['null', 'undefined'];

export class Typescript {
  static openLink(): boolean {
    if (vscode.workspace.getConfiguration().get('online-help.enableTypescript', true)) {
      const activeTextEditor = vscode.window.activeTextEditor;
      if (
        (activeTextEditor && activeTextEditor.document.languageId === 'typescript') ||
        activeTextEditor.document.languageId === 'typescriptreact'
      ) {
        const selection = activeTextEditor.document.getWordRangeAtPosition(
          vscode.window.activeTextEditor.selection.active
        );
        if (selection && !selection.isEmpty) {
          const text = activeTextEditor.document.getText(selection).toLowerCase().trim();
          if (text === 'typescript') {
            vscode.env.openExternal(vscode.Uri.parse('https://www.typescriptlang.org'));
            return true;
          }
          if (basicTsTypes.indexOf(text) >= 0) {
            vscode.env.openExternal(
              vscode.Uri.parse(`https://www.typescriptlang.org/docs/handbook/basic-types.html#${text}`)
            );
            return true;
          } else if (nullAndUndefinedTsTypes.indexOf(text) >= 0) {
            vscode.env.openExternal(
              vscode.Uri.parse(`https://www.typescriptlang.org/docs/handbook/basic-types.html#null-and-undefined`)
            );
            return true;
          } else {
            return false;
          }
        }
      }
    } else {
      return false;
    }
  }
}
