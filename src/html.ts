import * as vscode from 'vscode';

const htmlElements: string[] = [
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'bdi',
  'bdo',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'head',
  'header',
  'hr',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'meta',
  'meter',
  'nav',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'picture',
  'pre',
  'progress',
  'q',
  'rb',
  'rp',
  'rt',
  'rtc',
  'ruby',
  's',
  'samp',
  'script',
  'section',
  'select',
  'slot',
  'small',
  'source',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'template',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  'video',
  'wbr',
];

export class Html {
  static openLink(): boolean {
    if (vscode.workspace.getConfiguration().get('online-help.enableHtml', true)) {
      const activeTextEditor = vscode.window.activeTextEditor;
      if (activeTextEditor && activeTextEditor.document.languageId === 'html') {
        const selection = activeTextEditor.document.getWordRangeAtPosition(
          vscode.window.activeTextEditor.selection.active
        );
        if (selection && !selection.isEmpty) {
          const text = activeTextEditor.document.getText(selection).toLowerCase().trim();
          {
            if (htmlElements.indexOf(text) >= 0) {
              vscode.env.openExternal(vscode.Uri.parse(`https://devdocs.io/html/element/${text}`));
              return true;
            }
          }
        }
      }
    }
    return false;
  }
}
