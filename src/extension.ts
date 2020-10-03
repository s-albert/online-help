import * as vscode from 'vscode';
import { Rxjs } from './rxjs';
import { Typescript } from './typescript';

/**
 * Runs command
 * @param commandName
 * @param implFunc
 */
function regCommand(commandName: string, implFunc: () => void): vscode.Disposable {
  try {
    return vscode.commands.registerCommand(commandName, implFunc);
  } catch (e) {
    console.error(`${commandName}: ${e}`);
  }
}

export function activate(context: vscode.ExtensionContext): void {
  context.subscriptions.push(regCommand('online-help.openLink', () => Rxjs.openLink() || Typescript.openLink()));
}
