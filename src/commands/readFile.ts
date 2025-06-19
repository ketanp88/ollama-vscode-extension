import * as vscode from 'vscode';

export async function readFileContent(uri: vscode.Uri) {
  const data = await vscode.workspace.fs.readFile(uri);
  return data.toString();
}