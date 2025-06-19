# Ollama VS Code Extension

A local AI-powered coding assistant for VS Code using your Ollama models.

## Features
- Select files to edit via local AI
- Send file content to Ollama API
- Receive and write modified content
- List files in workspace

## Requirements
- Ollama running locally at `http://localhost:11434`
- Installed models (eg. `llama3`)

## Install
\`\`\`bash
npm install
npm run compile
vsce package
code --install-extension ollama-vscode-extension-0.0.1.vsix
\`\`\`