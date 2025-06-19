import * as vscode from 'vscode';

export async function listFilesInWorkspace() {
  return await vscode.workspace.findFiles('**/*.{ts,js,html,css,py,java}');
}