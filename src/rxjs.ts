import * as vscode from 'vscode';

const rxjsOperators: string[] = [
  'ajax',
  'bindCallback',
  'bindNodeCallback',
  'defer',
  'empty',
  'from',
  'fromEvent',
  'fromEventPattern',
  'generate',
  'interval',
  'of',
  'range',
  'throwError',
  'timer',
  'iif',
  'combineLatest',
  'concat',
  'forkJoin',
  'merge',
  'race',
  'zip',
  'buffer',
  'bufferCount',
  'bufferTime',
  'bufferToggle',
  'bufferWhen',
  'concatMap',
  'concatMapTo',
  'exhaust',
  'exhaustMap',
  'expand',
  'groupBy',
  'map',
  'mapTo',
  'mergeMap',
  'mergeMapTo',
  'mergeScan',
  'pairwise',
  'partition',
  'pluck',
  'scan',
  'switchMap',
  'switchMapTo',
  'window',
  'windowCount',
  'windowTime',
  'windowToggle',
  'windowWhen',
  'audit',
  'auditTime',
  'debounce',
  'debounceTime',
  'distinct',
  'distinctKey',
  'distinctUntilChanged',
  'distinctUntilKeyChanged',
  'elementAt',
  'filter',
  'first',
  'ignoreElements',
  'last',
  'sample',
  'sampleTime',
  'single',
  'skip',
  'skipLast',
  'skipUntil',
  'skipWhile',
  'take',
  'takeLast',
  'takeUntil',
  'takeWhile',
  'throttle',
  'throttleTime',
  'combineAll',
  'concatAll',
  'exhaust',
  'mergeAll',
  'startWith',
  'withLatestFrom',
  'multicast',
  'publish',
  'publishBehavior',
  'publishLast',
  'publishReplay',
  'share',
  'catchError',
  'retry',
  'retryWhen',
  'tap',
  'delay',
  'delayWhen',
  'dematerialize',
  'materialize',
  'observeOn',
  'subscribeOn',
  'timeInterval',
  'timestamp',
  'timeout',
  'timeoutWith',
  'toArray',
  'defaultIfEmpty',
  'every',
  'find',
  'findIndex',
  'isEmpty',
  'count',
  'max',
  'min',
  'reduce',
];

const rxjsCreatonOperators: string[] = [
  'ajax',
  'bindCallback',
  'bindNodeCallback',
  'defer',
  'empty',
  'from',
  'fromEvent',
  'fromEventPattern',
  'generate',
  'interval',
  'of',
  'range',
  'throwError',
  'timer',
  'iif',
  'combineLatest',
  'concat',
  'forkJoin',
  'merge',
  'race',
  'zip',
];

export class Rxjs {
  static openLink(): boolean {
    if (vscode.workspace.getConfiguration().get('online-help.enableRxjs', true)) {
      const activeTextEditor = vscode.window.activeTextEditor;
      if (activeTextEditor) {
        const selection = activeTextEditor.selection;
        if (!selection.isEmpty) {
          const text = activeTextEditor.document.getText(selection).trim();
          if (text === 'rxjs') {
            vscode.env.openExternal(
              vscode.Uri.parse('https://xgrommx.github.io/rx-book/content/which_operator_do_i_use/index.html')
            );
            return true;
          }
          if (rxjsCreatonOperators.indexOf(text) >= 0) {
            vscode.env.openExternal(vscode.Uri.parse(`https://devdocs.io/rxjs/api/function/${text}.html`));
            return true;
          } else if (rxjsOperators.indexOf(text) >= 0) {
            vscode.env.openExternal(vscode.Uri.parse(`https://devdocs.io/rxjs/api/operators/${text}.html`));
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
