import * as vscode from 'vscode'

export async function removeConsolesFromDocument(document: vscode.TextDocument): Promise<void> {
  const consoleDotLogRegex = /console\.log\s*\([\s\S]*?\)(?:\s*;)?/g
  const currentDocText = document.getText()

  if (!consoleDotLogRegex.test(currentDocText)) {
    return
  }

	/* Replacing the current text with updated textt */
  const updatedText = currentDocText.replace(consoleDotLogRegex, '')
	
  const startPosition = new vscode.Position(0, 0)
  const endPosition = new vscode.Position(document.lineCount - 1, document.lineAt(document.lineCount - 1).text.length)
  const range = new vscode.Range(startPosition, endPosition)
	
  /* Replace the content without consoles */
  const workspaceEdit = new vscode.WorkspaceEdit()
  workspaceEdit.replace(document.uri, range, updatedText)
  await vscode.workspace.applyEdit(workspaceEdit)
  
}

async function showWarningDialogMessage<T extends string>(message: string, ...items: T[]): Promise<T | undefined> {
  return await vscode.window.showWarningMessage(message, ...items)
}

export function activate(context: vscode.ExtensionContext) {
  const currentFileCommand = vscode.commands.registerCommand('removeConsoleLogsCurrentFile', async () => {
    let editor = vscode.window.activeTextEditor
    if (editor) {
      await removeConsolesFromDocument(editor.document)
    }
  })

  const openedFilesCommand = vscode.commands.registerCommand('removeConsoleLogsOpenedFiles', async () => {
    const shouldProceed = await showWarningDialogMessage(
      'This action will remove all console.log from opened files. Do you want to proceed?',
      'Yes',
      'No'
    )

    if (shouldProceed === 'Yes') {
      vscode.workspace.textDocuments.forEach(async (document) => {
        /* Filter out only JS and TS documents */
        if (document && (document.languageId === 'javascript' || document.languageId === 'typescript')) {
          await removeConsolesFromDocument(document)
        }
      })
    }
  })

  const entireProjectCommand = vscode.commands.registerCommand('removeConsoleLogsFromProject', async () => {
    const shouldProceed = await showWarningDialogMessage(
      'This action will remove all console.log from entire project. It may takes time depending on your project size. Do you want to proceed?',
      'Yes',
      'No'
    )

    if (shouldProceed === 'Yes') {
      /* Find all JavaScript and TypeScript files */
      const files = await vscode.workspace.findFiles('**/*.{js,ts}')

      files.forEach(async (fileUri) => {
        const document = await vscode.workspace.openTextDocument(fileUri)
        await removeConsolesFromDocument(document)
      })
    }
  })

  context.subscriptions.push(currentFileCommand, openedFilesCommand, entireProjectCommand)
}

export function deactivate() {}
console.log()
   