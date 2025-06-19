import * as vscode from 'vscode';
import { readFileContent } from './commands/readFile';
import { sendToLLM } from './commands/sendToLLM';
import { writeFileContent } from './commands/writeFile';
import { listFilesInWorkspace } from './commands/listFiles';

export function activate(context: vscode.ExtensionContext) {
  const editFileCmd = vscode.commands.registerCommand('extension.llmEditFile', async () => {
    const uri = await vscode.window.showOpenDialog({ canSelectFiles: true });
    if (!uri) { return; }
    const content = await readFileContent(uri[0]);
    const modified = await sendToLLM(content);
    await writeFileContent(uri[0], modified);
    vscode.window.showInformationMessage('File updated by Ollama!');
  });

  const listFilesCmd = vscode.commands.registerCommand('extension.listFiles', async () => {
    const files = await listFilesInWorkspace();
    vscode.window.showInformationMessage(`Found ${files.length} files.`);
  });

  context.subscriptions.push(editFileCmd, listFilesCmd);
}

export function deactivate() {}