import * as vscode from 'vscode';

export async function writeFileContent(uri: vscode.Uri, content: string) {
  const enc = new TextEncoder();
  await vscode.workspace.fs.writeFile(uri, enc.encode(content));
}