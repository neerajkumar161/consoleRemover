import * as assert from 'assert'
import * as vscode from 'vscode'
import { removeConsolesFromDocument } from '../../extension'
import { TempFile } from './../helper'

suite('should resolve removeConsolesFromDocument function', () => {
  vscode.window.showInformationMessage('Start all tests.')

  test('Should remove console.log statements and save the file', async () => {
    const fileContents = `function main() {
			const name = 'Neeraj Kumar'
			console.log('Hello, from console-remover')
		}
		`
    const expectedContents = `function main() {
			const name = 'Neeraj Kumar'
			
		}
		`
    const tempFile = new TempFile(fileContents)

    const document = await vscode.workspace.openTextDocument(tempFile.filePath)
    await removeConsolesFromDocument(document)
    await document.save()

    assert.strictEqual(tempFile.actualContents, expectedContents)

    /* Important to remove the file, after assertion */
    tempFile.removeTempFile()
  })
})
