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
          if (basicTsTypes.indexOf(text) >= 0) {
            vscode.env.openExternal(
              vscode.Uri.parse(`https://www.typescriptlang.org/docs/handbook/basic-types.html#${text}`)
            );
            return true;
          } else {
            switch (text) {
              case 'interface':
                vscode.env.openExternal(
                  vscode.Uri.parse('https://www.typescriptlang.org/docs/handbook/interfaces.html')
                );
                return true;
              case 'function':
                vscode.env.openExternal(
                  vscode.Uri.parse('https://www.typescriptlang.org/docs/handbook/functions.html')
                );
                return true;
              case 'class':
                vscode.env.openExternal(vscode.Uri.parse('https://www.typescriptlang.org/docs/handbook/classes.html'));
                return true;
              case 'enum':
                vscode.env.openExternal(vscode.Uri.parse('https://www.typescriptlang.org/docs/handbook/enums.html'));
                return true;
              case 'null':
              case 'undefined':
                vscode.env.openExternal(
                  vscode.Uri.parse('https://www.typescriptlang.org/docs/handbook/basic-types.html#null-and-undefined')
                );
                return true;
              default:
                if (text.startsWith('<') && text.endsWith('>')) {
                  vscode.env.openExternal(
                    vscode.Uri.parse('https://www.typescriptlang.org/docs/handbook/generics.html')
                  );
                  return true;
                }
            }
          }
        }
      }
    }
    return false;
  }
}
