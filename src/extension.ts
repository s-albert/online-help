import * as vscode from 'vscode';
import { Rxjs } from './rxjs';
import { Typescript } from './typescript';
import { Dotnet } from './dotnet';
import { Devdocs } from './devdocs';
import { Fallback } from './fallback';
import { Clipboard } from './clipboard';

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
  context.subscriptions.push(
    regCommand(
      'online-help.openLink',
      () => Rxjs.openLink() || Typescript.openLink() || Dotnet.openLink() || Devdocs.openLink() || Fallback.openLink()
    )
  );

  context.subscriptions.push(
    regCommand(
      'online-help.openClipboardLink',
      () => Clipboard.openLink()
    )
  );
}
